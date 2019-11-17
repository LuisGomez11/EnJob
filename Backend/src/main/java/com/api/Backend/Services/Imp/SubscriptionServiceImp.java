package com.api.Backend.Services.Imp;

import com.api.Backend.Models.Subscription;
import com.api.Backend.Repository.SubscriptionRepository;
import com.api.Backend.Services.SubscriptionService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class SubscriptionServiceImp implements SubscriptionService{

	@Autowired
	SubscriptionRepository repo;
	
	@Override
    @Transactional(readOnly = true)
	public List<Subscription> getSubscriptions() {
		return (List<Subscription>) repo.findAll();
	}

	@Override
    @Transactional
	public void save(Subscription s) {
		repo.save(s);
	}

	@Override
    @Transactional(readOnly = true)
	public Subscription getSubscription(String id) {
		return repo.findById(id).get();
	}

	@Override
	public void delete(String id) {
		repo.deleteById(id);
		
	}

}
