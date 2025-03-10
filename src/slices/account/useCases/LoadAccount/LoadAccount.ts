import { LoadAccountRepository } from "@/slices/account/repositories/contracts";
import { AccountData } from "@/slices/account/entities";
import { Query } from "@/application/types";

export type LoadAccount = (query: Query) => Promise<AccountData | null>;
export type LoadAccountSignature = (loadAccount: LoadAccountRepository) => LoadAccount;

export const loadAccount: LoadAccountSignature =
  (loadAccountRepository: LoadAccountRepository) => (query: Query) => {
    return loadAccountRepository.loadAccount(query);
  };
