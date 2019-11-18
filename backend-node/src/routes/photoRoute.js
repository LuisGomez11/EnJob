module.exports = (app) => {
  const multer = require('../middleware/multer');
  const {uploadPhoto} = require('../controller/photoController');

  app.post('/v1/api/photo/upload', multer.single('image'), uploadPhoto );

  app.get('*', (req, res) => {
    res.status(500).send({ err: 'servido no encontrado' });
  })
}
