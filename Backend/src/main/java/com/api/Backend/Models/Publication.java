package com.api.Backend.Models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name = "Publications")
public class Publication {
	
	@Id
    @Column(name = "idPublication")
    @GeneratedValue(generator = "system-uuid")
    @GenericGenerator(name = "system-uuid", strategy = "uuid2")
    private String idPublication;
	@Column(name = "publication")
    private String publication;
	@Column(name = "publisher")
    private String publisher;
	@Column(name = "publicationDate")
    private String publicationDate;
	@Column(name = "company")
    private String company;
	
	public String getIdPublication() {
		return idPublication;
	}
	public void setIdPublication(String idPublication) {
		this.idPublication = idPublication;
	}
	public String getPublication() {
		return publication;
	}
	public void setPublication(String publication) {
		this.publication = publication;
	}
	public String getPublisher() {
		return publisher;
	}
	public void setPublisher(String publisher) {
		this.publisher = publisher;
	}
	public String getPublicationDate() {
		return publicationDate;
	}
	public void setPublicationDate(String publicationDate) {
		this.publicationDate = publicationDate;
	}
	public String getCompany() {
		return company;
	}
	public void setCompany(String company) {
		this.company = company;
	}
	

}
