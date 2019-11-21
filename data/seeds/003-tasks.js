const tasks = require('../mock_data/mockTasks.json');

exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('tasks').truncate()
        .then(function () {
            // Inserts seed entries

            return knex('tasks').insert(tasks);
        });
};
