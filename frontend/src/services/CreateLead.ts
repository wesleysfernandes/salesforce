import axios from 'axios';

const apiCreateLead = axios.create({
    baseURL: "http://localhost:8080/api/salesforce/client",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});

export interface LeadData {
    ownerName: string;
    cpf: string;
    birthDate: string;
    income: string;
}


export const processData = async (data: LeadData) => {
  try {
    const payload = {
      ownerName: data.ownerName,
      cpf: data.cpf,
      birthDate: data.birthDate,
      income: data.income
    };

    const response = await apiCreateLead.post("/newClient", payload);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {

      const errorMessage = error.response?.data?.message || 'Erro ao criar o lead';
      throw new Error(errorMessage);
    } else {
      throw new Error('Erro desconhecido ao criar o lead');
    }
  }
}