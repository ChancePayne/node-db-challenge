const resources = require('../mock_data/mockResources.json');

exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('resources').truncate()
        .then(function () {
            // Inserts seed entries
            return knex('resources').insert(resources);
        });
};
