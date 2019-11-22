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
import com.api.Backend.Models.Request;
import com.api.Backend.Services.RequestService;

@CrossOrigin(origins = {"http://localhost:4200"})
@RestController
@RequestMapping("/app")
public class RequestController {

	@Autowired
	RequestService service;
	
	@GetMapping("/request")
	public List<Request> getRequests() {
        return service.getRequests();
    }
	
	@GetMapping("/request/{requestId}")
    public Request getRequest(@PathVariable String requestId) {
		Request r = service.getRequest(requestId);
        return r;
    }
    
    @PostMapping("/request")
    @ResponseStatus(HttpStatus.CREATED)
    public Request save(@RequestBody Request r) {
        r.setIdRequest("");
        service.save(r);
        return r;
    }
    
    @PutMapping("/request")
    @ResponseStatus(HttpStatus.CREATED)
    public Request update(@RequestBody Request r){
        service.save(r);
        return r;
    }  
    
    @DeleteMapping("/request/{id}")
    public void delete(@PathVariable String id) {
        service.delete(id);
    }
	
}
