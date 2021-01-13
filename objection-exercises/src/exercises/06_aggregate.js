const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')

const run = async () => {
  // Write Queries and Logs Here !!!
  try{
    // total number of users
    const total_users = await User.query().resultSize()
    console.log(total_users)

    // average age of users
    const average_age = await User.query().avg('age')
    console.log(average_age)

    // total number of dogs
    const total_dogs = await Pet.query().where('type', '=', 'DOG').resultSize()
    console.log(total_dogs)
    cleanup()
    return total_users


  } catch(err){
    console.log(err)
  }
}

run()
