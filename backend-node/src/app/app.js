const {json,urlencoded} = require('express');
const app = require('express')();

const morgan = require('morgan');
const cors = require('cors');

app.use(morgan('dev'));
app.use(cors())
app.use(json());
app.use(urlencoded({extended:false}));

app.use(require('../routes/AdmineRoute'));

module.exports = app;