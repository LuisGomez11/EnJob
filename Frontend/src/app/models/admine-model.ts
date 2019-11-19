export class AdmineModel {
    constructor(_id = '', name = '', userName = '', lastName = '', password = '', email = '',
        phone = '', numDocument = '', role = '', state = '', nameCompany = '',
        subscriptionTime = '', initSubscription = '', endSubscription = '') {
        this._id = _id;
        this.name = name;
        this.userName = userName;
        this.lastName = lastName;
        this.password = password;
        this.email = email;
        this.phone = phone;
        this.nameCompany = nameCompany;
        this.numDocument = numDocument;
        this.subscriptionTime = subscriptionTime;
        this.initSubscription = initSubscription;
        this.endSubscription = endSubscription;
        this.role = role;
        this.state = state;
    }

    _id: String;
    name: String;
    userName: String;
    lastName: String;
    password: String;
    subscriptionTime: String;
    initSubscription: String;
    endSubscription: String;
    email: String;
    phone: String;
    role: String;
    nameCompany: String;
    state: String;
    numDocument: String;

}
