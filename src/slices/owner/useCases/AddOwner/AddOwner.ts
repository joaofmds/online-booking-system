import { addOwnerRepository } from "@/slices/owner/repositories/contracts";
import { OwnerEntity, OwnerData } from "@/slices/owner/entities";

export type AddOwner = (data: OwnerData) => Promise<OwnerEntity | null>;
export type AddOwnerSignature = (AddOwner: addOwnerRepository) => AddOwner;

export const addOwner: AddOwnerSignature =
  (addOwnerRepository: addOwnerRepository) => (data: OwnerData) => {
    return addOwnerRepository.addOwner(new OwnerEntity(data));
  };
