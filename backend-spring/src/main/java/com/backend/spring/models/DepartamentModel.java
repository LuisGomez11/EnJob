/**
 * 
 */
package com.backend.spring.models;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import org.hibernate.annotations.GenericGenerator;

import lombok.Data;

/**
 * @author christian
 *
 */
@Data
public class DepartamentModel {
	@Id
	@GeneratedValue(generator = "system-uuid")
	@GenericGenerator(name = "system-uuid", strategy = "uuid2")
	private String idDpt;
	private String nameDpt;
	private String enterpriseDpt;
	
	public DepartamentModel() {
		
	}
}
