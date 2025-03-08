import { addServiceRepository } from "@/slices/service/repositories/contracts/AddServiceRepository";
import { ServiceEntity, ServiceData } from "../../entities";

export type AddService = (data: ServiceData) => Promise<ServiceEntity | null>;
export type AddServiceSignature = (AddService: addServiceRepository) => AddService;

export const addService: AddServiceSignature =
  (addServiceRepository: addServiceRepository) => (data: ServiceData) => {
    return addServiceRepository.addService(new ServiceEntity(data));
  };
