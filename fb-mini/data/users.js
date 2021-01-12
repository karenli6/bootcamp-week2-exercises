const casual = require('casual')

casual.define('users', () => ({
  id: casual.uuid,
  email: casual.email,
  firstname: casual.first_name,
  lastname: casual.last_name,
  password: casual.password,
  bio: casual.sentence,
  followers: casual.integer(from=0, to=1000),
  following: casual.integer(from=0, to=1000),
  numPost: casual.integer(from=0, to=50)
}))


const userData = []

for (let i = 0; i < 20; ++i) {
  userData.push(casual.users)
} 

console.log(userData)
module.exports = userData
