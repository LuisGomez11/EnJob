const messagesModel = require('../models/messages');

const { bad_requestSend, bad_requestStatus, createdSend, createdStatus, non_authoritative_informationSend, non_authoritative_informationStatus, not_foundSend, not_foundStatus } = require('../util/HttpStatus');

const messagesCtrl = {};
function message(req) {
    const message = {
      emitter: req.user.sub,
      receiver: req.body.receiver,
      text: req.body.text,
      seen: false,
      created_at: moment().unix()
    }
    return message;
  }

photoCtrl.createMessage = async (req, res) => {
    const { photo_id } = req.params;
    const photo = await photo.findById(photo_id);

}

module.exports = photoCtrl;