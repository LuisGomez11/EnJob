

package com.api.Backend.Controller;

import com.api.Backend.Models.Department;
import com.api.Backend.Services.DepartmentService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = {"http://localhost:4200"})
@RestController
@RequestMapping("/app")
public class DepartmentController {

    @Autowired
    DepartmentService service;
    
    @GetMapping("/department")
    public List<Department> getDepartments() {
        return service.getDepartments();
    }
    
    @GetMapping("/department/{departmentId}")
    public Department getDepartment(@PathVariable String departmentId) {
        Department d = service.getDepartment(departmentId);
        return d;
    }
    
    @PostMapping("/department")
    @ResponseStatus(HttpStatus.CREATED)
    public Department save(@RequestBody Department d) {
        d.setIdDepartment("");
        service.save(d);
        return d;
    }
    
    @PutMapping("/department")
    @ResponseStatus(HttpStatus.CREATED)
    public Department update(@RequestBody Department d){
        service.save(d);
        return d;
    }  
    
    @DeleteMapping("/department/{id}")
    public void delete(@PathVariable String id) {
        service.delete(id);
    }
    
}
