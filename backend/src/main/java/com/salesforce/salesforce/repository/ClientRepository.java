package com.salesforce.salesforce.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.salesforce.salesforce.model.Client;

public interface ClientRepository extends JpaRepository<Client, Long> {
    @Query(value = "SELECT * FROM client WHERE name LIKE CONCAT('%', :name, '%')", nativeQuery = true)
    List<Client> findClientsByName(@Param("name") String name);
}
