const express = require('express');
const logger = require('./Middleware/logger');
const Joi = require('joi');
const jwt = require('jsonwebtoken');
const config = require('config');
const app = express();
const router = express.Router();
const usersModule = require('./Routes/Users/users'); 
const home = require('./Routes/Home/home');

app.use(express.json());
app.use(logger);
//app.use(express.static('public'))
app.use('/api',home);
app.use('/api',usersModule);



const portNumber = process.env.PORT || 3000

app.listen(portNumber,function(){


    console.log(`Listening on port ${portNumber}....`);
}) 