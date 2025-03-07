import { LoadCategoryByPageRepository } from "@/slices/category/repositories/contracts/LoadCategoryByPageRepository";
import { CategoryPaginated } from "../../entities";
import { Query } from "@/application/types";

export type LoadCategoryByPage = (query: Query) => Promise<CategoryPaginated | null>;
export type LoadCategoryByPageSignature = (
  loadCategoryByPage: LoadCategoryByPageRepository
) => LoadCategoryByPage;

export const loadCategoryByPage: LoadCategoryByPageSignature =
  (loadCategoryByPageRepository: LoadCategoryByPageRepository) => (query: Query) => {
    return loadCategoryByPageRepository.loadCategoryByPage(query);
  };
