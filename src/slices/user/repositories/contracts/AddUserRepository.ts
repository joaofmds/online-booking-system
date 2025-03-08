import { UserData } from "@/slices/User/entities";

export interface addUserRepository {
  addUser(User: UserData): Promise<UserData | null>;
}
