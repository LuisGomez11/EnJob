const { Joi, celebrate } = require('celebrate');

module.exports = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required(),
    lastName: Joi.string().required(),
    userName: Joi.string().required(),
    password: Joi.string().required(),
    numDocument: Joi.string().required(),
    nameCompany: Joi.string().required(),
    subscriptionTime: Joi.string().required(),
    initSubscription: Joi.string().required(),
    endSubscription: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.string().required(),
    role: Joi.string(),
    state: Joi.string(),
  })
});