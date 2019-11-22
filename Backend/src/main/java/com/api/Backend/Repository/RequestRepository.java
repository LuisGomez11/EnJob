package com.api.Backend.Repository;

import org.springframework.data.repository.CrudRepository;
import com.api.Backend.Models.Request;

public interface RequestRepository extends CrudRepository<Request, String> {

}
