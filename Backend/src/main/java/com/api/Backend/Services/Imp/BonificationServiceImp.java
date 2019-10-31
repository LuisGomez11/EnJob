
package com.api.Backend.Services.Imp;

import com.api.Backend.Models.Bonification;
import com.api.Backend.Repository.BonificationRepository;
import com.api.Backend.Services.BonificationService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class BonificationServiceImp implements BonificationService{

    @Autowired
    BonificationRepository repo;
    
    @Override
    @Transactional(readOnly = true)
    public List<Bonification> getBonifications() {
       return (List<Bonification>) repo.findAll();
    }

    @Override
    @Transactional
    public void save(Bonification b) {
        repo.save(b);
    }

    @Override
    @Transactional(readOnly = true)
    public Bonification getBonification(String id) {
        return repo.findById(id).get();
    }

    @Override
    public void delete(String id) {
        repo.deleteById(id);
    }
    
}
