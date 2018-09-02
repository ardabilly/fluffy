import Router from 'express/lib/router/index'
import Env from 'dotenv'

const router = Router()
const config = Env.config('.env')

/**
 * Create root endpoint
 */
router.get('/config', async (req, res) => {
  res.json(config.parsed)
})

export default router
