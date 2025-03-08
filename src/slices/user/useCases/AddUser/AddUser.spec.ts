import { addUserRepository } from "@/slices/User/repositories/contracts/addUserRepository";
import { fakeUserEntity } from "@/slices/User/entities/UserEntity.spec";
import MockDate from "mockdate";
import { mock, MockProxy } from "jest-mock-extended";
import { addUser } from "./AddUser";
import { UserEntity } from "@/slices/User/entities";

describe("addUser", () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let testInstance: any;
  let addUserRepository: MockProxy<addUserRepository>;

  beforeAll(async () => {
    MockDate.set(new Date());
    addUserRepository = mock();
    addUserRepository.addUser.mockResolvedValue(fakeUserEntity);
  });

  beforeEach(() => {
    testInstance = addUser(addUserRepository);
  });

  afterAll(async () => {
    MockDate.reset();
  });

  it("should call addUser of AddUserRepository with correct values", async () => {
    await testInstance(fakeUserEntity);
    expect(addUserRepository.addUser).toHaveBeenCalledWith(
      new UserEntity(fakeUserEntity)
    );
    expect(addUserRepository.addUser).toHaveBeenCalledTimes(1);
  });

  it("should return a new User when addUserRepository insert it", async () => {
    const User = await testInstance(fakeUserEntity);
    expect(User).toEqual(fakeUserEntity);
  });

  it("should return null a new User when addUserRepository insert it", async () => {
    addUserRepository.addUser.mockResolvedValue(null);
    const User = await testInstance(fakeUserEntity);
    expect(User).toBeNull();
  });

  it("should rethrow if addUser of AddUserRepository throws", async () => {
    addUserRepository.addUser.mockRejectedValueOnce(new Error("any_error"));
    await expect(testInstance(fakeUserEntity)).rejects.toThrowError("any_error");
  });
});
