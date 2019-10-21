/**
 * 
 */
package com.backend.spring.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.spring.models.DepartamentModel;
import com.backend.spring.resource.vo.DepartamentVo;
import com.backend.spring.services.DepartamentService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

/**
 * @author christian
 *
 */
@RestController
@RequestMapping("/v1/api/departaments")
@Api(tags = "departament")
public class DepartamentResource {

	@Autowired
	DepartamentService dptService;

	@PostMapping("/create")
	@ApiOperation(value = "Create departamen", notes = "Service to crate a new departament")
	@ApiResponses(value = { @ApiResponse(code = 201, message = "departament create successfully"),
			@ApiResponse(code = 400, message = "Invalid request") })
	public ResponseEntity<DepartamentModel> createDepartament(@RequestBody DepartamentVo dptVo) {
		DepartamentModel dptModel = new DepartamentModel();

		dptModel.setNameDpt(dptVo.getNameDpt());
		dptModel.setEnterpriseDpt(dptVo.getEnterpriseDpt());
		return new ResponseEntity<>(this.dptService.addDpt(dptModel), HttpStatus.CREATED);
	}

	@PutMapping("/{id}")
	@ApiOperation(value = "update departament", notes = "Service to update a departament")
	@ApiResponses(value = { @ApiResponse(code = 201, message = "departament updated successfully"),
			@ApiResponse(code = 404, message = "departament not found") })
	public ResponseEntity<DepartamentModel> updateDepartament(@PathVariable("id") String id, DepartamentVo dptVo) {

		DepartamentModel dptModel = this.dptService.getIdDpt(id);
		if (dptModel == null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		} else {
			dptModel.setNameDpt(dptVo.getNameDpt());
			dptModel.setEnterpriseDpt(dptVo.getEnterpriseDpt());
		}

		return new ResponseEntity<>(this.dptService.addDpt(dptModel), HttpStatus.CREATED);
	}

	@DeleteMapping("/{id}")
	@ApiOperation(value = "delete departament", notes = "Service to delete a departament")
	@ApiResponses(value = { @ApiResponse(code = 201, message = "departament deleted successfully"),
			@ApiResponse(code = 404, message = "Customer not found") })
	public void removeDepartament(@PathVariable("id") String id) {
		DepartamentModel customer = this.dptService.getIdDpt(id);
		if (customer != null) {
			this.dptService.deleteDpt(id);
		}
	}

	@GetMapping
	@ApiOperation(value = "to list departament", notes = "Service to list all departament")
	@ApiResponses(value = { @ApiResponse(code = 201, message = "departament found"),
			@ApiResponse(code = 404, message = "departament found") })
	public ResponseEntity<List<DepartamentModel>> findAll() {
		return ResponseEntity.ok(this.dptService.getDpt());
	}

}
