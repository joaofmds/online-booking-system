import { ClientData } from "@/slices/client/entities";

export interface addClientRepository {
  addClient(Client: ClientData): Promise<ClientData | null>;
}
