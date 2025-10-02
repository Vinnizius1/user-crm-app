/* Etapa 2: Criar o serviço de consumo em src/services/userService.ts */

/* Esse arquivo é a nossa camada de serviços, que centraliza toda a comunicação com a API. 
Ele organiza o projeto e permite que os componentes não se preocupem com lógica de requisição — 
só chamam as funções getUsers() e createUser().
*/

import axios from "axios";
import type { User } from "../types/User";

const API_URL = "https://my-json-server.typicode.com/Vinnizius1/user-crm-app/users";

export const getUsers = async (): Promise<User[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createUser = async (user: Omit<User, "id">): Promise<User> => {
  const response = await axios.post(API_URL, user);
  return response.data;
};

export const updateUser = async (
  id: number,
  user: Omit<User, "id">
): Promise<User> => {
  const response = await axios.put(`${API_URL}/${id}`, user);
  return response.data;
};

export const deleteUser = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};
