import { addRatingResultRepository } from "@/slices/ratingResult/repositories/contracts";
import { RatingResultEntity, RatingResultData } from "@/slices/ratingResult/entities";

export type AddRatingResult = (data: RatingResultData) => Promise<RatingResultEntity | null>;
export type AddRatingResultSignature = (AddRatingResult: addRatingResultRepository) => AddRatingResult;

export const addRatingResult: AddRatingResultSignature =
  (addRatingResultRepository: addRatingResultRepository) => (data: RatingResultData) => {
    return addRatingResultRepository.addRatingResult(new RatingResultEntity(data));
  };
