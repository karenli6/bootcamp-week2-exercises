exports.up = async knex => knex.schema.createTable('posts', table => {
    table
        .uuid('id')
        .notNullable()
        .primary()
        .defaultTo(knex.raw('uuid_generate_v4()'))

    table
        .uuid('poster').references('users.id')
        .notNullable()
    table
        .string('postContent')
        .notNullable()

    table
        .integer('likes')
        .notNullable()
    table
        .integer('comments')
        .notNullable()


})

exports.down = async knex => knex.schema.dropTableIfExists('posts')
