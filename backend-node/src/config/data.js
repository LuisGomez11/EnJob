require('dotenv').config({path: '.env'});


module.exports = {
    uri_mongo: process.env.URI_MONGO,
    port2: process.env.PORT || process.env.PORT2,
    plantedPassword: process.env.playntedPassword,
    jwt_key: process.env.JWT_KEY
};

