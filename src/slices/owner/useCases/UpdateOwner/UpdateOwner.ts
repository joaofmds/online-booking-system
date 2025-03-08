import { UpdateOwnerRepository } from "@/slices/owner/repositories/contracts";
import { OwnerData } from "@/slices/owner/entities";
import { Query } from "@/application/types";

export type UpdateOwner = (
  query: Query,
  data: OwnerData
) => Promise<OwnerData | null>;
export type UpdateOwnerSignature = (
  updateOwner: UpdateOwnerRepository
) => UpdateOwner;

export const updateOwner: UpdateOwnerSignature =
  (updateOwnerRepository: UpdateOwnerRepository) =>
  (query: Query, data: OwnerData) => {
    return updateOwnerRepository.updateOwner(query, data);
  };
