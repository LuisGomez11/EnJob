export class Publication {

    constructor(idPublication = '', publication = '', publisher = '', publicationDate = '', company = '') {
        this.idPublication = idPublication;
        this.publication = publication;
        this.publisher = publisher;
        this.publicationDate = publicationDate;
        this.company = company;
    }

    idPublication: string;
    publication: string;
    publisher: string;
    publicationDate: string;
    company: string;

}