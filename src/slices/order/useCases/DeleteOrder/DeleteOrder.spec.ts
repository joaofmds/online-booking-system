import { DeleteOrderRepository } from "@/slices/order/repositories/contracts";
import { fakeOrderEntity } from "@/slices/order/entities/OrderEntity.spec";
import MockDate from "mockdate";
import { mock, MockProxy } from "jest-mock-extended";
import { DeleteOrder, deleteOrder } from "./DeleteOrder";
import { Query } from "@/application/types";

describe("deleteOrder", () => {
  let fakeQuery: Query;
  let testInstance: DeleteOrder;
  let deleteOrderRepository: MockProxy<DeleteOrderRepository>;

  beforeAll(async () => {
    MockDate.set(new Date());
    deleteOrderRepository = mock();
    fakeQuery = { fields: { name: "123" }, options: {} };
    deleteOrderRepository.deleteOrder.mockResolvedValue(fakeOrderEntity);
  });

  beforeEach(() => {
    testInstance = deleteOrder(deleteOrderRepository);
  });

  afterAll(async () => {
    MockDate.reset();
  });

  it("should call deleteOrder of DeleteOrderRepository with correct values", async () => {
    await testInstance(fakeQuery);
    expect(deleteOrderRepository.deleteOrder).toHaveBeenCalledWith(fakeQuery);
    expect(deleteOrderRepository.deleteOrder).toHaveBeenCalledTimes(1);
  });

  it("should return a new order when deleteOrderRepository delete it", async () => {
    const order = await testInstance(fakeQuery);
    expect(order).toEqual(fakeOrderEntity);
  });

  it("should return null a new order when deleteOrderRepository delete it", async () => {
    deleteOrderRepository.deleteOrder.mockResolvedValue(null);
    const order = await testInstance(fakeQuery);
    expect(order).toBeNull();
  });

  it("should rethrow if deleteOrder of DeleteOrderRepository throws", async () => {
    deleteOrderRepository.deleteOrder.mockRejectedValueOnce(new Error("any_error"));
    await expect(testInstance(fakeQuery)).rejects.toThrowError("any_error");
  });
});
