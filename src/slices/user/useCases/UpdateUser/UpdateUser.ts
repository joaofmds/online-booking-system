import { UpdateUserRepository } from "@/slices/user/repositories/contracts/UpdateUserRepository";
import { UserData } from "@/slices/user/entities";
import { Query } from "@/application/types";

export type UpdateUser = (query: Query, data: UserData) => Promise<UserData | null>;
export type UpdateUserSignature = (updateUser: UpdateUserRepository) => UpdateUser;

export const updateUser: UpdateUserSignature =
  (updateUserRepository: UpdateUserRepository) => (query: Query, data: UserData) => {
    return updateUserRepository.updateUser(query, data);
  };
