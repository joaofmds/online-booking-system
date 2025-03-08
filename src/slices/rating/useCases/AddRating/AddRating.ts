import { addRatingRepository } from "@/slices/rating/repositories/contracts";
import { RatingEntity, RatingData } from "@/slices/rating/entities";

export type AddRating = (data: RatingData) => Promise<RatingEntity | null>;
export type AddRatingSignature = (AddRating: addRatingRepository) => AddRating;

export const addRating: AddRatingSignature =
  (addRatingRepository: addRatingRepository) => (data: RatingData) => {
    return addRatingRepository.addRating(new RatingEntity(data));
  };
