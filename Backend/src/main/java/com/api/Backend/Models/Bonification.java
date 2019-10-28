
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
    
}
