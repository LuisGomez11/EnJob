const cloudinary = require('cloudinary')

const { cloud_name,api_secret, api_key } = require('../config/data')

cloudinary.config({
    cloud_name: cloud_name,
    api_key: api_key,
    api_secret: api_secret
})

module.exports = cloudinary;