'use strict'

exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('comments').del()
        .then(function() {
            return Promise.all([
                // Inserts seed entries
                knex('comments')
                .insert({
                    user_id: 1,
                    post_id: 2,
                    comment: 'this is matt (user id 1). commenting on yoema\'s (user id 2) post (post id 2)'
                }),
                knex('comments')
                .insert({
                  user_id: 2,
                  post_id: 3,
                  comment: 'this is yoema (user id  2). commenting on oli\'s (user id 3) post (post id 3)'
                }),
                knex('comments')
                .insert({
                  user_id: 3,
                  post_id: 1,
                  comment: 'this is oli (user id 3). commenting on matt\'s (user id 1) post (post id 1)'
                })
            ]);
        });
};
