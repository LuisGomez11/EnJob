
package com.api.Backend.Repository;

import com.api.Backend.Models.Task;
import org.springframework.data.repository.CrudRepository;

public interface TaskRepository extends CrudRepository<Task, String>{
    
}
