package com.api.Backend.Controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import com.api.Backend.Models.Notification;
import com.api.Backend.Services.NotificationService;

@CrossOrigin(origins = {"http://localhost:4200"})
@RestController
@RequestMapping("/app")
public class NotificationController {

	@Autowired
	NotificationService service;
	
	@GetMapping("/notification")
	public List<Notification> getNotifications() {
        return service.getNotifications();
    }
	
	@GetMapping("/notification/{notificationId}")
    public Notification getNotification(@PathVariable String notificationId) {
		Notification r = service.getNotification(notificationId);
        return r;
    }
    
    @PostMapping("/notification")
    @ResponseStatus(HttpStatus.CREATED)
    public Notification save(@RequestBody Notification n) {
        n.setIdNotification("");
        service.save(n);
        return n;
    }
    
    @PutMapping("/notification")
    @ResponseStatus(HttpStatus.CREATED)
    public Notification update(@RequestBody Notification n){
        service.save(n);
        return n;
    }  
    
    @DeleteMapping("/notification/{id}")
    public void delete(@PathVariable String id) {
        service.delete(id);
    }
	
}
