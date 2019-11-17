
module.exports = (app) => {
  app.post('/v1/api/admine/login');

  app.get('*', (req, res) => {
    res.status(500).send({ err: 'servido no encontrado' });
  })
}
