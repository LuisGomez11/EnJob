const {json,urlencoded, static} = require('express');
const path = require('path');
const app = require('express')();

const morgan = require('morgan');
const cors = require('cors');

app.use(morgan('dev'));
app.use(cors())
app.use(json());
app.use(urlencoded({extended:false}));
app.use('/upload', static(path.resolve('uploads')));

require('../routes/photoRoute')(app);
require('../routes/AdmineRoute')(app);
require('../routes/EmployeeRoute')(app);

module.exports = app;