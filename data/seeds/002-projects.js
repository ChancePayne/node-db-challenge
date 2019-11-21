const projects = require('../mock_data/mockProjects.json');

exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('projects').truncate()
        .then(function () {
            // Inserts seed entries
            /*const batchSize = 100;
            for(let i = 0; i < (projects.length / batchSize); ++i) {
                let start = i * batchSize;
                let end = (i + 1) * batchSize;
                if (end >= projects.length)
                    end = projects.length - 1;
                console.log(`${start} - ${end}`);
                knex('projects').insert(projects.slice(start, end))
            }*/


            return knex('projects').insert(projects);
        });
};
