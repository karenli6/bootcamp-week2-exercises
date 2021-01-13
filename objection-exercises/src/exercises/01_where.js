const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')

const run = async () => {
  try{
    // Get all users with a specific name (pick it from your database)
    const data = await User.query().where({firstName: 'Kirk'})
    // Do the same with object notation
    console.log('finding name')
    console.log(data)
    // Get all DOGS and BIRDS
    const dogs_birds = await Pet.query().where({type: 'DOG'}).orWhere({type: 'BIRD'})
    console.log('finding dogs and birds')
    console.log(dogs_birds)

    cleanup()
    return dogs_birds
  } catch(err){
    console.log(err)
  }

}

run()
