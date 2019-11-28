//const messagesModel = require('../models/messages');

// const { bad_requestSend, bad_requestStatus, createdSend, createdStatus, non_authoritative_informationSend, non_authoritative_informationStatus, not_foundSend, not_foundStatus } = require('../util/HttpStatus');

// const messagesCtrl = {};
// function message(req) {
//     const message = {
//       emitter: req.user.sub,
//       receiver: req.body.receiver,
//       text: req.body.text,
//       seen: false,
//       created_at: moment().unix()
//     }
//     return message;
//   }

// photoCtrl.createMessage = async (req, res) => {
//     const { photo_id } = req.params;
//     const photo = await photo.findById(photo_id);
// }

// module.exports = photoCtrl;
/**
 * File Controller Conversatios
 */
const { Conversation } = require('../models/messages');

/**
 * get conversations from a user
 */
exports._Get = (req, res) => {
  Conversation.find().where('members').in([req.headers._id])
    .populate('members', 'name')
    .then(conversation => {
      return res.status(conversation !== null ? 200 : 404).send(conversation !== null ? conversation : {});
    }).catch(err => {
      return res.status(406).send(err);
    });
}

/**
 * get one conversation by users
 */
exports._GetOne = (req, res) => {
  Conversation.findOne().where('members').all([req.headers._id, req.params.Id])
    .populate('members', 'name').then(conversation => {
      return res.status(conversation !== null ? 200 : 404).send(conversation !== null ? conversation : {});
    }).catch(err => {
      return res.status(406).send(err);
    });
}

/**
 * save a conversations
 */
exports._Post = (req, res) => {
  new Conversation(req.body).save().then(conversation => {
    conversation.populate('members', 'name', function (err) {
      return res.status(conversation !== null ? 200 : 404).send(conversation !== null ? conversation : {});
    });
  }).catch(err => {
    return res.status(406).send(err);
  });
}

/**
 * Add message in conversations
 */
exports._Put = (req, res) => {
  Conversation.findByIdAndUpdate(req.params.Id, { '$push': { 'messages': req.body } }, { new: true })
    .where('members').in([req.headers._id])
    .then(conversation => {
      return res.status(conversation !== null ? 200 : 404).send(conversation !== null ? conversation : {});
    }).catch(err => {
      return res.status(406).send(err);
    });
}

/**
 * delete conversation
 */
exports._Delete = (req, res) => {
  Conversation.findByIdAndDelete(req.params.Id).then(conversation => {
    return res.status(conversation !== null ? 200 : 404).send(conversation !== null ? conversation : {});
  }).catch(err => {
    return res.status(406).send(err);
  });
}