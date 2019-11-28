package com.api.Backend.Services.Imp;

import com.api.Backend.Models.Publication;
import com.api.Backend.Repository.PublicationRepository;
import com.api.Backend.Services.PublicationService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class PublicationServiceImp implements PublicationService {

	@Autowired
    PublicationRepository repo;
    
    @Override
    @Transactional(readOnly = true)
    public List<Publication> getPublications() {
        return (List<Publication>) repo.findAll();
    }

    @Override
    @Transactional
    public void save(Publication p) {
        repo.save(p);
    }

    @Override
    @Transactional(readOnly = true)
    public Publication getPublication(String id) {
        return repo.findById(id).get();
    }

    @Override
    public void delete(String id) {
        repo.deleteById(id);
    }
	
}
