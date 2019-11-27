export class Notification {

    constructor(idNotification = '', message = '', owner = '', receiver = '', dateSubmit = '') {
        this.idNotification = idNotification;
        this.message = message;
        this.owner = owner;
        this.receiver = receiver;
        this.dateSubmit = dateSubmit;
    }

    idNotification: string;
    message: string;
    owner: string;
    receiver: string;
    dateSubmit: string;

}