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
            id_user: req.params.id,
            imagePath: req.file.path
        });
        await photo.save();
        await fs.unlink(req.file.path);

        return res.status(200).send({ photo: photo });
    } catch (error) {
        console.log(error)
    }
};

photoCtrl.findImages = async (req,res) => {
    const photos = await photoModel.find();
    return res.status(200).send({ photos: photos });
}

photoCtrl.findImage = async (req,res) => {
    const {photo_id} = req.params;
    const photo = await photo.findById(photo_id);
    
}

module.exports = photoCtrl;