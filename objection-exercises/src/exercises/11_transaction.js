const cleanup = require('../lib/cleanup')
const casual = require('casual')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')


const run = async () => {
  /**
    Create a transaction. It should (without using insertGraph): create a new
    user with returning(), give that user a pet, and fetch the total number of
    pets. If that total number exceeds 15, it should delete all BIRDS. Test
    the transaction by throwing an error: throw new Error("This is an error").
   */
  try {
    const newestValue = await User.transaction(async trx => {
      const newUser = await User.query(trx)
        .insert({       
          id: casual.uuid,
          email: casual.email,
          age: casual.integer(1, 100),
          firstName: 'Harry',
          lastName:'Potter',
          created_at: casual.moment,
          updated_at: casual.moment,
        }).returning('*')
      // console.log(newUser)

      const newBird = await newUser.$relatedQuery('pets', trx)
        .insert({          
          id: casual.uuid,
          ownerId: newUser.id,
          type: 'BIRD',
          name: 'Picco',
          created_at: casual.moment,
          updated_at: casual.moment, }).returning('*')
        // console.log(newBird)
        

        const totalPets = await Pet.query().resultSize()
        if (totalPets > 15){
          // console.log("too big")
          const deletedPets = await Pet.query().delete().where('type', '=', 'BIRD').returning('*')
          // console.log(deletedPets)
        }

        return newUser
    })

    cleanup()
    // console.log(newestValue)
    return newestValue
  } catch (err) {
    console.log("THIS IS AN ERROR")
    console.log(err)
  }
}

  run()

