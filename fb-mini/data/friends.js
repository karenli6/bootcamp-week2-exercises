// creating related data
const casual = require('casual')
const userData = require('./users')

casual.define('friends', ({user1Id, user2Id}) => ({
  id: casual.uuid, 
  requestor: user1Id,
  requested: user2Id, 
  greeting:casual.sentence, 
  friendship_years:casual.integer(from=0, to=100)
}))

const friendsData = []

for (let i = 0; i <20; i+=1){
  const user1Id = casual.random_element(userData).id
  const user2Id = casual.random_element(userData).id
  friendsData.push(casual.friends({user1Id, user2Id}))
}

module.exports = friendsData
