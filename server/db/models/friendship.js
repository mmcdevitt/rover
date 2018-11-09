const Sequelize = require('sequelize')
const db = require('../db')

const Friendship = db.define('friendship', {
  userId: {
    type: Sequelize.INTEGER
  },
  vetId: {
    type: Sequelize.INTEGER
  }
})

module.exports = Friendship
