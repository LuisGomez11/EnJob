export class Subscription {

    constructor(idSubscription = '', duration = '', price = '') {
        this.idSubscription = idSubscription;
        this.duration = duration;
        this.price = price;
      }

    idSubscription: String;
    duration: String;
    price: String;

}