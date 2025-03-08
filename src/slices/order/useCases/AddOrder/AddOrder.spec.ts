import { addOrderRepository } from "@/slices/order/repositories/contracts";
import { fakeOrderEntity } from "@/slices/order/entities/OrderEntity.spec";
import MockDate from "mockdate";
import { mock, MockProxy } from "jest-mock-extended";
import { addOrder } from "./AddOrder";
import { OrderEntity } from "@/slices/order/entities";

describe("addOrder", () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let testInstance: any;
  let addOrderRepository: MockProxy<addOrderRepository>;

  beforeAll(async () => {
    MockDate.set(new Date());
    addOrderRepository = mock();
    addOrderRepository.addOrder.mockResolvedValue(fakeOrderEntity);
  });

  beforeEach(() => {
    testInstance = addOrder(addOrderRepository);
  });

  afterAll(async () => {
    MockDate.reset();
  });

  it("should call addOrder of AddOrderRepository with correct values", async () => {
    await testInstance(fakeOrderEntity);
    expect(addOrderRepository.addOrder).toHaveBeenCalledWith(
      new OrderEntity(fakeOrderEntity)
    );
    expect(addOrderRepository.addOrder).toHaveBeenCalledTimes(1);
  });

  it("should return a new Order when addOrderRepository insert it", async () => {
    const Order = await testInstance(fakeOrderEntity);
    expect(Order).toEqual(fakeOrderEntity);
  });

  it("should return null a new Order when addOrderRepository insert it", async () => {
    addOrderRepository.addOrder.mockResolvedValue(null);
    const Order = await testInstance(fakeOrderEntity);
    expect(Order).toBeNull();
  });

  it("should rethrow if addOrder of AddOrderRepository throws", async () => {
    addOrderRepository.addOrder.mockRejectedValueOnce(new Error("any_error"));
    await expect(testInstance(fakeOrderEntity)).rejects.toThrowError("any_error");
  });
});
