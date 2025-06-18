package com.salesforce.salesforce.dto.Client;

import java.time.LocalDate;

public record FindClientDTO(
        Long id,
        String name,
        String cpf,
        LocalDate birthDate,
        double income) {

}
