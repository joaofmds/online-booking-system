import { LoadUserByPageRepository } from "@/slices/user/repositories/contracts/LoadUserByPageRepository";
import { UserPaginated } from "../../entities";
import { Query } from "@/application/types";

export type LoadUserByPage = (query: Query) => Promise<UserPaginated | null>;
export type LoadUserByPageSignature = (
  loadUserByPage: LoadUserByPageRepository
) => LoadUserByPage;

export const loadUserByPage: LoadUserByPageSignature =
  (loadUserByPageRepository: LoadUserByPageRepository) => (query: Query) => {
    return loadUserByPageRepository.loadUserByPage(query);
  };
