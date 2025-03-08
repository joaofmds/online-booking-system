import { OrderData } from "@/slices/order/entities";

export interface addOrderRepository {
  addOrder(Order: OrderData): Promise<OrderData | null>;
}
