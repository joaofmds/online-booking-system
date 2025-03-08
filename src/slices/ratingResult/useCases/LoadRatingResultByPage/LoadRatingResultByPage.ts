import { LoadRatingResultByPageRepository } from "@/slices/ratingResult/repositories/contracts";
import { RatingResultPaginated } from "@/slices/ratingResult/entities";
import { Query } from "@/application/types";

export type LoadRatingResultByPage = (query: Query) => Promise<RatingResultPaginated | null>;
export type LoadRatingResultByPageSignature = (
  loadRatingResultByPage: LoadRatingResultByPageRepository
) => LoadRatingResultByPage;

export const loadRatingResultByPage: LoadRatingResultByPageSignature =
  (loadRatingResultByPageRepository: LoadRatingResultByPageRepository) => (query: Query) => {
    return loadRatingResultByPageRepository.loadRatingResultByPage(query);
  };
