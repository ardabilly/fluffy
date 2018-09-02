import { Router } from 'express'

/**
 * Import any routes
 */
import app from './app'

/**
 * Create new Instance of Router
 */
const router = Router()

/**
 * User routes here
 */
router.use(app)

export default router
