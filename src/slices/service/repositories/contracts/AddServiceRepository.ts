import { ServiceData } from "@/slices/Service/entities";

export interface addServiceRepository {
  addService(Service: ServiceData): Promise<ServiceData | null>;
}
