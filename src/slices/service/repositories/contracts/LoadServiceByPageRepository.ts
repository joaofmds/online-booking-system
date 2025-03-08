import { Query } from "@/application/types";
import { ServicePaginated } from "../../entities";

export interface LoadServiceByPageRepository {
  loadServiceByPage(query: Query): Promise<ServicePaginated | null>;
}
