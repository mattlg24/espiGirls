'use strict'

exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('posts').del()
        .then(function() {
            return Promise.all([
                // Inserts seed entries
                knex('posts')
                .insert({
                    user_id: 1,
                    post: 'this is matt. i am user id 1 and post id 1',
                    likes: 0
                }),
                knex('posts')
                .insert({
                  user_id: 2,
                  post: 'this is yoema. i am user id 2 and post id 2',
                  likes: 0
                }),
                knex('posts')
                .insert({
                  user_id: 3,
                  post: 'this is oli. i am user id 3 and post id 3',
                  likes: 0
                })
            ]);
        });
};
