package com.salesforce.salesforce.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.salesforce.salesforce.model.Client;

public interface ClientRepository extends JpaRepository<Client, Long> {

}
