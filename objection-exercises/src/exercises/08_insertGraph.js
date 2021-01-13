const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')

const run = async () => {
  try {
    // Insert a new person name Peter Bynum with two pet DOGs named Rocco & Rosey
    const graph = await User.query().insertGraph({
      firstName: 'Peter',
      lastName: 'Bynum',
      pets: [
        {
          type: 'DOG',
          name: 'Rocco'
        }
      ]

    })

    return graph
  } catch (err) {
    console.log(err)
  }
}

run()
