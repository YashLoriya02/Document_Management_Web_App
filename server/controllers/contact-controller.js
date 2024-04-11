const Contact = require('../models/contact-model')

const contactForm = async (req, res) => {
    try {
        const response = req.body
        await Contact.create(response)
        return res.send({ message: "Data Saved Successfully." })
    } catch (error) {
        res.send({ message: "Some Error Occured." })
    }
}

const getFeedbacks = async (req, res) => {
    const feedbacks = await Contact.find({})
    if (!feedbacks) {
        return res.status(500).json({ message: "No Testimonials Found" })
    }
    res.status(200).json(feedbacks)
}

module.exports = { contactForm, getFeedbacks }