package com.api.Backend.Models;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name = "Notifications")
public class Notification {
	
	@Id
    @Column(name = "idNotification")
    @GeneratedValue(generator = "system-uuid")
    @GenericGenerator(name = "system-uuid", strategy = "uuid2")
    private String idNotification;
	@Column(name = "message")
    private String message;
    @Column(name = "owner")
    private String owner;
    @Column(name = "receiver")
    private String receiver;
    @Column(name = "seen")
    private String seen;
    @Column(name = "dateSubmit")
    private String dateSubmit;
    
	public String getIdNotification() {
		return idNotification;
	}
	public void setIdNotification(String idNotification) {
		this.idNotification = idNotification;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public String getOwner() {
		return owner;
	}
	public void setOwner(String owner) {
		this.owner = owner;
	}
	public String getReceiver() {
		return receiver;
	}
	public void setReceiver(String receiver) {
		this.receiver = receiver;
	}
	public String getDateSubmit() {
		return dateSubmit;
	}
	public void setDateSubmit(String dateSubmit) {
		this.dateSubmit = dateSubmit;
	}
	public String getSeen() {
		return seen;
	}
	public void setSeen(String seen) {
		this.seen = seen;
	}
    
    

}
