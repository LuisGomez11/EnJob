const {json,urlencoded} = require('express');
const app = require('express')();

const morgan = require('morgan');
const cors = require('cors');

const routes = {
    admine: app.use(require('../routes/AdmineRoute')),
    admin: app.use(require('../routes/AdminRoute'))
}

app.use(morgan('dev'));
app.use(cors({origin:'http://localhost:4200'}));
app.use(json());
app.use(urlencoded({extended:false}));


routes
 
module.exports = app;