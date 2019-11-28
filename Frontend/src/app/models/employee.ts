export class Employee {
    constructor(_id = '', name = '', userName = '', lastName = '', password = '', email = '',
        phone = '', numDocument = '', role = '', state = '', nameCompany = '', salary = '', 
        points = '', departament = '', position = '', availability = '', bonus = '') {
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
        this.bonus = bonus;
    }
    _id: string
    name: string
    lastName: string
    userName: string
    password: string
    numDocument: string
    nameCompany: string
    email: string
    phone: string
    role: string
    state: string
    availability: string
    position: string
    departament: string
    salary: string
    points: string
    bonus: string
}

