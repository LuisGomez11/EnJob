
package com.api.Backend.Services;

import com.api.Backend.Models.Department;
import java.util.List;

public interface DepartmentService {
    
    public List<Department> getDepartments();
    public void save(Department d);
    public Department getDepartment(String id);
    public void delete(String id);
    
}
