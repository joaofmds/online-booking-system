import { addAccountRepository } from "@/slices/account/repositories/contracts";
import { AccountEntity, AccountData } from "@/slices/account/entities";

export type AddAccount = (data: AccountData) => Promise<AccountEntity | null>;
export type AddAccountSignature = (AddAccount: addAccountRepository) => AddAccount;

export const addAccount: AddAccountSignature =
  (addAccountRepository: addAccountRepository) => (data: AccountData) => {
    return addAccountRepository.addAccount(new AccountEntity(data));
  };
