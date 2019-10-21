const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

app.use(morgan('dev'));
app.use(cors({origin:'http://localhost:4200'}));
app.use(express.json());

app.use(require('../routes/admineRoutes'));

module.exports = app;