

module.exports = {
    error: HttpStatus.getStatusText(HttpStatus.BAD_REQUEST),
    password: process.env.PASSWORD_MONGODB,
    port2: process.env.PORT || process.env.PORT2,
    plantedPassword: process.env.playntedPassword,
    jwt_key: process.env.JWT_KEY,
    mongo_uri: process.env.MONGO_URI
};