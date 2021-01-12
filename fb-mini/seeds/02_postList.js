
const postsData = require('../data/postList')

exports.seed = knex => knex('postList').del()
  .then(() => knex('postList').insert(postsData))

