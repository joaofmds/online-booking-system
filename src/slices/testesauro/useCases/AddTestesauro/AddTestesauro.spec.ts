import { addTestesauroRepository } from "@/slices/Testesauro/repositories/contracts/addTestesauroRepository";
import { fakeTestesauroEntity } from "@/slices/Testesauro/entities/TestesauroEntity.spec";
import MockDate from "mockdate";
import { mock, MockProxy } from "jest-mock-extended";
import { addTestesauro } from "./AddTestesauro";
import { TestesauroEntity } from "@/slices/Testesauro/entities";

describe("addTestesauro", () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let testInstance: any;
  let addTestesauroRepository: MockProxy<addTestesauroRepository>;

  beforeAll(async () => {
    MockDate.set(new Date());
    addTestesauroRepository = mock();
    addTestesauroRepository.addTestesauro.mockResolvedValue(fakeTestesauroEntity);
  });

  beforeEach(() => {
    testInstance = addTestesauro(addTestesauroRepository);
  });

  afterAll(async () => {
    MockDate.reset();
  });

  it("should call addTestesauro of AddTestesauroRepository with correct values", async () => {
    await testInstance(fakeTestesauroEntity);
    expect(addTestesauroRepository.addTestesauro).toHaveBeenCalledWith(
      new TestesauroEntity(fakeTestesauroEntity)
    );
    expect(addTestesauroRepository.addTestesauro).toHaveBeenCalledTimes(1);
  });

  it("should return a new Testesauro when addTestesauroRepository insert it", async () => {
    const Testesauro = await testInstance(fakeTestesauroEntity);
    expect(Testesauro).toEqual(fakeTestesauroEntity);
  });

  it("should return null a new Testesauro when addTestesauroRepository insert it", async () => {
    addTestesauroRepository.addTestesauro.mockResolvedValue(null);
    const Testesauro = await testInstance(fakeTestesauroEntity);
    expect(Testesauro).toBeNull();
  });

  it("should rethrow if addTestesauro of AddTestesauroRepository throws", async () => {
    addTestesauroRepository.addTestesauro.mockRejectedValueOnce(new Error("any_error"));
    await expect(testInstance(fakeTestesauroEntity)).rejects.toThrowError("any_error");
  });
});
