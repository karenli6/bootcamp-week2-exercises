const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')

const run = async () => {
  try {
    // Get all users and their pets
    const data = await User.query().withGraphJoined('pets')
    // console.dir(data, {depth:3})
  
    // Get all users, their pets, AND their children
    const fam = await User.query().withGraphJoined('[pets, children]')
    // console.dir(fam, {depth:10})

    // Get all users, their parents, and their grandparents
    const extended_fam = await User.query().withGraphJoined('parent.^2 ')
    // console.dir(extended_fam, {depth:10})
    console.log(extended_fam)


    cleanup()
    return data


  } catch (err) {
    console.log(err)
  }
  // Write Queries and Logs Here !!!




  // Get all users, their pets, their chilren, and their childrens' pets

  // -----
}

run()
