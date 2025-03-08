import { addAccountRepository } from "@/slices/account/repositories/contracts";
import { fakeAccountEntity } from "@/slices/account/entities/AccountEntity.spec";
import MockDate from "mockdate";
import { mock, MockProxy } from "jest-mock-extended";
import { addAccount } from "./AddAccount";
import { AccountEntity } from "@/slices/account/entities";

describe("addAccount", () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let testInstance: any;
  let addAccountRepository: MockProxy<addAccountRepository>;

  beforeAll(async () => {
    MockDate.set(new Date());
    addAccountRepository = mock();
    addAccountRepository.addAccount.mockResolvedValue(fakeAccountEntity);
  });

  beforeEach(() => {
    testInstance = addAccount(addAccountRepository);
  });

  afterAll(async () => {
    MockDate.reset();
  });

  it("should call addAccount of AddAccountRepository with correct values", async () => {
    await testInstance(fakeAccountEntity);
    expect(addAccountRepository.addAccount).toHaveBeenCalledWith(
      new AccountEntity(fakeAccountEntity)
    );
    expect(addAccountRepository.addAccount).toHaveBeenCalledTimes(1);
  });

  it("should return a new Account when addAccountRepository insert it", async () => {
    const Account = await testInstance(fakeAccountEntity);
    expect(Account).toEqual(fakeAccountEntity);
  });

  it("should return null a new Account when addAccountRepository insert it", async () => {
    addAccountRepository.addAccount.mockResolvedValue(null);
    const Account = await testInstance(fakeAccountEntity);
    expect(Account).toBeNull();
  });

  it("should rethrow if addAccount of AddAccountRepository throws", async () => {
    addAccountRepository.addAccount.mockRejectedValueOnce(new Error("any_error"));
    await expect(testInstance(fakeAccountEntity)).rejects.toThrowError("any_error");
  });
});
