import { RequestData } from "@/slices/request/entities";

export interface addRequestRepository {
  addRequest(Request: RequestData): Promise<RequestData | null>;
}
