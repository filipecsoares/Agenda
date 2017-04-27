package com.agenda.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import com.agenda.model.Business;
import com.agenda.repository.BusinessRepository;

@RestController
@RequestMapping("/business")
public class BusinessController {
	@Autowired
	private BusinessRepository repository;

	@RequestMapping(method = RequestMethod.GET)
	public ResponseEntity<List<Business>> findAll() {
		List<Business> businesses = repository.findAll();
		if (businesses.isEmpty()) {
			return new ResponseEntity<List<Business>>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<Business>>(businesses, HttpStatus.OK);
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Business> findOne(@PathVariable("id") Long id) {
		System.out.println("Fetching Business with id " + id);
		Business business = repository.findOne(id);
		if (business == null) {
			System.out.println("Business with id " + id + " not found");
			return new ResponseEntity<Business>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Business>(business, HttpStatus.OK);
	}

	@RequestMapping(method = RequestMethod.POST)
	public ResponseEntity<Void> save(@RequestBody Business business, UriComponentsBuilder ucBuilder) {
		System.out.println("Creating Business " + business.getName());

		repository.save(business);

		HttpHeaders headers = new HttpHeaders();
		headers.setLocation(ucBuilder.path("/{id}").buildAndExpand(business.getId()).toUri());
		return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Business> delete(@PathVariable("id") Long id) {
		System.out.println("Fetching & Deleting Business with id " + id);

		Business business = repository.findOne(id);
		if (business == null) {
			System.out.println("Unable to delete. Business with id " + id + " not found");
			return new ResponseEntity<Business>(HttpStatus.NOT_FOUND);
		}

		repository.delete(id);
		return new ResponseEntity<Business>(HttpStatus.NO_CONTENT);
	}

	@RequestMapping(method = RequestMethod.DELETE)
	public ResponseEntity<Business> deleteAll() {
		System.out.println("Deleting All Businesses");

		repository.deleteAll();
		return new ResponseEntity<Business>(HttpStatus.NO_CONTENT);
	}
}