package com.api.Backend.Services;

import java.util.List;

import com.api.Backend.Models.Subscription;;

public interface SubscriptionService {

	public List<Subscription> getSubscriptions();
    public void save(Subscription s);
    public Subscription getSubscription(String id);
    public void delete(String id);
	
}
