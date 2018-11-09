const router = require('express').Router()
const {Appointment} = require('../db/models')

router.post('/', async (req, res, next) => {
  try {
    const appointment = await Appointment.create({
      userId: 1,
      vetId: req.body
    })
    res.json(appointment)
  } catch (err) {
    next(err)
  }
})

module.exports = router
