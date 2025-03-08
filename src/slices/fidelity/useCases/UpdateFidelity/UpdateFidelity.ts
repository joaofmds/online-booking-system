import { UpdateFidelityRepository } from "@/slices/fidelity/repositories/contracts";
import { FidelityData } from "@/slices/fidelity/entities";
import { Query } from "@/application/types";

export type UpdateFidelity = (
  query: Query,
  data: FidelityData
) => Promise<FidelityData | null>;
export type UpdateFidelitySignature = (
  updateFidelity: UpdateFidelityRepository
) => UpdateFidelity;

export const updateFidelity: UpdateFidelitySignature =
  (updateFidelityRepository: UpdateFidelityRepository) =>
  (query: Query, data: FidelityData) => {
    return updateFidelityRepository.updateFidelity(query, data);
  };
