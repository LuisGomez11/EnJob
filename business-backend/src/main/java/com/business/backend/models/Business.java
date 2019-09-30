package com.business.backend.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.NamedQuery;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;
import org.springframework.boot.autoconfigure.domain.EntityScan;

import lombok.Data;

@Data
@Entity
@Table(name = "business")
@EntityScan("Business")
@NamedQuery(name = "Business.findByIdBusiness", query = "Select c from Business c where c.idBusiness = ?1")
public class Business {
	@Id
	@Column(name="id_business")
	@GeneratedValue(generator = "system-uuid")
	@GenericGenerator(name = "system-uuid", strategy = "uuid2")  
	 private String idBusiness;
	@Column(name="name_business")
	 private String nameBusiness;
	@Column(name="adress_business")
	 private String addressBusiness;
	@Column(name="email_business")
	 private String emailBusiness;
	@Column(name="code_employee")
	 private String codeEmployee;
	 
}
