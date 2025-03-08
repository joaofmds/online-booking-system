import { addFidelityRepository } from "@/slices/fidelity/repositories/contracts";
import { fakeFidelityEntity } from "@/slices/fidelity/entities/FidelityEntity.spec";
import MockDate from "mockdate";
import { mock, MockProxy } from "jest-mock-extended";
import { addFidelity } from "./AddFidelity";
import { FidelityEntity } from "@/slices/fidelity/entities";

describe("addFidelity", () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let testInstance: any;
  let addFidelityRepository: MockProxy<addFidelityRepository>;

  beforeAll(async () => {
    MockDate.set(new Date());
    addFidelityRepository = mock();
    addFidelityRepository.addFidelity.mockResolvedValue(fakeFidelityEntity);
  });

  beforeEach(() => {
    testInstance = addFidelity(addFidelityRepository);
  });

  afterAll(async () => {
    MockDate.reset();
  });

  it("should call addFidelity of AddFidelityRepository with correct values", async () => {
    await testInstance(fakeFidelityEntity);
    expect(addFidelityRepository.addFidelity).toHaveBeenCalledWith(
      new FidelityEntity(fakeFidelityEntity)
    );
    expect(addFidelityRepository.addFidelity).toHaveBeenCalledTimes(1);
  });

  it("should return a new Fidelity when addFidelityRepository insert it", async () => {
    const Fidelity = await testInstance(fakeFidelityEntity);
    expect(Fidelity).toEqual(fakeFidelityEntity);
  });

  it("should return null a new Fidelity when addFidelityRepository insert it", async () => {
    addFidelityRepository.addFidelity.mockResolvedValue(null);
    const Fidelity = await testInstance(fakeFidelityEntity);
    expect(Fidelity).toBeNull();
  });

  it("should rethrow if addFidelity of AddFidelityRepository throws", async () => {
    addFidelityRepository.addFidelity.mockRejectedValueOnce(new Error("any_error"));
    await expect(testInstance(fakeFidelityEntity)).rejects.toThrowError("any_error");
  });
});
