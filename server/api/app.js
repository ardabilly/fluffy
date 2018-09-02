import Router from 'express/lib/router/index'
import Env from 'dotenv'
import events from '../dummy/events.json'
import labels from '../dummy/labels.json'

const router = Router()
const config = Env.config('.env')

/**
 * Create root endpoint
 */
router.get('/config', async (req, res) => {
  res.json(config.parsed)
})
router.get('/events', async (req, res) => {
  res.json(events)
})
router.get('/labels', async (req, res) => {
  res.json(labels)
})

export default router
