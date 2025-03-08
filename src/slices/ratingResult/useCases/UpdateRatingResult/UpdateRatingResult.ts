import { UpdateRatingResultRepository } from "@/slices/ratingResult/repositories/contracts";
import { RatingResultData } from "@/slices/ratingResult/entities";
import { Query } from "@/application/types";

export type UpdateRatingResult = (
  query: Query,
  data: RatingResultData
) => Promise<RatingResultData | null>;
export type UpdateRatingResultSignature = (
  updateRatingResult: UpdateRatingResultRepository
) => UpdateRatingResult;

export const updateRatingResult: UpdateRatingResultSignature =
  (updateRatingResultRepository: UpdateRatingResultRepository) =>
  (query: Query, data: RatingResultData) => {
    return updateRatingResultRepository.updateRatingResult(query, data);
  };
