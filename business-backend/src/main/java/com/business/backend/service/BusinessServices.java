package com.business.backend.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.business.backend.models.Business;
import com.business.backend.repsitory.BusinessRepository;

@Service
@Transactional(readOnly = false)
public class BusinessServices {
	
	private final BusinessRepository businessRepository;
	
	public BusinessServices(BusinessRepository businessRepository) {
		this.businessRepository = businessRepository;
	};
	
	public Business createBusiness(Business business) {
		return this.businessRepository.save(business);
	};
	
	public Business updateBusiness(Business business) {
		return this.businessRepository.save(business);
	};
	
	public void deleteBusiness(Business business) {
		this.businessRepository.delete(business);
	};
	public List<Business> findAllBusiness(){
		return this.businessRepository.findAll();
	};
	
	public Business findByBusiness(String idBusiness) {
		return this.businessRepository.findByIdBusiness(idBusiness);
	};
}
