const casual = require('casual')

casual.define('user', () => ({
    name: casual.name, 
    age: casual.integer(from=5, to=80),
    zip:casual.zip(5)


}))

const users = []

for (let i = 0; i < 5; ++i) {
    users.push(casual.user)
  }
  
console.log(users)
module.exports = users