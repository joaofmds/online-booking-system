import { LoadOwnerRepository } from "@/slices/owner/repositories/contracts";
import { OwnerData } from "@/slices/owner/entities";
import { Query } from "@/application/types";

export type LoadOwner = (query: Query) => Promise<OwnerData | null>;
export type LoadOwnerSignature = (loadOwner: LoadOwnerRepository) => LoadOwner;

export const loadOwner: LoadOwnerSignature =
  (loadOwnerRepository: LoadOwnerRepository) => (query: Query) => {
    return loadOwnerRepository.loadOwner(query);
  };
