import { DeleteAccountRepository } from "@/slices/account/repositories/contracts";
import { fakeAccountEntity } from "@/slices/account/entities/AccountEntity.spec";
import MockDate from "mockdate";
import { mock, MockProxy } from "jest-mock-extended";
import { DeleteAccount, deleteAccount } from "./DeleteAccount";
import { Query } from "@/application/types";

describe("deleteAccount", () => {
  let fakeQuery: Query;
  let testInstance: DeleteAccount;
  let deleteAccountRepository: MockProxy<DeleteAccountRepository>;

  beforeAll(async () => {
    MockDate.set(new Date());
    deleteAccountRepository = mock();
    fakeQuery = { fields: { name: "123" }, options: {} };
    deleteAccountRepository.deleteAccount.mockResolvedValue(fakeAccountEntity);
  });

  beforeEach(() => {
    testInstance = deleteAccount(deleteAccountRepository);
  });

  afterAll(async () => {
    MockDate.reset();
  });

  it("should call deleteAccount of DeleteAccountRepository with correct values", async () => {
    await testInstance(fakeQuery);
    expect(deleteAccountRepository.deleteAccount).toHaveBeenCalledWith(fakeQuery);
    expect(deleteAccountRepository.deleteAccount).toHaveBeenCalledTimes(1);
  });

  it("should return a new account when deleteAccountRepository delete it", async () => {
    const account = await testInstance(fakeQuery);
    expect(account).toEqual(fakeAccountEntity);
  });

  it("should return null a new account when deleteAccountRepository delete it", async () => {
    deleteAccountRepository.deleteAccount.mockResolvedValue(null);
    const account = await testInstance(fakeQuery);
    expect(account).toBeNull();
  });

  it("should rethrow if deleteAccount of DeleteAccountRepository throws", async () => {
    deleteAccountRepository.deleteAccount.mockRejectedValueOnce(new Error("any_error"));
    await expect(testInstance(fakeQuery)).rejects.toThrowError("any_error");
  });
});
