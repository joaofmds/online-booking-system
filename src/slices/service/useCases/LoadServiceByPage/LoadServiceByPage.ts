import { LoadServiceByPageRepository } from "@/slices/service/repositories/contracts/LoadServiceByPageRepository";
import { ServicePaginated } from "@/slices/service/entities";
import { Query } from "@/application/types";

export type LoadServiceByPage = (query: Query) => Promise<ServicePaginated | null>;
export type LoadServiceByPageSignature = (
  loadServiceByPage: LoadServiceByPageRepository
) => LoadServiceByPage;

export const loadServiceByPage: LoadServiceByPageSignature =
  (loadServiceByPageRepository: LoadServiceByPageRepository) => (query: Query) => {
    return loadServiceByPageRepository.loadServiceByPage(query);
  };
