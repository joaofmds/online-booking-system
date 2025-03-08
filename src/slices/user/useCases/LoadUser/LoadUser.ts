import { LoadUserRepository } from "@/slices/user/repositories/contracts/LoadUserRepository";
import { UserData } from "../../entities";
import { Query } from "@/application/types";

export type LoadUser = (query: Query) => Promise<UserData | null>;
export type LoadUserSignature = (loadUser: LoadUserRepository) => LoadUser;

export const loadUser: LoadUserSignature =
  (loadUserRepository: LoadUserRepository) => (query: Query) => {
    return loadUserRepository.loadUser(query);
  };
