exports.up = async knex => knex.schema.createTable('friends', table => {
    table
      .uuid('id')
      .notNullable()
      .primary()
      .defaultTo(knex.raw('uuid_generate_v4()'))
  
    table 
      .uuid('requestor').references('users.id')
      .notNullable()
    table
      .uuid('requested').references('users.id')
      .notNullable()
  
  
    table
      .string('greeting')
      .notNullable()
  
    table
      .integer('friendship_years')
  
  })
  
  exports.down = async knex => knex.schema.dropTableIfExists('friends')
  