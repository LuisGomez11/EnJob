package com.api.Backend.Controller;

import com.api.Backend.Models.Publication;
import com.api.Backend.Services.PublicationService;
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

@CrossOrigin(origins = {"http://localhost:4200"})
@RestController
@RequestMapping("/app")
public class PublicationController {

	@Autowired
    PublicationService service;
    
    @GetMapping("/publication")
    public List<Publication> getPublications() {
        return service.getPublications();
    }
    
    @GetMapping("/publication/{publicationId}")
    public Publication getPublication(@PathVariable String publicationId) {
        Publication p = service.getPublication(publicationId);
        return p;
    }
    
    @PostMapping("/publication")
    @ResponseStatus(HttpStatus.CREATED)
    public Publication save(@RequestBody Publication p) {
        p.setIdPublication("");
        service.save(p);
        return p;
    }
    
    @PutMapping("/publication")
    @ResponseStatus(HttpStatus.CREATED)
    public Publication update(@RequestBody Publication p){
        service.save(p);
        return p;
    }  
    
    @DeleteMapping("/publication/{id}")
    public void delete(@PathVariable String id) {
        service.delete(id);
    }
	
}
