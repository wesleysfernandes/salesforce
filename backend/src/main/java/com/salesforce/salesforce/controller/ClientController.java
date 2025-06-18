package com.salesforce.salesforce.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.salesforce.salesforce.dto.NewClientDTO;
import com.salesforce.salesforce.dto.NewClientResponseDTO;
import com.salesforce.salesforce.dto.Client.FindClientDTO;
import com.salesforce.salesforce.service.FindClientService;
import com.salesforce.salesforce.service.NewClientService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/salesforce/client")
public class ClientController {
    @Autowired
    private NewClientService newClientService;
    @Autowired
    private FindClientService findClientService;

    @PostMapping("/newClient")
    public ResponseEntity<NewClientResponseDTO> createClient(@RequestBody NewClientDTO request) {
        NewClientResponseDTO response = newClientService.newClient(request);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/findClient")
    public ResponseEntity<List<FindClientDTO>> findClientsByName(@RequestParam("name") String name) {
        List<FindClientDTO> clients = findClientService.findClientsByName(name);

        if (clients.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }

        return ResponseEntity.ok(clients);
    }
}
