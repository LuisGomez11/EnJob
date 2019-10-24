
package com.api.Backend.Repository;

import com.api.Backend.Models.Task;
import org.springframework.data.repository.CrudRepository;

public interface TaskRepository extends CrudRepository<Task, String>{
    
//    @Query("SELECT u FROM User u WHERE u.status = 1")
//    Collection<User> findAllActiveUsers();
    
}
