
package com.api.Backend.Services;

import com.api.Backend.Models.Task;
import java.util.List;

public interface TaskService {
    
    public List<Task> getTasks();
    public void save(Task t);
    public Task getTask(String id);
    public void delete(String id);
    
}
