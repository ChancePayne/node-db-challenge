const express = require('express');

const ProjectDao = require('./projectDao.js');

const router = express.Router();

router.get('/resources', (req, res) => {
    ProjectDao.listResources()
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            res.status(500).json({message: 'Failed to get Resources'});
        });
});

router.get('/projects', (req, res) => {
    ProjectDao.listProjects()
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            res.status(500).json({message: 'Failed to get Projects'});
        });
});

router.get('/tasks', (req, res) => {
    ProjectDao.listTasks()
        .then(data => {
            console.log("---------------------TASKS-----------");
            console.log(data);
            data.forEach(task => {
                task.completed = task.completed === 1;
            });

            return data;

            // return db('tasks')

            res.status(200).json(data);
        })
        .catch(err => {
            res.status(500).json({message: 'Failed to get Tasks'});
        });
});

module.exports = router;