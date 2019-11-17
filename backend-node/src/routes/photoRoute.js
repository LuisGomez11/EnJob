
module.exports = (app) => {
  app.post('/v1/api/admine/login', LoginAdmine);

  app.get('*', (req, res) => {
    res.status(500).send({ err: 'servido no encontrado' });
  })
}
