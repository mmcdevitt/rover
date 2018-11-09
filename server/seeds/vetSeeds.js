const { User } = require('../db/models')
const faker = require('faker')
const _ = require('lodash')

const vetSeed = async () => {
  try {
    const data = []

    for (let i = 0; i < 100; i++) {
      data.push({
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        imageUrl: faker.image.people(),
        password: '123',
        isVet: true
      })
    }

    await User.bulkCreate(data, {returning: true})
    
    console.log('[SUCCESS]: Database synced successfully.')
  } catch (err) {
    console.log('[ERROR]: Database not synced successfully.')
    console.log(err)
  } finally {
    console.log('Shutting genre connection')
    console.log('Genre db closed')
  }
}

module.exports = vetSeed
