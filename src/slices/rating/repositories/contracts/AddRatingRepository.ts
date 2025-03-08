import { RatingData } from "@/slices/rating/entities";

export interface addRatingRepository {
  addRating(Rating: RatingData): Promise<RatingData | null>;
}
