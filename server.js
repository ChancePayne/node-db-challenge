const express = require('express');
const helmet = require('helmet');

const ApiRouter = require('./api.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api', ApiRouter);

module.exports = server;
