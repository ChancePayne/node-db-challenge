const db = require('./data/db-config');

module.exports = {
    createResource,
    listResources,
    createProject,
    listProjects,
    createTask,
    listTasks
};

function createResource(resource) {
        try {
            const checkedRes = {
                name: resource.name,
                description: resource.description
            };
            return db('resources').insert(checkedRes);
        } catch(err) {
            return err;
        }
}

function listResources() {
    return db('resources');
}

function createProject(project) {
    try {
        const checkedProj = {
            name: project.name,
            description: project.description,
            completed:  project.completed
        };
        return db('projects').insert(checkedProj);
    } catch(err) {
        return err;
    }
}

function listProjects() {
    return db('projects');
}

function createTask(task) {
    try {
        const checkedTask = {
            project_id: task.project_id,
            notes: task.notes,
            description: task.description,
            completed:  task.completed
        };
        return db('tasks').insert(checkedTask);
    } catch(err) {
        return err;
    }
}

function listTasks() {
    return db
        .select([
            'tasks.description as tasks_description',
            'tasks.id as tasks_id',
            'tasks.notes as tasks_notes',
            'tasks.completed as tasks_completed',
            'projects.name as projects_name',
            'projects.description as projects_description',
            'projects.completed as projects_completed',
            'projects.id as projects_id'
        ])
        .from('tasks')
        .join('projects', 'tasks.project_id', '=', 'projects.id');
}