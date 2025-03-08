import { LoadRatingResultRepository } from "@/slices/ratingResult/repositories/contracts";
import { Query } from "@/application/types";
import { fakeRatingResultEntity } from "@/slices/ratingResult/entities/RatingResultEntity.spec";
import { LoadRatingResult, loadRatingResult } from "./LoadRatingResult";
import MockDate from "mockdate";

import { mock, MockProxy } from "jest-mock-extended";

describe("LoadRatingResult", () => {
  let fakeQuery: Query;
  let testInstance: LoadRatingResult;
  let loadRatingResultRepository: MockProxy<LoadRatingResultRepository>;

  beforeAll(async () => {
    MockDate.set(new Date());
    loadRatingResultRepository = mock();
    fakeQuery = { fields: { name: "123" }, options: {} };

    loadRatingResultRepository.loadRatingResult.mockResolvedValue(fakeRatingResultEntity);
  });

  beforeEach(() => {
    testInstance = loadRatingResult(loadRatingResultRepository);
  });

  afterAll(async () => {
    MockDate.reset();
  });

  it("should call loadRatingResult of LoadRatingResultRepository with correct values", async () => {
    await testInstance(fakeQuery);
    expect(loadRatingResultRepository.loadRatingResult).toHaveBeenCalledWith(fakeQuery);
    expect(loadRatingResultRepository.loadRatingResult).toHaveBeenCalledTimes(1);
  });

  it("should return aratingResult loaded when loadRatingResultRepository insert it", async () => {
    const ratingResult = await testInstance(fakeQuery);
    expect(ratingResult).toEqual(fakeRatingResultEntity);
  });

  it("should return null aratingResult loaded when loadRatingResultRepository insert it", async () => {
    loadRatingResultRepository.loadRatingResult.mockResolvedValue(null);
    const ratingResult = await testInstance(fakeQuery);
    expect(ratingResult).toBeNull();
  });

  it("should rethrow if loadRatingResult of loadRatingResultRepository throws", async () => {
    loadRatingResultRepository.loadRatingResult.mockRejectedValueOnce(new Error("any_error"));
    await expect(testInstance(fakeQuery)).rejects.toThrowError("any_error");
  });
});
