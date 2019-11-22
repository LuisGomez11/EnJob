package com.api.Backend.Services;

import java.util.List;
import com.api.Backend.Models.Request;

public interface RequestService {

	public List<Request> getRequests();
    public void save(Request r);
    public Request getRequest(String id);
    public void delete(String id);
	
}
