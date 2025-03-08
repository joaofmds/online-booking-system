import { AccountData } from "@/slices/account/entities";

export interface addAccountRepository {
  addAccount(Account: AccountData): Promise<AccountData | null>;
}
