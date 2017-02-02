
exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments().primary();
    table.string('first_name').notNullable().defaultTo('');
    table.string('last_name').notNullable().defaultTo('');
    table.string('user_name').notNullable().unique().defaultTo('');
    table.string('email').notNullable().unique();
    table.string('hashed_pw').notNullable().defaultTo('');
    table.timestamps(true, true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('users')
};
