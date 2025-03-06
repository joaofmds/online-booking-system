import { LoadCategoryRepository } from "@/slices/category/repositories/contracts/LoadCategoryRepository";
import { CategoryData } from "../../entities";
import { Query } from "@/application/types";

export type LoadCategory = (query: Query) => Promise<CategoryData | null>;
export type LoadCategorySignature = (loadCategory: LoadCategoryRepository) => LoadCategory;

export const loadCategory: LoadCategorySignature =
  (loadCategoryRepository: LoadCategoryRepository) => (query: Query) => {
    return loadCategoryRepository.loadCategory(query);
  };
