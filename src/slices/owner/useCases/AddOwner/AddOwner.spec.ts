import { addOwnerRepository } from "@/slices/owner/repositories/contracts";
import { fakeOwnerEntity } from "@/slices/owner/entities/OwnerEntity.spec";
import MockDate from "mockdate";
import { mock, MockProxy } from "jest-mock-extended";
import { addOwner } from "./AddOwner";
import { OwnerEntity } from "@/slices/owner/entities";

describe("addOwner", () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let testInstance: any;
  let addOwnerRepository: MockProxy<addOwnerRepository>;

  beforeAll(async () => {
    MockDate.set(new Date());
    addOwnerRepository = mock();
    addOwnerRepository.addOwner.mockResolvedValue(fakeOwnerEntity);
  });

  beforeEach(() => {
    testInstance = addOwner(addOwnerRepository);
  });

  afterAll(async () => {
    MockDate.reset();
  });

  it("should call addOwner of AddOwnerRepository with correct values", async () => {
    await testInstance(fakeOwnerEntity);
    expect(addOwnerRepository.addOwner).toHaveBeenCalledWith(
      new OwnerEntity(fakeOwnerEntity)
    );
    expect(addOwnerRepository.addOwner).toHaveBeenCalledTimes(1);
  });

  it("should return a new Owner when addOwnerRepository insert it", async () => {
    const Owner = await testInstance(fakeOwnerEntity);
    expect(Owner).toEqual(fakeOwnerEntity);
  });

  it("should return null a new Owner when addOwnerRepository insert it", async () => {
    addOwnerRepository.addOwner.mockResolvedValue(null);
    const Owner = await testInstance(fakeOwnerEntity);
    expect(Owner).toBeNull();
  });

  it("should rethrow if addOwner of AddOwnerRepository throws", async () => {
    addOwnerRepository.addOwner.mockRejectedValueOnce(new Error("any_error"));
    await expect(testInstance(fakeOwnerEntity)).rejects.toThrowError("any_error");
  });
});
