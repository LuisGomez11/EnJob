package com.api.Backend.Models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name = "Subscriptions")
public class Subscription {
	
	@Id
    @Column(name = "idSubscription")
    @GeneratedValue(generator = "system-uuid")
    @GenericGenerator(name = "system-uuid", strategy = "uuid2")
    private String idSubscription;
	@Column(name = "duration")
    private String duration;
    @Column(name = "price")
    private String price;
	
    public String getIdSubscription() {
		return idSubscription;
	}
	public void setIdSubscription(String idSubscription) {
		this.idSubscription = idSubscription;
	}
	public String getDuration() {
		return duration;
	}
	public void setDuration(String duration) {
		this.duration = duration;
	}
	public String getPrice() {
		return price;
	}
	public void setPrice(String price) {
		this.price = price;
	}
    
}
