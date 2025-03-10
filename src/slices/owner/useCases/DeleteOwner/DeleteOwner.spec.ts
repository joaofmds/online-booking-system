import { DeleteOwnerRepository } from "@/slices/owner/repositories/contracts";
import { fakeOwnerEntity } from "@/slices/owner/entities/OwnerEntity.spec";
import MockDate from "mockdate";
import { mock, MockProxy } from "jest-mock-extended";
import { DeleteOwner, deleteOwner } from "./DeleteOwner";
import { Query } from "@/application/types";

describe("deleteOwner", () => {
  let fakeQuery: Query;
  let testInstance: DeleteOwner;
  let deleteOwnerRepository: MockProxy<DeleteOwnerRepository>;

  beforeAll(async () => {
    MockDate.set(new Date());
    deleteOwnerRepository = mock();
    fakeQuery = { fields: { name: "123" }, options: {} };
    deleteOwnerRepository.deleteOwner.mockResolvedValue(fakeOwnerEntity);
  });

  beforeEach(() => {
    testInstance = deleteOwner(deleteOwnerRepository);
  });

  afterAll(async () => {
    MockDate.reset();
  });

  it("should call deleteOwner of DeleteOwnerRepository with correct values", async () => {
    await testInstance(fakeQuery);
    expect(deleteOwnerRepository.deleteOwner).toHaveBeenCalledWith(fakeQuery);
    expect(deleteOwnerRepository.deleteOwner).toHaveBeenCalledTimes(1);
  });

  it("should return a new owner when deleteOwnerRepository delete it", async () => {
    const owner = await testInstance(fakeQuery);
    expect(owner).toEqual(fakeOwnerEntity);
  });

  it("should return null a new owner when deleteOwnerRepository delete it", async () => {
    deleteOwnerRepository.deleteOwner.mockResolvedValue(null);
    const owner = await testInstance(fakeQuery);
    expect(owner).toBeNull();
  });

  it("should rethrow if deleteOwner of DeleteOwnerRepository throws", async () => {
    deleteOwnerRepository.deleteOwner.mockRejectedValueOnce(new Error("any_error"));
    await expect(testInstance(fakeQuery)).rejects.toThrowError("any_error");
  });
});
