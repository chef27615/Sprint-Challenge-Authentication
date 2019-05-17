const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
// const usersRouter = require('../users/usersRouter');
const configureRoutes = require('../config/routes.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
// server.use('/api/users', usersRouter);

configureRoutes(server);

module.exports = server;
