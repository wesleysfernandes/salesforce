package com.salesforce.salesforce.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.salesforce.salesforce.dto.NewClientDTO;
import com.salesforce.salesforce.dto.NewClientResponseDTO;
import com.salesforce.salesforce.service.NewClientService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/salesforce/client")
public class ClientController {
    @Autowired
    private NewClientService newClientService;

    @PostMapping("/newClient")
    public ResponseEntity<NewClientResponseDTO> createClient(@RequestBody NewClientDTO request) {
        NewClientResponseDTO response = newClientService.newClient(request);
        return ResponseEntity.ok(response);
    }
}
