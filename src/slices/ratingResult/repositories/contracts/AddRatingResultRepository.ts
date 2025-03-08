import { RatingResultData } from "@/slices/ratingResult/entities";

export interface addRatingResultRepository {
  addRatingResult(RatingResult: RatingResultData): Promise<RatingResultData | null>;
}
