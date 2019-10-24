
package com.api.Backend.Controller;

import com.api.Backend.Models.Task;
import com.api.Backend.Services.TaskService;
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
public class TaskController {

    @Autowired
    TaskService service;
    
    @GetMapping("/task")
    public List<Task> getTasks() {
        return service.getTasks();
    }
    
    @GetMapping("/task/{taskId}")
    public Task getTask(@PathVariable String taskId) {
        Task t = service.getTask(taskId);
        return t;
    }
    
    @PostMapping("/task")
    @ResponseStatus(HttpStatus.CREATED)
    public Task save(@RequestBody Task t) {
        t.setIdTask("");
        service.save(t);
        return t;
    }
    
    @PutMapping("/task")
    @ResponseStatus(HttpStatus.CREATED)
    public Task update(@RequestBody Task t){
        service.save(t);
        return t;
    }  
    
    @DeleteMapping("/task/{id}")
    public void delete(@PathVariable String id) {
        service.delete(id);
    }
    
}
