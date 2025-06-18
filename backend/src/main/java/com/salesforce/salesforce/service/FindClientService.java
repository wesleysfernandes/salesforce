package com.salesforce.salesforce.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.salesforce.salesforce.dto.Client.FindClientDTO;
import com.salesforce.salesforce.mapper.client.ClientByNameMapper;
import com.salesforce.salesforce.repository.ClientRepository;

@Service
public class FindClientService {
    @Autowired
    private ClientRepository clientRepository;

    @Autowired
    private ClientByNameMapper clientByNameMapper;

    public List<FindClientDTO> findClientsByName(String name) {
        return clientRepository.findClientsByName(name)
                .stream()
                .map(clientByNameMapper::toResponse)
                .collect(Collectors.toList());
    }
}
