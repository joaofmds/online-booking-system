import { LoadRideByPageRepository } from "@/slices/ride/repositories/contracts";
import { RidePaginated } from "@/slices/ride/entities";
import { Query } from "@/application/types";

export type LoadRideByPage = (query: Query) => Promise<RidePaginated | null>;
export type LoadRideByPageSignature = (
  loadRideByPage: LoadRideByPageRepository
) => LoadRideByPage;

export const loadRideByPage: LoadRideByPageSignature =
  (loadRideByPageRepository: LoadRideByPageRepository) => (query: Query) => {
    return loadRideByPageRepository.loadRideByPage(query);
  };
