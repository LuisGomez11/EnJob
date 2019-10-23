
package com.api.Backend.Repository;

import com.api.Backend.Models.Department;
import org.springframework.data.repository.CrudRepository;

public interface DepartmentRepository extends CrudRepository<Department, String>{
    
}
