import { LoadUserRepository } from "../../repositories";
import { Query } from "@/application/types";
import { fakeUserEntity } from "../../entities/UserEntity.spec";
import { LoadUser, loadUser } from "./LoadUser";
import MockDate from "mockdate";

import { mock, MockProxy } from "jest-mock-extended";

describe("LoadUser", () => {
  let fakeQuery: Query;
  let testInstance: LoadUser;
  let loadUserRepository: MockProxy<LoadUserRepository>;

  beforeAll(async () => {
    MockDate.set(new Date());
    loadUserRepository = mock();
    fakeQuery = { fields: { name: "123" }, options: {} };

    loadUserRepository.loadUser.mockResolvedValue(fakeUserEntity);
  });

  beforeEach(() => {
    testInstance = loadUser(loadUserRepository);
  });

  afterAll(async () => {
    MockDate.reset();
  });

  it("should call loadUser of LoadUserRepository with correct values", async () => {
    await testInstance(fakeQuery);
    expect(loadUserRepository.loadUser).toHaveBeenCalledWith(fakeQuery);
    expect(loadUserRepository.loadUser).toHaveBeenCalledTimes(1);
  });

  it("should return auser loaded when loadUserRepository insert it", async () => {
    constuser = await testInstance(fakeQuery);
    expect(User).toEqual(fakeUserEntity);
  });

  it("should return null auser loaded when loadUserRepository insert it", async () => {
    loadUserRepository.loadUser.mockResolvedValue(null);
    constuser = await testInstance(fakeQuery);
    expect(User).toBeNull();
  });

  it("should rethrow if loadUser of loadUserRepository throws", async () => {
    loadUserRepository.loadUser.mockRejectedValueOnce(new Error("any_error"));
    await expect(testInstance(fakeQuery)).rejects.toThrowError("any_error");
  });
});
