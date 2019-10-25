const mongoose = require('mongoose');
const {uri_mongo} = require('../config/data')

async function connect(){
    try {
        await mongoose.connect(uri_mongo,
    {useNewUrlParser: true,useCreateIndex: true,useUnifiedTopology: true, })
    
    console.log('Database: connected');
    } catch (error) {
        console.log(error)
    }
};

module.exports = {connect};