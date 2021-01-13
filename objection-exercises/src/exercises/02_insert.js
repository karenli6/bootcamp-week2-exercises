const cleanup = require('../lib/cleanup')
const casual = require('casual')

// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')


const run = async () => {
  try {
    // Insert yourself in the users table

    // data = await User.query().insert({
    //   email: 'karennli49@gmail.com',
    //   firstName: 'Karen',
    //   lastName: 'Li',
    //   age: '18',

    // })

    // console.log(data)

    // Insert a pet belonging to you (get your ID from Postico or DBeaver)

    add_pet = await Pet.query().insert({
      ownerId: '659530f7-16be-4d4e-9183-1ff09acb148b',
      type: 'DOG',
      name: 'KarenDog',
    })
    console.log(add_pet)
    cleanup()
    return add_pet


  } catch (err) {
    console.log(err)
  }

}

run()
