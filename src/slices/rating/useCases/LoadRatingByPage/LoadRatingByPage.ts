import { LoadRatingByPageRepository } from "@/slices/rating/repositories/contracts";
import { RatingPaginated } from "@/slices/rating/entities";
import { Query } from "@/application/types";

export type LoadRatingByPage = (query: Query) => Promise<RatingPaginated | null>;
export type LoadRatingByPageSignature = (
  loadRatingByPage: LoadRatingByPageRepository
) => LoadRatingByPage;

export const loadRatingByPage: LoadRatingByPageSignature =
  (loadRatingByPageRepository: LoadRatingByPageRepository) => (query: Query) => {
    return loadRatingByPageRepository.loadRatingByPage(query);
  };
