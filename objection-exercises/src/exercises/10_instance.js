const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const run = async () => {
  // Write Queries and Logs Here !!!
  try {
    // Get an instance of a user using findById(<YOUR_ID>)
    const person = await User.query().findById('659530f7-16be-4d4e-9183-1ff09acb148b')
    // Use that instance to create a new pet related that user
    const adding_new_pet = await person.$relatedQuery('pets')
      .insert({
        ownerId: '659530f7-16be-4d4e-9183-1ff09acb148b',
        type: 'DOG',
        name: 'newestDog',
      })
    // console.log(adding_new_pet)

    // Use that instance to get all of the user's pets and children
    // Hint -- use $fetchGraph
    // https://vincit.github.io/objection.js/api/model/instance-methods.html#fetchgraph
    const compilation = await person.$fetchGraph('[pets, children]', User)
    console.log(compilation)
    // -----
    cleanup()
  } catch (err) {
    console.log(err)
  }

}

run()
