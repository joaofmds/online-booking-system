import { UpdateCategoryRepository } from "@/slices/category/repositories/contracts/UpdateCategoryRepository";
import { CategoryData } from "@/slices/category/entities";
import { Query } from "@/application/types";

export type UpdateCategory = (
  query: Query,
  data: CategoryData
) => Promise<CategoryData | null>;
export type UpdateCategorySignature = (
  updateCategory: UpdateCategoryRepository
) => UpdateCategory;

export const updateCategory: UpdateCategorySignature =
  (updateCategoryRepository: UpdateCategoryRepository) =>
  (query: Query, data: CategoryData) => {
    return updateCategoryRepository.updateCategory(query, data);
  };
