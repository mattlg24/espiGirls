exports.up = function(knex) {
    return knex.schema.createTable('posts', (table) => {
        table.increments().primary();
        table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE');
        table.string('post').notNullable().defaultTo('');
        table.integer('likes').unsigned();
        table.timestamps(true, true);
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('posts')
};
