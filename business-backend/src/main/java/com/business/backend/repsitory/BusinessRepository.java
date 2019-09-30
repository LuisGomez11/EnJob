package com.business.backend.repsitory;

import org.springframework.data.jpa.repository.JpaRepository;

import com.business.backend.models.Business;

public interface BusinessRepository extends JpaRepository<Business, String>{
	
	public Business findByIdBusiness(String idBusiness);
}
