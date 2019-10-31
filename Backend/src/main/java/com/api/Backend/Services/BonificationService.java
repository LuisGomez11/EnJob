
package com.api.Backend.Services;

import com.api.Backend.Models.Bonification;
import java.util.List;

public interface BonificationService {
    
    public List<Bonification> getBonifications();
    public void save(Bonification b);
    public Bonification getBonification(String id);
    public void delete(String id);
    
}
