/**
 * 
 */
package com.backend.spring.repositorys;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.backend.spring.models.DepartamentModel;

/**
 * @author christian
 *
 */
public interface DepartamentRepository extends MongoRepository<DepartamentModel, String>{

}
