import { Query } from "@/application/types";
import { TestesauroData } from "@/slices/testesauro/entities";

export interface LoadTestesauroRepository {
  loadTestesauro(query: Query): Promise<TestesauroData | null>;
}
