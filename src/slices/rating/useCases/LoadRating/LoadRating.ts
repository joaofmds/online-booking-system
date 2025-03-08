import { LoadRatingRepository } from "@/slices/rating/repositories/contracts";
import { RatingData } from "@/slices/rating/entities";
import { Query } from "@/application/types";

export type LoadRating = (query: Query) => Promise<RatingData | null>;
export type LoadRatingSignature = (loadRating: LoadRatingRepository) => LoadRating;

export const loadRating: LoadRatingSignature =
  (loadRatingRepository: LoadRatingRepository) => (query: Query) => {
    return loadRatingRepository.loadRating(query);
  };
