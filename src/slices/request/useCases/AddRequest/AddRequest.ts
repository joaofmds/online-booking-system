import { addRequestRepository } from "@/slices/request/repositories/contracts";
import { RequestEntity, RequestData } from "@/slices/request/entities";

export type AddRequest = (data: RequestData) => Promise<RequestEntity | null>;
export type AddRequestSignature = (AddRequest: addRequestRepository) => AddRequest;

export const addRequest: AddRequestSignature =
  (addRequestRepository: addRequestRepository) => (data: RequestData) => {
    return addRequestRepository.addRequest(new RequestEntity(data));
  };
