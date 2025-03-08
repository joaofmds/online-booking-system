import { LoadOrderRepository } from "@/slices/order/repositories/contracts";
import { OrderData } from "@/slices/order/entities";
import { Query } from "@/application/types";

export type LoadOrder = (query: Query) => Promise<OrderData | null>;
export type LoadOrderSignature = (loadOrder: LoadOrderRepository) => LoadOrder;

export const loadOrder: LoadOrderSignature =
  (loadOrderRepository: LoadOrderRepository) => (query: Query) => {
    return loadOrderRepository.loadOrder(query);
  };
