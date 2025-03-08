import { LoadOwnerByPageRepository } from "@/slices/owner/repositories/contracts";
import { OwnerPaginated } from "@/slices/owner/entities";
import { Query } from "@/application/types";

export type LoadOwnerByPage = (query: Query) => Promise<OwnerPaginated | null>;
export type LoadOwnerByPageSignature = (
  loadOwnerByPage: LoadOwnerByPageRepository
) => LoadOwnerByPage;

export const loadOwnerByPage: LoadOwnerByPageSignature =
  (loadOwnerByPageRepository: LoadOwnerByPageRepository) => (query: Query) => {
    return loadOwnerByPageRepository.loadOwnerByPage(query);
  };
