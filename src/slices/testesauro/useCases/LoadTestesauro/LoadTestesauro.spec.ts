import { LoadTestesauroRepository } from "../../repositories";
import { Query } from "@/application/types";
import { fakeTestesauroEntity } from "../../entities/TestesauroEntity.spec";
import { LoadTestesauro, loadTestesauro } from "./LoadTestesauro";
import MockDate from "mockdate";

import { mock, MockProxy } from "jest-mock-extended";

describe("LoadTestesauro", () => {
  let fakeQuery: Query;
  let testInstance: LoadTestesauro;
  let loadTestesauroRepository: MockProxy<LoadTestesauroRepository>;

  beforeAll(async () => {
    MockDate.set(new Date());
    loadTestesauroRepository = mock();
    fakeQuery = { fields: { name: "123" }, options: {} };

    loadTestesauroRepository.loadTestesauro.mockResolvedValue(fakeTestesauroEntity);
  });

  beforeEach(() => {
    testInstance = loadTestesauro(loadTestesauroRepository);
  });

  afterAll(async () => {
    MockDate.reset();
  });

  it("should call loadTestesauro of LoadTestesauroRepository with correct values", async () => {
    await testInstance(fakeQuery);
    expect(loadTestesauroRepository.loadTestesauro).toHaveBeenCalledWith(fakeQuery);
    expect(loadTestesauroRepository.loadTestesauro).toHaveBeenCalledTimes(1);
  });

  it("should return atestesauro loaded when loadTestesauroRepository insert it", async () => {
    consttestesauro = await testInstance(fakeQuery);
    expect(Testesauro).toEqual(fakeTestesauroEntity);
  });

  it("should return null atestesauro loaded when loadTestesauroRepository insert it", async () => {
    loadTestesauroRepository.loadTestesauro.mockResolvedValue(null);
    consttestesauro = await testInstance(fakeQuery);
    expect(Testesauro).toBeNull();
  });

  it("should rethrow if loadTestesauro of loadTestesauroRepository throws", async () => {
    loadTestesauroRepository.loadTestesauro.mockRejectedValueOnce(new Error("any_error"));
    await expect(testInstance(fakeQuery)).rejects.toThrowError("any_error");
  });
});
