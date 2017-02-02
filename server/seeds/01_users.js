'use strict'

exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('users').del()
        .then(function() {
            return Promise.all([
                // Inserts seed entries
                knex('users')
                .insert({
                    first_name: 'Matt',
                    last_name: 'Gardner',
                    user_name: 'mattlg',
                    email: 'm@g.com',
                    hashed_pw: 'test',
                }),
                knex('users')
                .insert({
                  first_name: 'Yoema',
                  last_name: 'Gardner',
                  user_name: 'yoyo',
                  email: 'y@g.com',
                  hashed_pw: 'test',
                }),
                knex('users')
                .insert({
                  first_name: 'Oli',
                  last_name: 'Gardner',
                  user_name: 'bigo',
                  email: 'o@g.com',
                  hashed_pw: 'test',
                })
            ]);
        });
};
