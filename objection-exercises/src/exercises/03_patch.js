const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')

const run = async () => {
  try{
    // Update anyone below the age of 18 to be 18 years old (they shouldn't be keeping pets)

    const data = await User.query()
    .patch({ age: 20 })
    .where('age', '<', 18)


    console.log(data)
    cleanup()
    return data
    
  } catch(err){
    console.log(err)
  }
  // Write Queries and Logs Here !!
  // -----
}

run()
