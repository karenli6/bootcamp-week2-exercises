const cleanup = require('../lib/cleanup')
// Import models
const Pet = require('../models/Pet')


const run = async () => {
  // Write Queries and Logs Here !!!

  // Delete all CATS
  try{
    const noCats = await Pet.query()
    .delete()
    .where('type', '=', 'CAT')

    cleanup()
    return noCats

  }catch(err){
    console.log(err)
  }
  // -----
}

run()
