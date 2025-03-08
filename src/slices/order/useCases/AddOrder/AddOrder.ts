import { addOrderRepository } from "@/slices/order/repositories/contracts";
import { OrderEntity, OrderData } from "@/slices/order/entities";

export type AddOrder = (data: OrderData) => Promise<OrderEntity | null>;
export type AddOrderSignature = (AddOrder: addOrderRepository) => AddOrder;

export const addOrder: AddOrderSignature =
  (addOrderRepository: addOrderRepository) => (data: OrderData) => {
    return addOrderRepository.addOrder(new OrderEntity(data));
  };
