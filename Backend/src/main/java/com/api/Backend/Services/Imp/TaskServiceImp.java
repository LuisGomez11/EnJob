
package com.api.Backend.Services.Imp;

import com.api.Backend.Models.Task;
import com.api.Backend.Repository.TaskRepository;
import com.api.Backend.Services.TaskService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class TaskServiceImp implements TaskService{

    @Autowired
    TaskRepository repo;
    
    @Override
    @Transactional(readOnly = true)
    public List<Task> getTasks() {
        return (List<Task>) repo.findAll();
    }

    @Override
    @Transactional
    public void save(Task t) {
        repo.save(t);
    }

    @Override
    @Transactional(readOnly = true)
    public Task getTask(String id) {
        return repo.findById(id).get();
    }

    @Override
    public void delete(String id) {
        repo.deleteById(id);
    }

}
