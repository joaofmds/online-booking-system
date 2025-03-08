import { UpdateClientRepository } from "@/slices/client/repositories/contracts";
import { ClientData } from "@/slices/client/entities";
import { Query } from "@/application/types";

export type UpdateClient = (
  query: Query,
  data: ClientData
) => Promise<ClientData | null>;
export type UpdateClientSignature = (
  updateClient: UpdateClientRepository
) => UpdateClient;

export const updateClient: UpdateClientSignature =
  (updateClientRepository: UpdateClientRepository) =>
  (query: Query, data: ClientData) => {
    return updateClientRepository.updateClient(query, data);
  };
