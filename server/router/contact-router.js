const express = require('express')
const router = express.Router()
const { contactForm, getTestimonials } = require('../controllers/contact-controller')
const { getFeedbacks } = require('../controllers/contact-controller')
const authMiddleware = require('../middlewares/auth-middleware')

router.route('/contact').post(contactForm)
router.route('/getFeedback').get(authMiddleware, getFeedbacks)

module.exports = router