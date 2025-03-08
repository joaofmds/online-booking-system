import { UpdateOrderRepository } from "@/slices/order/repositories/contracts";
import { OrderData } from "@/slices/order/entities";
import { Query } from "@/application/types";

export type UpdateOrder = (
  query: Query,
  data: OrderData
) => Promise<OrderData | null>;
export type UpdateOrderSignature = (
  updateOrder: UpdateOrderRepository
) => UpdateOrder;

export const updateOrder: UpdateOrderSignature =
  (updateOrderRepository: UpdateOrderRepository) =>
  (query: Query, data: OrderData) => {
    return updateOrderRepository.updateOrder(query, data);
  };
