import { LoadAccountRepository } from "@/slices/account/repositories/contracts";
import { Query } from "@/application/types";
import { fakeAccountEntity } from "@/slices/account/entities/AccountEntity.spec";
import { LoadAccount, loadAccount } from "./LoadAccount";
import MockDate from "mockdate";

import { mock, MockProxy } from "jest-mock-extended";

describe("LoadAccount", () => {
  let fakeQuery: Query;
  let testInstance: LoadAccount;
  let loadAccountRepository: MockProxy<LoadAccountRepository>;

  beforeAll(async () => {
    MockDate.set(new Date());
    loadAccountRepository = mock();
    fakeQuery = { fields: { name: "123" }, options: {} };

    loadAccountRepository.loadAccount.mockResolvedValue(fakeAccountEntity);
  });

  beforeEach(() => {
    testInstance = loadAccount(loadAccountRepository);
  });

  afterAll(async () => {
    MockDate.reset();
  });

  it("should call loadAccount of LoadAccountRepository with correct values", async () => {
    await testInstance(fakeQuery);
    expect(loadAccountRepository.loadAccount).toHaveBeenCalledWith(fakeQuery);
    expect(loadAccountRepository.loadAccount).toHaveBeenCalledTimes(1);
  });

  it("should return aaccount loaded when loadAccountRepository insert it", async () => {
    const account = await testInstance(fakeQuery);
    expect(account).toEqual(fakeAccountEntity);
  });

  it("should return null aaccount loaded when loadAccountRepository insert it", async () => {
    loadAccountRepository.loadAccount.mockResolvedValue(null);
    const account = await testInstance(fakeQuery);
    expect(account).toBeNull();
  });

  it("should rethrow if loadAccount of loadAccountRepository throws", async () => {
    loadAccountRepository.loadAccount.mockRejectedValueOnce(new Error("any_error"));
    await expect(testInstance(fakeQuery)).rejects.toThrowError("any_error");
  });
});
