package com.backend.spring.services.implement;

import java.util.List;

import com.backend.spring.models.DepartamentModel;

public interface DepartamentServiceIm {

	public List<DepartamentModel> getDpt();

	public DepartamentModel getIdDpt(String id);

	public DepartamentModel addDpt(DepartamentModel dptModel);

	public void deleteDpt(String id);
}
