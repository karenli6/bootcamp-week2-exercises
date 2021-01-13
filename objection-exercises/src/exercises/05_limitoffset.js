const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const run = async () => {
  // Write Queries and Logs Here !!!
  try {
  // Get the first 5 users, ordered by lastName
  const first_batch = await User.query().orderBy('lastName').limit(5)
  // console.log(data)

  
  // Get the second 5 users, ordered by lastName
  const second_batch = await User.query().orderBy('lastName').limit(5).offset(5)
  console.log(second_batch)
  // -----
  cleanup()
  return second_batch

  }
  catch(err){
    console.log(err)
  }
}

run()
