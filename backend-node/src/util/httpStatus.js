const HttpStatus = require('http-status-codes');

module.exports = {
    errors: HttpStatus.getStatusText(HttpStatus.BAD_REQUEST),
    created: HttpStatus.getStatusText(HttpStatus.CREATED),
    bad_request: HttpStatus.BAD_REQUEST,
    plantedPassword: process.env.playntedPassword,
    jwt_key: process.env.JWT_KEY,
    mongo_uri: process.env.MONGO_URI
};