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

    _id: string;
    name: string;
    userName: string;
    lastName: string;
    password: string;
    subscriptionTime: string;
    initSubscription: string;
    endSubscription: string;
    email: string;
    phone: string;
    role: string;
    nameCompany: string;
    state: string;
    numDocument: string;

}
