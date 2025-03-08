import { addUserRepository } from "@/slices/user/repositories/contracts";
import { UserEntity, UserData } from "@/slices/user/entities";

export type AddUser = (data: UserData) => Promise<UserEntity | null>;
export type AddUserSignature = (AddUser: addUserRepository) => AddUser;

export const addUser: AddUserSignature =
  (addUserRepository: addUserRepository) => (data: UserData) => {
    return addUserRepository.addUser(new UserEntity(data));
  };
