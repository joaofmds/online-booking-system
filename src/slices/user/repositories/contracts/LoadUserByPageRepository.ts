import { Query } from "@/application/types";
import { UserPaginated } from "../../entities";

export interface LoadUserByPageRepository {
  loadUserByPage(query: Query): Promise<UserPaginated | null>;
}
