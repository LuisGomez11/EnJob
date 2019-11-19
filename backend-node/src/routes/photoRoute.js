module.exports = (app) => {
  const multer = require('../middleware/multer');
  const { uploadPhoto, findImages } = require('../controller/photoController');

  app.put('/v1/api/photo/upload', multer.single('image'), uploadPhoto);

  app.get('/v1/api/photos', findImages);
 
//  app.get('/v1/api/photo:photo_id')

  // app.get('*', (req, res) => {
  //   res.status(500).send({ err: 'servidor no encontrado' });
  // });
};
