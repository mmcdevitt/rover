const router = require('express').Router()
const {User} = require('../db/models')

router.get('/', async (req, res, next) => {
  try {
    const vets = await User.findAll({
      where: {
        isVet: true
      }
    })
    res.json(vets)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const vet = await User.findOne({
      where: {
        id: req.params.id
      }
    })
    res.json(vet)
  } catch (err) {
    next(err)
  }
})

module.exports = router
