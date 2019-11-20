module.exports = (app) => {
  const multer = require('../middleware/multer');
  const { uploadPhoto, findImages, findImage } = require('../controller/photoController');

  app.post('/v1/api/photo/upload/:id', multer.single('image'), uploadPhoto);

  app.get('/v1/api/photos', findImages);

  app.get('/v1/api/photo:photo_id', findImage)

  // app.get('*', (req, res) => {
  //   res.status(500).send({ err: 'servidor no encontrado' });
  // });
};
