const cleanup = require('../lib/cleanup')
const casual = require('casual')

// Import models
const User = require('../models/User')

const run = async () => {
  try {
    // Insert a new person name Peter Bynum with two pet DOGs named Rocco & Rosey
    const graph = await User.query().insertGraph({
      id: casual.uuid,
      email: casual.email,
      age: casual.integer(1, 100),
      firstName: 'Peter',
      lastName:'Bynum',
      created_at: casual.moment,
      updated_at: casual.moment,
      pets: [
        {
          id: casual.uuid,
          ownerId: this.id,
          type: 'DOG',
          name: 'Rocco',
          created_at: casual.moment,
          updated_at: casual.moment,
        },
        {
          id: casual.uuid,
          ownerId,
          type: 'DOG',
          name: 'Rosey',
          created_at: casual.moment,
          updated_at: casual.moment,
        }
      ]

    })

    return graph
  } catch (err) {
    console.log(err)
  }
}

run()
