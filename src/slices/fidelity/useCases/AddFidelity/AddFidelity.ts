import { addFidelityRepository } from "@/slices/fidelity/repositories/contracts";
import { FidelityEntity, FidelityData } from "@/slices/fidelity/entities";

export type AddFidelity = (data: FidelityData) => Promise<FidelityEntity | null>;
export type AddFidelitySignature = (AddFidelity: addFidelityRepository) => AddFidelity;

export const addFidelity: AddFidelitySignature =
  (addFidelityRepository: addFidelityRepository) => (data: FidelityData) => {
    return addFidelityRepository.addFidelity(new FidelityEntity(data));
  };
