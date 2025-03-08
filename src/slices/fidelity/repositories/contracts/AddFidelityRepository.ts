import { FidelityData } from "@/slices/fidelity/entities";

export interface addFidelityRepository {
  addFidelity(Fidelity: FidelityData): Promise<FidelityData | null>;
}
