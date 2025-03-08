import { addCategoryRepository } from "@/slices/category/repositories/contracts/AddCategoryRepository";
import { CategoryEntity, CategoryData } from "@/slices/category/entities";

export type AddCategory = (data: CategoryData) => Promise<CategoryEntity | null>;
export type AddCategorySignature = (AddCategory: addCategoryRepository) => AddCategory;

export const addCategory: AddCategorySignature =
  (addCategoryRepository: addCategoryRepository) => (data: CategoryData) => {
    return addCategoryRepository.addCategory(new CategoryEntity(data));
  };
