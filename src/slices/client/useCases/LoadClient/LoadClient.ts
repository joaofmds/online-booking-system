import { LoadClientRepository } from "@/slices/client/repositories/contracts";
import { ClientData } from "@/slices/client/entities";
import { Query } from "@/application/types";

export type LoadClient = (query: Query) => Promise<ClientData | null>;
export type LoadClientSignature = (loadClient: LoadClientRepository) => LoadClient;

export const loadClient: LoadClientSignature =
  (loadClientRepository: LoadClientRepository) => (query: Query) => {
    return loadClientRepository.loadClient(query);
  };
