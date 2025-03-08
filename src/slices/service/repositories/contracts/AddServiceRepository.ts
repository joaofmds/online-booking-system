import { ServiceData } from "@/slices/service/entities";

export interface addServiceRepository {
  addService(Service: ServiceData): Promise<ServiceData | null>;
}
