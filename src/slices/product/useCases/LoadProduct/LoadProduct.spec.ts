import { LoadProductRepository } from "@/slices/product/repositories/contracts";
import { Query } from "@/application/types";
import { fakeProductEntity } from "@/slices/product/entities/ProductEntity.spec";
import { LoadProduct, loadProduct } from "./LoadProduct";
import MockDate from "mockdate";

import { mock, MockProxy } from "jest-mock-extended";

describe("LoadProduct", () => {
  let fakeQuery: Query;
  let testInstance: LoadProduct;
  let loadProductRepository: MockProxy<LoadProductRepository>;

  beforeAll(async () => {
    MockDate.set(new Date());
    loadProductRepository = mock();
    fakeQuery = { fields: { name: "123" }, options: {} };

    loadProductRepository.loadProduct.mockResolvedValue(fakeProductEntity);
  });

  beforeEach(() => {
    testInstance = loadProduct(loadProductRepository);
  });

  afterAll(async () => {
    MockDate.reset();
  });

  it("should call loadProduct of LoadProductRepository with correct values", async () => {
    await testInstance(fakeQuery);
    expect(loadProductRepository.loadProduct).toHaveBeenCalledWith(fakeQuery);
    expect(loadProductRepository.loadProduct).toHaveBeenCalledTimes(1);
  });

  it("should return aproduct loaded when loadProductRepository insert it", async () => {
    const product = await testInstance(fakeQuery);
    expect(product).toEqual(fakeProductEntity);
  });

  it("should return null aproduct loaded when loadProductRepository insert it", async () => {
    loadProductRepository.loadProduct.mockResolvedValue(null);
    const product = await testInstance(fakeQuery);
    expect(product).toBeNull();
  });

  it("should rethrow if loadProduct of loadProductRepository throws", async () => {
    loadProductRepository.loadProduct.mockRejectedValueOnce(new Error("any_error"));
    await expect(testInstance(fakeQuery)).rejects.toThrowError("any_error");
  });
});
