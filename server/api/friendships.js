const router = require('express').Router()
const {Friendship} = require('../db/models')

router.post('/', async (req, res, next) => {
  try {
    const friendship = await Friendship.create()
    res.json(friendship)
  } catch (err) {
    next(err)
  }
})

module.exports = router
