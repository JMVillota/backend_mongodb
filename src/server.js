const express = require('express');
const serverless = require('serverless-http');
const bodyParser = require('body-parser');
const cors = require("cors")
const app = express();

//MIDDLEWARES
app.use(express.urlencoded({ extended: false }));
app.use(cors())
app.use(express.json())
app.use(bodyParser);
app.use(require('./routes/index'));


module.exports.handler = serverless(app);