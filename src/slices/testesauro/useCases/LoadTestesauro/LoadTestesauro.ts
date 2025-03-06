import { LoadTestesauroRepository } from "@/slices/testesauro/repositories/contracts/LoadTestesauroRepository";
import { TestesauroData } from "../../entities";
import { Query } from "@/application/types";

export type LoadTestesauro = (query: Query) => Promise<TestesauroData | null>;
export type LoadTestesauroSignature = (loadTestesauro: LoadTestesauroRepository) => LoadTestesauro;

export const loadTestesauro: LoadTestesauroSignature =
  (loadTestesauroRepository: LoadTestesauroRepository) => (query: Query) => {
    return loadTestesauroRepository.loadTestesauro(query);
  };
