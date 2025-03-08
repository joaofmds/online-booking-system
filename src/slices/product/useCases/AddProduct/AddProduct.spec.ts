import { addProductRepository } from "@/slices/product/repositories/contracts";
import { fakeProductEntity } from "@/slices/product/entities/ProductEntity.spec";
import MockDate from "mockdate";
import { mock, MockProxy } from "jest-mock-extended";
import { addProduct } from "./AddProduct";
import { ProductEntity } from "@/slices/product/entities";

describe("addProduct", () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let testInstance: any;
  let addProductRepository: MockProxy<addProductRepository>;

  beforeAll(async () => {
    MockDate.set(new Date());
    addProductRepository = mock();
    addProductRepository.addProduct.mockResolvedValue(fakeProductEntity);
  });

  beforeEach(() => {
    testInstance = addProduct(addProductRepository);
  });

  afterAll(async () => {
    MockDate.reset();
  });

  it("should call addProduct of AddProductRepository with correct values", async () => {
    await testInstance(fakeProductEntity);
    expect(addProductRepository.addProduct).toHaveBeenCalledWith(
      new ProductEntity(fakeProductEntity)
    );
    expect(addProductRepository.addProduct).toHaveBeenCalledTimes(1);
  });

  it("should return a new Product when addProductRepository insert it", async () => {
    const Product = await testInstance(fakeProductEntity);
    expect(Product).toEqual(fakeProductEntity);
  });

  it("should return null a new Product when addProductRepository insert it", async () => {
    addProductRepository.addProduct.mockResolvedValue(null);
    const Product = await testInstance(fakeProductEntity);
    expect(Product).toBeNull();
  });

  it("should rethrow if addProduct of AddProductRepository throws", async () => {
    addProductRepository.addProduct.mockRejectedValueOnce(new Error("any_error"));
    await expect(testInstance(fakeProductEntity)).rejects.toThrowError("any_error");
  });
});
