const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')

const run = (async () => {
  try{
    const data = await User.query().withGraphFetched('pets')
    // console.log(data)
    cleanup()
    return data
  } catch(err){
    console.log(err)
  }
})

run()
