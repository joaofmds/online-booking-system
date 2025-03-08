import { OwnerData } from "@/slices/owner/entities";

export interface addOwnerRepository {
  addOwner(Owner: OwnerData): Promise<OwnerData | null>;
}
