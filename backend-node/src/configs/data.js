require('dotenv').config({path: 'src/.env'});

module.exports = {
    user: process.env.USER_MONGODB,
    password: process.env.PASSWORD_MONGODB,
    port2: process.env.PORT || process.env.PORT2,
    plantedPassword: process.env.playntedPassword,
    jwt_key: process.env.JWT_KEY,
    mongo_uri: process.env.MONGO_URI
};