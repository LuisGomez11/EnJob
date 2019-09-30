package com.business.backend.resource;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.business.backend.models.Business;
import com.business.backend.resource.vo.BusinessVo;
import com.business.backend.service.BusinessServices;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

@RestController
@CrossOrigin(origins = { "http://localhost:4200" })
@RequestMapping("/v1/api")
@Api(tags = "Services")
public class BusinessResources {
	private final BusinessServices businessServices;

	public BusinessResources(BusinessServices businessServices) {
		this.businessServices = businessServices;
	};

	@PostMapping("/business/create")
	@ApiOperation(value = "Create business", notes = "Service to crate a new business")
	@ApiResponses(value = { @ApiResponse(code = 201, message = "business create successfully"),
			@ApiResponse(code = 400, message = "Invalid request") })
	public ResponseEntity<Business> POSTbusiness(@RequestBody BusinessVo businessVo) {
		Business business = new Business();
		try {
			business.setNameBusiness(businessVo.getNameBusiness());
			business.setAddressBusiness(businessVo.getAddressBusiness());
			business.setEmailBusiness(businessVo.getEmailBusiness());
			business.setCodeEmployee(businessVo.getCodeEmployee());
			
			return new ResponseEntity<>(this.businessServices.createBusiness(business), HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
	};

	@PutMapping("/business/update/{id}")
	@ApiOperation(value = "update business", notes = "Service to update a business")
	@ApiResponses(value = { @ApiResponse(code = 201, message = "business updated successfully"),
			@ApiResponse(code = 400, message = "Invalid request") })
	public ResponseEntity<Business> PUTbusiness(@PathVariable("id") String id, BusinessVo businessVo) {
		try {
			Business business = this.businessServices.findByBusiness(id);
			if (business == null) return new ResponseEntity<>(HttpStatus.NOT_FOUND);

			business.setNameBusiness(businessVo.getNameBusiness());
			business.setAddressBusiness(businessVo.getAddressBusiness());
			business.setEmailBusiness(businessVo.getEmailBusiness());
			business.setCodeEmployee(businessVo.getCodeEmployee());
			
			return new ResponseEntity<>(this.businessServices.updateBusiness(business), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
	};

	@DeleteMapping("/business/delete/{id}")
	@ApiOperation(value = "delete business", notes = "Service to delete a business")
	@ApiResponses(value = { @ApiResponse(code = 201, message = "business deleted successfully"),
			@ApiResponse(code = 400, message = "Invalid request") })
	public void DELETEbusiness(@PathVariable String id) {
		try {
			Business business = this.businessServices.findByBusiness(id);
			if (business != null) this.businessServices.deleteBusiness(business);
			
		} catch (Exception e) {
			// TODO: handle exception
		}
	};

	@GetMapping("/business")
	@ApiOperation(value = "to list business", notes = "Service to list all business")
	@ApiResponses(value = { @ApiResponse(code = 201, message = "services found"),
			@ApiResponse(code = 404, message = "services generated not found") })
	public ResponseEntity<List<Business>> GETbusiness() {
		try {
			return ResponseEntity.ok(this.businessServices.findAllBusiness());
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
	};

	@GetMapping("/business/{id}")
	@ApiOperation(value = "to find business by id", notes = "Service to find a business by id")
	@ApiResponses(value = { @ApiResponse(code = 201, message = "business finded"),
			@ApiResponse(code = 404, message = "busines not found") })
	public ResponseEntity<Business> GETIDbusiness(@PathVariable String id) {

		try {
			return ResponseEntity.ok(this.businessServices.findByBusiness(id));
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}

	};
}
