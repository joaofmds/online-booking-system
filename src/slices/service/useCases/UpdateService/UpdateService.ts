import { UpdateServiceRepository } from "@/slices/service/repositories/contracts/UpdateServiceRepository";
import { ServiceData } from "@/slices/service/entities";
import { Query } from "@/application/types";

export type UpdateService = (
  query: Query,
  data: ServiceData
) => Promise<ServiceData | null>;
export type UpdateServiceSignature = (
  updateService: UpdateServiceRepository
) => UpdateService;

export const updateService: UpdateServiceSignature =
  (updateServiceRepository: UpdateServiceRepository) =>
  (query: Query, data: ServiceData) => {
    return updateServiceRepository.updateService(query, data);
  };
