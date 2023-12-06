import express from 'express'
import { createReview, createWinery, deleteReview, deleteWinery, getAllWineries, getSingleWinery, updateWinery } from '../controllers/wineries.js'
import { getProfile, login, register } from '../controllers/users.js'
import secureRoute from './secureRoute.js'

const router = express.Router()

//Wineries
router.route('/wineries')
  .get(getAllWineries)
  .post(secureRoute, createWinery)

router.route('/wineries/:wineryId')
  .get(getSingleWinery)
  .put(secureRoute, updateWinery)
  .delete(secureRoute, deleteWinery)

//Review
router.route('/wineries/:wineryId/reviews')
  .post(secureRoute, createReview)

router.route('/wineries/:wineryId/reviews/:reviewId')
  .delete(secureRoute, deleteReview)

// Auth
router.route('/register')
  .post(register)

router.route('/login')
  .post(login)

router.route('/profile')
  .get(secureRoute, getProfile)

export default router