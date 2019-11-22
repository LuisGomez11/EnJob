package com.api.Backend.Services.Imp;

import com.api.Backend.Models.Request;
import com.api.Backend.Repository.RequestRepository;
import com.api.Backend.Services.RequestService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class RequestServiceImp implements RequestService{

	@Autowired
	RequestRepository repo;
	
	@Override
    @Transactional(readOnly = true)
	public List<Request> getRequests() {
		return (List<Request>) repo.findAll();
	}

	@Override
    @Transactional
	public void save(Request r) {
		repo.save(r);
	}

	@Override
    @Transactional(readOnly = true)
	public Request getRequest(String id) {
		return repo.findById(id).get();
	}

	@Override
	public void delete(String id) {
		repo.deleteById(id);
		
	}
	
}
