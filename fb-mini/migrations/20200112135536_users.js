exports.up = async knex => knex.schema.createTable('users', table => {
  table
    .uuid('id')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))

  table
    .string('email')
    .unique()
    .notNullable()
  table
    .string('firstname')
    .notNullable()


  table
    .string('lastname')
    .notNullable()

  table
    .string('password')
    .unique()
    .notNullable()
  table
    .string('bio')
    .notNullable()

  table
    .integer('followers')
    .notNullable()

  table
    .integer('following')
    .notNullable()
  
  table 
    .integer('numPosts')
    .notNullable()

})
 
exports.down = async knex => {
  knex.schema.dropTableIfExists('users')
}
