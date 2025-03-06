import { TestesauroData } from "@/slices/Testesauro/entities";

export interface addTestesauroRepository {
  addTestesauro(Testesauro: TestesauroData): Promise<TestesauroData | null>;
}
