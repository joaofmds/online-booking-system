import { DeleteUserRepository } from "@/slices/user/repositories/contracts/DeleteUserRepository";
import { fakeUserEntity } from "@/slices/user/entities/UserEntity.spec";
import MockDate from "mockdate";
import { mock, MockProxy } from "jest-mock-extended";
import { DeleteUser, deleteUser } from "./DeleteUser";
import { Query } from "@/application/types";

describe("deleteUser", () => {
  let fakeQuery: Query;
  let testInstance: DeleteUser;
  let deleteUserRepository: MockProxy<DeleteUserRepository>;

  beforeAll(async () => {
    MockDate.set(new Date());
    deleteUserRepository = mock();
    fakeQuery = { fields: { name: "123" }, options: {} };
    deleteUserRepository.deleteUser.mockResolvedValue(fakeUserEntity);
  });

  beforeEach(() => {
    testInstance = deleteUser(deleteUserRepository);
  });

  afterAll(async () => {
    MockDate.reset();
  });

  it("should call deleteUser of DeleteUserRepository with correct values", async () => {
    await testInstance(fakeQuery);
    expect(deleteUserRepository.deleteUser).toHaveBeenCalledWith(fakeQuery);
    expect(deleteUserRepository.deleteUser).toHaveBeenCalledTimes(1);
  });

  it("should return a new user when deleteUserRepository delete it", async () => {
    const user = await testInstance(fakeQuery);
    expect(user).toEqual(fakeUserEntity);
  });

  it("should return null a new user when deleteUserRepository delete it", async () => {
    deleteUserRepository.deleteUser.mockResolvedValue(null);
    const user = await testInstance(fakeQuery);
    expect(user).toBeNull();
  });

  it("should rethrow if deleteUser of DeleteUserRepository throws", async () => {
    deleteUserRepository.deleteUser.mockRejectedValueOnce(new Error("any_error"));
    await expect(testInstance(fakeQuery)).rejects.toThrowError("any_error");
  });
});
