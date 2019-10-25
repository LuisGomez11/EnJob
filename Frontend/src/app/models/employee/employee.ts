export class Employee {
    constructor(_id = '', name = '', userName = '', lastName = '', password = '', email = '',
        phone = '', numDocument = '', role = '', state = '', nameCompany = '', salary = 0, 
        points = 0, departament = '', position = '', availability = '') {
        this._id = _id;
        this.name = name;
        this.userName = userName;
        this.lastName = lastName;
        this.password = password;
        this.email = email;
        this.phone = phone;
        this.nameCompany = nameCompany;
        this.numDocument = numDocument;
        this.role = role;
        this.state = state;
        this.points = points;
        this.salary = salary;
        this.departament = departament;
        this.position = position;
        this.availability = availability;
    }
    _id: String
    name: String
    lastName: String
    userName: String
    password: String
    numDocument: String
    nameCompany: String
    email: String
    phone: String
    role: String
    state: String
    availability: String
    position: String
    departament: String
    salary: Number
    points: Number
}

