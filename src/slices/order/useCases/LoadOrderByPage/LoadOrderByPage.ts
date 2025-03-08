import { LoadOrderByPageRepository } from "@/slices/order/repositories/contracts";
import { OrderPaginated } from "@/slices/order/entities";
import { Query } from "@/application/types";

export type LoadOrderByPage = (query: Query) => Promise<OrderPaginated | null>;
export type LoadOrderByPageSignature = (
  loadOrderByPage: LoadOrderByPageRepository
) => LoadOrderByPage;

export const loadOrderByPage: LoadOrderByPageSignature =
  (loadOrderByPageRepository: LoadOrderByPageRepository) => (query: Query) => {
    return loadOrderByPageRepository.loadOrderByPage(query);
  };
