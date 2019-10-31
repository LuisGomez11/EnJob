
package com.api.Backend.Models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name = "Bonifications")
public class Bonification {
    
    @Id
    @Column(name = "idBonification")
    @GeneratedValue(generator = "system-uuid")
    @GenericGenerator(name = "system-uuid", strategy = "uuid2")
    private String idBonification;
    @Column(name = "incentive")
    private String incentive;
    @Column(name = "cost")
    private String cost;
    @Column(name = "company")
    private String company;

    /**
     * @return the idBonification
     */
    public String getIdBonification() {
        return idBonification;
    }

    /**
     * @param idBonification the idBonification to set
     */
    public void setIdBonification(String idBonification) {
        this.idBonification = idBonification;
    }

    /**
     * @return the incentive
     */
    public String getIncentive() {
        return incentive;
    }

    /**
     * @param incentive the incentive to set
     */
    public void setIncentive(String incentive) {
        this.incentive = incentive;
    }

    /**
     * @return the cost
     */
    public String getCost() {
        return cost;
    }

    /**
     * @param cost the cost to set
     */
    public void setCost(String cost) {
        this.cost = cost;
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
