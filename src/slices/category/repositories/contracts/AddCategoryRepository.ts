import { CategoryData } from "@/slices/category/entities";

export interface addCategoryRepository {
  addCategory(category: CategoryData): Promise<CategoryData | null>;
}
