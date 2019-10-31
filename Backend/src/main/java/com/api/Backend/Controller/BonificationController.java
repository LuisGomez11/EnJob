/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.api.Backend.Controller;

import com.api.Backend.Models.Bonification;
import com.api.Backend.Services.BonificationService;
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
public class BonificationController {
    
    @Autowired
    BonificationService service;
    
    @GetMapping("/bonification")
    public List<Bonification> getBonifications() {
        return service.getBonifications();
    }
    
    @GetMapping("/bonification/{bonificationId}")
    public Bonification getBonification(@PathVariable String bonificationId) {
        Bonification b = service.getBonification(bonificationId);
        return b;
    }
    
    @PostMapping("/bonification")
    @ResponseStatus(HttpStatus.CREATED)
    public Bonification save(@RequestBody Bonification b) {
        b.setIdBonification("");
        service.save(b);
        return b;
    }
    
    @PutMapping("/bonification")
    @ResponseStatus(HttpStatus.CREATED)
    public Bonification update(@RequestBody Bonification b){
        service.save(b);
        return b;
    }  
    
    @DeleteMapping("/bonification/{id}")
    public void delete(@PathVariable String id) {
        service.delete(id);
    }
    
}
