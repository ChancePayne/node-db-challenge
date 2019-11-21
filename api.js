const express = require('express');

const ProjectDao = require('./projectDao.js');

const router = express.Router();

router.get('/resources', (req, res) => {
    ProjectDao.listResources()
        .then(data => {
            console.log("-----------RESOURCES-----------");
            data.forEach(resources => {
                resources.completed = resources.completed === 1;
            });

            res.status(200).json(data);
        })
        .catch(err => {
            res.status(500).json({message: 'Failed to get Resources'});
        });
});

router.post('/resources', (req, res) => {
    console.log("-----------ADD RESOURCES-----------");
    ProjectDao.createResource(req.body)
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            res.status(500).json({message: 'Failed to create Resource'});
        });
});

router.get('/projects', (req, res) => {
    ProjectDao.listProjects()
        .then(data => {
            console.log("-----------PROJECTS-----------");
            res.status(200).json(data);
        })
        .catch(err => {
            res.status(500).json({message: 'Failed to get Projects'});
        });
});

router.post('/projects', (req, res) => {
    console.log("-----------ADD PROJECTS-----------");
    ProjectDao.createProject(req.body)
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            res.status(500).json({message: 'Failed to create Project'});
        });
});

router.get('/tasks', (req, res) => {
    ProjectDao.listTasks()
        .then(data => {
            console.log("-----------TASKS-----------");
            // console.log(data);
            data.forEach(task => {
                task.tasks_completed = task.tasks_completed === 1;
                task.projects_completed = task.projects_completed === 1;
            });

            // return db('tasks')

            res.status(200).json(data);
        })
        .catch(err => {
            res.status(500).json({message: 'Failed to get Tasks'});
        });
});

router.post('/tasks', (req, res) => {
    console.log("-----------ADD TASKS-----------");
    ProjectDao.createTask(req.body)
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({message: 'Failed to create Task'});
        });
});


module.exports = router;