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
import com.api.Backend.Models.Subscription;
import com.api.Backend.Services.SubscriptionService;

@CrossOrigin(origins = {"http://localhost:4200"})
@RestController
@RequestMapping("/app")
public class SubscriptionController {

	@Autowired
	SubscriptionService service;
	
	@GetMapping("/subscrition")
	public List<Subscription> getSubscriptions() {
        return service.getSubscriptions();
    }
	
	@GetMapping("/subscrition/{subscritionId}")
    public Subscription getSubscription(@PathVariable String subscritionId) {
		Subscription s = service.getSubscription(subscritionId);
        return s;
    }
    
    @PostMapping("/subscrition")
    @ResponseStatus(HttpStatus.CREATED)
    public Subscription save(@RequestBody Subscription s) {
        s.setIdSubscription("");
        service.save(s);
        return s;
    }
    
    @PutMapping("/subscrition")
    @ResponseStatus(HttpStatus.CREATED)
    public Subscription update(@RequestBody Subscription s){
        service.save(s);
        return s;
    }  
    
    @DeleteMapping("/subscrition/{id}")
    public void delete(@PathVariable String id) {
        service.delete(id);
    }
}
