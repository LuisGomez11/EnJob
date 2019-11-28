package com.api.Backend.Services;

import java.util.List;
import com.api.Backend.Models.Publication;

public interface PublicationService {

	public List<Publication> getPublications();
    public void save(Publication p);
    public Publication getPublication(String id);
    public void delete(String id);
	
}
