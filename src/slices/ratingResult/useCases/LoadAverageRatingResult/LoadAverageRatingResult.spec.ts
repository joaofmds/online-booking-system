import { LoadAverageRatingResultRepository } from "@/slices/ratingResult/repositories/contracts";
import { Query } from "@/application/types";
import { fakeRatingResultAverage } from "@/slices/ratingResult/entities/RatingResultEntity.spec";
import {
  LoadAverageRatingResult,
  loadAverageRatingResult,
} from "./LoadAverageRatingResult";
import MockDate from "mockdate";

import { mock, MockProxy } from "jest-mock-extended";

describe("LoadAverageRatingResult", () => {
  let fakeQuery: Query;
  let testInstance: LoadAverageRatingResult;
  let loadAverageRatingResultRepository: MockProxy<LoadAverageRatingResultRepository>;

  beforeAll(async () => {
    MockDate.set(new Date());
    loadAverageRatingResultRepository = mock();
    fakeQuery = { fields: { name: "123" }, options: {} };

    loadAverageRatingResultRepository.loadAverageRatingResult.mockResolvedValue(
      fakeRatingResultAverage
    );
  });

  beforeEach(() => {
    testInstance = loadAverageRatingResult(loadAverageRatingResultRepository);
  });

  afterAll(async () => {
    MockDate.reset();
  });

  it("should call loadAverageRatingResult of LoadAverageRatingResultRepository with correct values", async () => {
    await testInstance(fakeQuery);
    expect(loadAverageRatingResultRepository.loadAverageRatingResult).toHaveBeenCalledWith(
      fakeQuery
    );
    expect(
      loadAverageRatingResultRepository.loadAverageRatingResult
    ).toHaveBeenCalledTimes(1);
  });

  it("should return aratingResult loadAverageed when loadAverageRatingResultRepository insert it", async () => {
    const ratingResult = await testInstance(fakeQuery);
    expect(ratingResult).toEqual(fakeRatingResultAverage);
  });

  it("should return null aratingResult loadAverageed when loadAverageRatingResultRepository insert it", async () => {
    loadAverageRatingResultRepository.loadAverageRatingResult.mockResolvedValue(null);
    const ratingResult = await testInstance(fakeQuery);
    expect(ratingResult).toBeNull();
  });

  it("should rethrow if loadAverageRatingResult of loadAverageRatingResultRepository throws", async () => {
    loadAverageRatingResultRepository.loadAverageRatingResult.mockRejectedValueOnce(
      new Error("any_error")
    );
    await expect(testInstance(fakeQuery)).rejects.toThrowError("any_error");
  });
});
