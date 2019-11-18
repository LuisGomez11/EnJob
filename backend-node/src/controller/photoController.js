const fs = require('fs-extra');

const cloudinary = require('../database/cloudinary')
const photoModel = require('../models/PhotoModel');
const { bad_requestSend, bad_requestStatus, createdSend, createdStatus, non_authoritative_informationSend, non_authoritative_informationStatus, not_foundSend, not_foundStatus } = require('../util/HttpStatus');

const photoCtrl = {};

photoCtrl.uploadPhoto = async (req, res) => {
    try {
        const result = await cloudinary.v2.uploader.upload(req.file.path)
        const photo = new photoModel({
            imageURL: result.url,
            public_id: result.public_id,
            id_user: req.body.id_user,
            imagePath: req.file.path
        });
        await photo.save();
        await fs.unlink(req.file.path);

        return res.status(200).send({ photo: photo });
    } catch (error) {
        console.log(error)
    }
};

module.exports = photoCtrl;