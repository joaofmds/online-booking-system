import { addUserRepository } from "@/slices/User/repositories/contracts/addUserRepository";
import { UserEntity, UserData } from "../../entities";

export type AddUser = (data: UserData) => Promise<UserEntity | null>;
export type AddUserSignature = (AddUser: addUserRepository) => AddUser;

export const addUser: AddUserSignature =
  (addUserRepository: addUserRepository) => (data: UserData) => {
    return addUserRepository.addUser(new UserEntity(data));
  };
