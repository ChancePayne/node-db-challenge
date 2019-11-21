exports.up = function (knex) {
    return knex.schema
        .createTable('projects', tbl => {
            tbl.increments();
            tbl.text('name')
                .notNullable();
            tbl.text('description');
            tbl.boolean('completed')
                .notNullable();
            // relationships
                // #-# resources
                // 1-# tasks
        })
        .createTable('resources', tbl => {
            tbl.increments();
            tbl.text('name')
                .notNullable();
            tbl.text('description');
            // relationships
                // #-# projects
        })
        .createTable('tasks', tbl => {
            tbl.increments();
            tbl.text('description')
                .notNullable();
            tbl.text('notes');
            tbl.boolean('completed')
                .notNullable();
            // relationships
            // #-1 projects
            tbl.integer('project_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('projects')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
        })
        .createTable('resource_project', tbl => {
            tbl.increments();
            tbl.integer('project_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('projects')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
            tbl.integer('resource_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('resources')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
        });
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('projects')
        .dropTableIfExists('tasks')
        .dropTableIfExists('resources')
        .dropTableIfExists('resource_project')
};
