export class AdmineModel {
        constructor(idAdmine='', name='', userName= '', lastName='', password = '', email = '', numDocument = '', role = '', state = '', nameCompany = ''){
        this.idAdmine=idAdmine;
        this.name=name;
        this.userName=userName;
        this.lastName=lastName;
        this.password=password;
        this.email=email;
        this.nameCompany=nameCompany;
        this.numDocument=numDocument;
        this.role=role;
        this.state=state;
    }
    
    idAdmine: string;
    name: string;
    userName: string;
    lastName: string;
    password: string;
    email: string;
    role: string;
    nameCompany: string;
    state: string;
    numDocument: string;

}