package com.api.Backend.Models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name = "Departments")
public class Department {

    @Id
    @Column(name = "idDepartment")
    @GeneratedValue(generator = "system-uuid")
    @GenericGenerator(name = "system-uuid", strategy = "uuid2")
    private String idDepartment;
    
    @Column(name = "name")
    private String name;
    
    @Column(name = "company")
    private String company;

    /**
     * @return the idDepartment
     */
    public String getIdDepartment() {
        return idDepartment;
    }

    /**
     * @param idDepartment the idDepartment to set
     */
    public void setIdDepartment(String idDepartment) {
        this.idDepartment = idDepartment;
    }

    /**
     * @return the name
     */
    public String getName() {
        return name;
    }

    /**
     * @param name the name to set
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * @return the company
     */
    public String getCompany() {
        return company;
    }

    /**
     * @param company the company to set
     */
    public void setCompany(String company) {
        this.company = company;
    }
    
    

}
