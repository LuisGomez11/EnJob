
package com.api.Backend.Services.Imp;

import com.api.Backend.Models.Department;
import com.api.Backend.Repository.DepartmentRepository;
import com.api.Backend.Services.DepartmentService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class DepartmentServiceImp implements DepartmentService{

    @Autowired
    DepartmentRepository repo;
    
    @Override
    @Transactional(readOnly = true)
    public List<Department> getDepartments() {
        return (List<Department>) repo.findAll();
    }

    @Override
    @Transactional
    public void save(Department d) {
        repo.save(d);
    }

    @Override
    @Transactional(readOnly = true)
    public Department getDepartment(String id) {
        return repo.findById(id).get();
    }

    @Override
    public void delete(String id) {
        repo.deleteById(id);
    }

}
