import { UserData } from "@/slices/user/entities";

export interface addUserRepository {
  addUser(User: UserData): Promise<UserData | null>;
}
