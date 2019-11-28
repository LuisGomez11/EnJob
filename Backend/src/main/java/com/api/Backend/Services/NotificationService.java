package com.api.Backend.Services;

import java.util.List;
import com.api.Backend.Models.Notification;


public interface NotificationService {

	public List<Notification> getNotifications();
    public void save(Notification n);
    public Notification getNotification(String id);
    public void delete(String id);

}
