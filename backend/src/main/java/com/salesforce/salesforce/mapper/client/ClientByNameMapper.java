package com.salesforce.salesforce.mapper.client;

import org.springframework.stereotype.Component;

import com.salesforce.salesforce.dto.Client.FindClientDTO;
import com.salesforce.salesforce.model.Client;

@Component
public class ClientByNameMapper {

    public FindClientDTO toResponse(Client client) {
        return new FindClientDTO(
                client.getId(),
                client.getName(),
                client.getCpf(),
                client.getBirthDate(),
                client.getIncome());
    }
}
