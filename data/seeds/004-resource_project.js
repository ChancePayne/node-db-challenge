const resource_project = require('../mock_data/mockResProj.json');

exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('resource_project').truncate()
        .then(function () {
            // Inserts seed entries
            return knex('resource_project').insert(resource_project);
        });
};
