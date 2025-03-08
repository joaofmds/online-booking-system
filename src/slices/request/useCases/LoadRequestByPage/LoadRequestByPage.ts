import { LoadRequestByPageRepository } from "@/slices/request/repositories/contracts";
import { RequestPaginated } from "@/slices/request/entities";
import { Query } from "@/application/types";

export type LoadRequestByPage = (query: Query) => Promise<RequestPaginated | null>;
export type LoadRequestByPageSignature = (
  loadRequestByPage: LoadRequestByPageRepository
) => LoadRequestByPage;

export const loadRequestByPage: LoadRequestByPageSignature =
  (loadRequestByPageRepository: LoadRequestByPageRepository) => (query: Query) => {
    return loadRequestByPageRepository.loadRequestByPage(query);
  };
