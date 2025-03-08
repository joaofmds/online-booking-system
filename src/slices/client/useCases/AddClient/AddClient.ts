import { addClientRepository } from "@/slices/client/repositories/contracts";
import { ClientEntity, ClientData } from "@/slices/client/entities";

export type AddClient = (data: ClientData) => Promise<ClientEntity | null>;
export type AddClientSignature = (AddClient: addClientRepository) => AddClient;

export const addClient: AddClientSignature =
  (addClientRepository: addClientRepository) => (data: ClientData) => {
    return addClientRepository.addClient(new ClientEntity(data));
  };
