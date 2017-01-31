
exports.up = function(knex) {
  return knex.schema.createTable('comments', (table) => {
    table.increments().primary();
    table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE');
    table.integer('post_id').unsigned().references('id').inTable('posts').onDelete('CASCADE');
    table.string('comment').notNullable().defaultTo('');
    table.timestamps(true, true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('comments')
};
