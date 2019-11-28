package com.api.Backend.Repository;

import org.springframework.data.repository.CrudRepository;
import com.api.Backend.Models.Publication;

public interface PublicationRepository extends CrudRepository<Publication, String> {

}
