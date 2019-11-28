const fs = require('fs-extra');

const employeeModel = require('../models/EmployeeModel');
const admineModel = require('../models/AdmineModel')
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
        console.log(result.url)
        await photo.save();

        await fs.unlink(req.file.path);
        
        switch (req.body.role) {
            case 'AdminRH':
                const admine = {
                    photo: result.url,
                }
                await admineModel.findByIdAndUpdate(req.params.id, { $set: admine }, { new: true })
                return res.status(200).send({ photo: photo });
              break;
            case 'Empleado':
                const employee = {
                    photo: result.url,
                }
                await employeeModel.findByIdAndUpdate(req.params.id, { $set: employee }, { new: true })
                return res.status(200).send({ photo: photo });
              break;
          }
    } catch (error) {
        console.log(error)
    }
};

photoCtrl.findImages = async (req, res) => {
    const photos = await photoModel.find();
    return res.status(200).send({ photos: photos });
}

photoCtrl.findImage = async (req, res) => {
    const { photo_id } = req.params;
    const photo = await photo.findById(photo_id);

}

module.exports = photoCtrl;