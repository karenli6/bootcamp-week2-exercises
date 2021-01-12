const casual = require('casual')
const userData = require('./users')

casual.define('posts', ({userId}) => ({
  id: casual.uuid,
  poster: userId,
  postContent: casual.sentence,
  likes: casual.integer(from=0, to=1000),
  comments: casual.integer(from=0, to=1000)
}))

const postsData = []

for (let i = 0; i < 20; ++i) {
    const userId = casual.random_element(userData).id
    postsData.push(casual.posts({userId}))
} 

// console.log(userData)
module.exports = postsData
