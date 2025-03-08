import { LoadAverageRatingResultRepository } from "@/slices/ratingResult/repositories/contracts";
import { RatingResultAverage } from "@/slices/ratingResult/entities";
import { Query } from "@/application/types";

export type LoadAverageRatingResult = (
  query: Query
) => Promise<RatingResultAverage | null>;
export type LoadAverageRatingResultSignature = (
  loadAverageRatingResult: LoadAverageRatingResultRepository
) => LoadAverageRatingResult;

export const loadAverageRatingResult: LoadAverageRatingResultSignature =
  (loadAverageRatingResultRepository: LoadAverageRatingResultRepository) =>
  (query: Query) => {
    return loadAverageRatingResultRepository.loadAverageRatingResult(query);
  };
