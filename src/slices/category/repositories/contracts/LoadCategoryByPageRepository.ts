import { Query } from "@/application/types";
import { CategoryPaginated } from "../../entities";

export interface LoadCategoryByPageRepository {
  loadCategoryByPage(query: Query): Promise<CategoryPaginated | null>;
}
