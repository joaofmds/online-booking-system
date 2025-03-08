import { DeleteProductRepository } from "@/slices/product/repositories/contracts";
import { fakeProductEntity } from "@/slices/product/entities/ProductEntity.spec";
import MockDate from "mockdate";
import { mock, MockProxy } from "jest-mock-extended";
import { DeleteProduct, deleteProduct } from "./DeleteProduct";
import { Query } from "@/application/types";

describe("deleteProduct", () => {
  let fakeQuery: Query;
  let testInstance: DeleteProduct;
  let deleteProductRepository: MockProxy<DeleteProductRepository>;

  beforeAll(async () => {
    MockDate.set(new Date());
    deleteProductRepository = mock();
    fakeQuery = { fields: { name: "123" }, options: {} };
    deleteProductRepository.deleteProduct.mockResolvedValue(fakeProductEntity);
  });

  beforeEach(() => {
    testInstance = deleteProduct(deleteProductRepository);
  });

  afterAll(async () => {
    MockDate.reset();
  });

  it("should call deleteProduct of DeleteProductRepository with correct values", async () => {
    await testInstance(fakeQuery);
    expect(deleteProductRepository.deleteProduct).toHaveBeenCalledWith(fakeQuery);
    expect(deleteProductRepository.deleteProduct).toHaveBeenCalledTimes(1);
  });

  it("should return a new product when deleteProductRepository delete it", async () => {
    const product = await testInstance(fakeQuery);
    expect(product).toEqual(fakeProductEntity);
  });

  it("should return null a new product when deleteProductRepository delete it", async () => {
    deleteProductRepository.deleteProduct.mockResolvedValue(null);
    const product = await testInstance(fakeQuery);
    expect(product).toBeNull();
  });

  it("should rethrow if deleteProduct of DeleteProductRepository throws", async () => {
    deleteProductRepository.deleteProduct.mockRejectedValueOnce(new Error("any_error"));
    await expect(testInstance(fakeQuery)).rejects.toThrowError("any_error");
  });
});
