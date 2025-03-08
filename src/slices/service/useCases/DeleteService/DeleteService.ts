import { DeleteServiceRepository } from "@/slices/service/repositories/contracts/DeleteServiceRepository";
import { ServiceData } from "../../entities";
import { Query } from "@/application/types";

export type DeleteService = (query: Query) => Promise<ServiceData | null>;
export type DeleteServiceSignature = (
  deleteService: DeleteServiceRepository
) => DeleteService;

export const deleteService: DeleteServiceSignature =
  (deleteServiceRepository: DeleteServiceRepository) => (query: Query) => {
    return deleteServiceRepository.deleteService(query);
  };
