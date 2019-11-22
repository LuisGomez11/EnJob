export class Request {

    constructor(idRequest = '', type = '', affair = '', applicant = '', receiver = '', answer = '', submitDate = '') {
        this.idRequest = idRequest;
        this.type = type;
        this.affair = affair;
        this.applicant = applicant;
        this.receiver = receiver;
        this.answer = answer;
        this.submitDate = submitDate;
      }

    idRequest: string;
    type: string;
    affair: string;
    applicant: string;
    receiver: string;
    answer: string;
    submitDate: string;

}