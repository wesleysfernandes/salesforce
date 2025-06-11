package com.salesforce.salesforce.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.salesforce.salesforce.dto.NewClientDTO;
import com.salesforce.salesforce.dto.NewClientResponseDTO;
import com.salesforce.salesforce.model.Client;
import com.salesforce.salesforce.repository.ClientRepository;

@Service
public class NewClientService {

    @Autowired
    private ClientRepository clientRepository;

    public NewClientResponseDTO newClient(NewClientDTO request) {
        Client client = new Client(request.name, request.cpf, request.birthDate, request.income);

        clientRepository.save(client);

        return new NewClientResponseDTO("success", "Cliente cadastrado com sucesso");
    }

}
