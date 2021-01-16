const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const run = async () => {
  // Write Queries and Logs Here !!!
  try {
    // Get an instance of a user using findById(<YOUR_ID>)
    const person = await User.query().findById('1fc1ee0d-2f0a-428e-8b23-0b5097f0f65d')
    // console.log(person)
    // Use that instance to create a new pet related that user
    const adding_new_pet = await person.$relatedQuery('pets')
      .insert({
        ownerId: '1fc1ee0d-2f0a-428e-8b23-0b5097f0f65d',
        type: 'DOG',
        name: 'newestDog',
      })
    // console.log(adding_new_pet)

    // Use that instance to get all of the user's pets and children
    const pets_children = await person.$fetchGraph('[pets, children]')
    console.log(pets_children)
    
    cleanup()
  } catch (err) {
    console.log(err)
  }

}

run()
