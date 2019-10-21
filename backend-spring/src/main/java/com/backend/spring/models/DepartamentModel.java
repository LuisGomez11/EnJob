/**
 * 
 */
package com.backend.spring.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

/**
 * @author christian
 *
 */
@Document("departaments")
@Data
public class DepartamentModel {
	@Id
	private String idDpt;
	private String nameDpt;
	private String enterpriseDpt;
	
	public DepartamentModel() {
		
	}
}
