package com.api.Backend.Services.Imp;

import com.api.Backend.Models.Notification;
import com.api.Backend.Repository.NotificationRepository;
import com.api.Backend.Services.NotificationService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class NotificationServiceImp implements NotificationService{

	@Autowired
	NotificationRepository repo;
	
	@Override
    @Transactional(readOnly = true)
	public List<Notification> getNotifications() {
		return (List<Notification>) repo.findAll();
	}

	@Override
    @Transactional
	public void save(Notification n) {
		repo.save(n);
	}

	@Override
    @Transactional(readOnly = true)
	public Notification getNotification(String id) {
		return repo.findById(id).get();
	}

	@Override
	public void delete(String id) {
		repo.deleteById(id);
	}

}
