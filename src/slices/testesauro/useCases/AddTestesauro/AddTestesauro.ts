import { addTestesauroRepository } from "@/slices/Testesauro/repositories/contracts/addTestesauroRepository";
import { TestesauroEntity, TestesauroData } from "../../entities";

export type AddTestesauro = (data: TestesauroData) => Promise<TestesauroEntity | null>;
export type AddTestesauroSignature = (AddTestesauro: addTestesauroRepository) => AddTestesauro;

export const addTestesauro: AddTestesauroSignature =
  (addTestesauroRepository: addTestesauroRepository) => (data: TestesauroData) => {
    return addTestesauroRepository.addTestesauro(new TestesauroEntity(data));
  };
