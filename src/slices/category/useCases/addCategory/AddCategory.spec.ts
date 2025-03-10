import { addCategoryRepository } from "@/slices/category/repositories/contracts/AddCategoryRepository";
import { fakeCategoryEntity } from "@/slices/category/entities/CategoryEntity.spec";
import MockDate from "mockdate";
import { mock, MockProxy } from "jest-mock-extended";
import { AddCategory, addCategory } from "./AddCategory";
import { CategoryEntity } from "@/slices/category/entities";

describe("addCategory", () => {
  let testInstance: AddCategory;
  let addCategoryRepository: MockProxy<addCategoryRepository>;

  beforeAll(async () => {
    MockDate.set(new Date());
    addCategoryRepository = mock();
    addCategoryRepository.addCategory.mockResolvedValue(fakeCategoryEntity);
  });

  beforeEach(() => {
    testInstance = addCategory(addCategoryRepository);
  });

  afterAll(async () => {
    MockDate.reset();
  });

  it("should call addCategory of AddCategoryRepository with correct values", async () => {
    await testInstance(fakeCategoryEntity);
    expect(addCategoryRepository.addCategory).toHaveBeenCalledWith(
      new CategoryEntity(fakeCategoryEntity)
    );
    expect(addCategoryRepository.addCategory).toHaveBeenCalledTimes(1);
  });

  it("should return a new category when addCategoryRepository insert it", async () => {
    const category = await testInstance(fakeCategoryEntity);
    expect(category).toEqual(fakeCategoryEntity);
  });

  it("should return null a new category when addCategoryRepository insert it", async () => {
    addCategoryRepository.addCategory.mockResolvedValue(null);
    const category = await testInstance(fakeCategoryEntity);
    expect(category).toBeNull();
  });

  it("should rethrow if addCategory of AddCategoryRepository throws", async () => {
    addCategoryRepository.addCategory.mockRejectedValueOnce(new Error("any_error"));
    await expect(testInstance(fakeCategoryEntity)).rejects.toThrowError("any_error");
  });
});
