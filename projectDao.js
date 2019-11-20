const db = require('./data/db-config');

module.exports = {
    createResource,
    listResources,
    createProject,
    listProjects,
    createTask,
    listTasks
};

function createResource() {}

function listResources() {
    return db('resources');
}

function createProject() {}

function listProjects() {
    const projects = db('projects');
    console.log(projects);
    projects.forEach(project => {
       project.completed = project.completed === 1;
    });

    return projects;
}

function createTask() {}

function listTasks() {
    return db('tasks');
}