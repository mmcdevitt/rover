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
        description: faker.lorem.sentence(),
        email: faker.internet.email(),
        imageUrl: 'https://vcahospitals.com/great-lakes/-/media/vca/images/global/5050_980x800_ourveterinarians.ashx',
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
