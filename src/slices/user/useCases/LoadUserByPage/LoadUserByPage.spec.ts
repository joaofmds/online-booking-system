import { LoadUserByPageRepository } from "../../repositories";
import { Query } from "@/application/types";
import { fakeUserPaginated } from "../../entities/UserEntity.spec";
import { LoadUserByPage, loadUserByPage } from "./LoadUserByPage";
import MockDate from "mockdate";

import { mock, MockProxy } from "jest-mock-extended";

describe("LoadUserByPage", () => {
  let fakeQuery: Query;
  let testInstance: LoadUserByPage;
  let loadUserByPageRepository: MockProxy<LoadUserByPageRepository>;

  beforeAll(async () => {
    MockDate.set(new Date());
    loadUserByPageRepository = mock();
    fakeQuery = { fields: { name: "123" }, options: {} };

    loadUserByPageRepository.loadUserByPage.mockResolvedValue(
      fakeUserPaginated
    );
  });

  beforeEach(() => {
    testInstance = loadUserByPage(loadUserByPageRepository);
  });

  afterAll(async () => {
    MockDate.reset();
  });

  it("should call loadUserByPage of LoadUserByPageRepository with correct values", async () => {
    await testInstance(fakeQuery);
    expect(loadUserByPageRepository.loadUserByPage).toHaveBeenCalledWith(
      fakeQuery
    );
    expect(loadUserByPageRepository.loadUserByPage).toHaveBeenCalledTimes(1);
  });

  it("should return a user loaded when loadUserByPageRepository insert it", async () => {
    const user = await testInstance(fakeQuery);
    expect(user).toEqual(fakeUserPaginated);
  });

  it("should return null a user loaded when loadUserByPageRepository insert it", async () => {
    loadUserByPageRepository.loadUserByPage.mockResolvedValue(null);
    const user = await testInstance(fakeQuery);
    expect(user).toBeNull();
  });

  it("should rethrow if loadUserByPage of loadUserByPageRepository throws", async () => {
    loadUserByPageRepository.loadUserByPage.mockRejectedValueOnce(
      new Error("any_error")
    );
    await expect(testInstance(fakeQuery)).rejects.toThrowError("any_error");
  });
});
