import { LoadRequestRepository } from "@/slices/request/repositories/contracts";
import { RequestData } from "@/slices/request/entities";
import { Query } from "@/application/types";

export type LoadRequest = (query: Query) => Promise<RequestData | null>;
export type LoadRequestSignature = (loadRequest: LoadRequestRepository) => LoadRequest;

export const loadRequest: LoadRequestSignature =
  (loadRequestRepository: LoadRequestRepository) => (query: Query) => {
    return loadRequestRepository.loadRequest(query);
  };
