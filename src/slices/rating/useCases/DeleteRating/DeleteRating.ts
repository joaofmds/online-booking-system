import { DeleteRatingRepository } from "@/slices/rating/repositories/contracts";
import { RatingData } from "@/slices/rating/entities";
import { Query } from "@/application/types";

export type DeleteRating = (query: Query) => Promise<RatingData | null>;
export type DeleteRatingSignature = (
  deleteRating: DeleteRatingRepository
) => DeleteRating;

export const deleteRating: DeleteRatingSignature =
  (deleteRatingRepository: DeleteRatingRepository) => (query: Query) => {
    return deleteRatingRepository.deleteRating(query);
  };
