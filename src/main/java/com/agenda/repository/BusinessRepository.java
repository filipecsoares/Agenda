package com.agenda.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.agenda.model.Business;

@Repository
public interface BusinessRepository extends JpaRepository<Business, Long> {

}
