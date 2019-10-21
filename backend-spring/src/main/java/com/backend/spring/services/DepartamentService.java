/**
 * 
 */
package com.backend.spring.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.spring.models.DepartamentModel;
import com.backend.spring.repositorys.DepartamentRepository;
import com.backend.spring.services.implement.DepartamentServiceIm;

/**
 * @author christian
 *
 */
@Service
public class DepartamentService implements DepartamentServiceIm{

	@Autowired
	DepartamentRepository dptRepository;

	@Override
	public List<DepartamentModel> getDpt() {
		return dptRepository.findAll();
	}

	@Override
	public DepartamentModel getIdDpt(String id) {
		return dptRepository.findById(id).get();
	}

	@Override
	public DepartamentModel addDpt(DepartamentModel dptModel) {
		return dptRepository.save(dptModel);
	}

	@Override
	public void deleteDpt(String id) {
		dptRepository.deleteById(id);
	}
	
	
}
