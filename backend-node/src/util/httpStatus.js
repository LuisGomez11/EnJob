const HttpStatus = require('http-status-codes');

module.exports = {
    bad_requestSend: HttpStatus.getStatusText(HttpStatus.BAD_REQUEST),
    createdSend: HttpStatus.getStatusText(HttpStatus.CREATED),
    not_foundSend: HttpStatus.getStatusText(HttpStatus.NOT_FOUND),
    non_authoritative_informationSend: HttpStatus.getStatusText(HttpStatus.NON_AUTHORITATIVE_INFORMATION),
    bad_requestStatus: HttpStatus.BAD_REQUEST,
    createdStatus: HttpStatus.CREATED,
    not_foundStatus: HttpStatus.NOT_FOUND,
    non_authoritative_informationStatus: HttpStatus.NON_AUTHORITATIVE_INFORMATION
};