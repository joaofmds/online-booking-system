import { addRatingResultRepository } from "@/slices/ratingResult/repositories/contracts";
import { fakeRatingResultEntity } from "@/slices/ratingResult/entities/RatingResultEntity.spec";
import MockDate from "mockdate";
import { mock, MockProxy } from "jest-mock-extended";
import { addRatingResult } from "./AddRatingResult";
import { RatingResultEntity } from "@/slices/ratingResult/entities";

describe("addRatingResult", () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let testInstance: any;
  let addRatingResultRepository: MockProxy<addRatingResultRepository>;

  beforeAll(async () => {
    MockDate.set(new Date());
    addRatingResultRepository = mock();
    addRatingResultRepository.addRatingResult.mockResolvedValue(fakeRatingResultEntity);
  });

  beforeEach(() => {
    testInstance = addRatingResult(addRatingResultRepository);
  });

  afterAll(async () => {
    MockDate.reset();
  });

  it("should call addRatingResult of AddRatingResultRepository with correct values", async () => {
    await testInstance(fakeRatingResultEntity);
    expect(addRatingResultRepository.addRatingResult).toHaveBeenCalledWith(
      new RatingResultEntity(fakeRatingResultEntity)
    );
    expect(addRatingResultRepository.addRatingResult).toHaveBeenCalledTimes(1);
  });

  it("should return a new RatingResult when addRatingResultRepository insert it", async () => {
    const RatingResult = await testInstance(fakeRatingResultEntity);
    expect(RatingResult).toEqual(fakeRatingResultEntity);
  });

  it("should return null a new RatingResult when addRatingResultRepository insert it", async () => {
    addRatingResultRepository.addRatingResult.mockResolvedValue(null);
    const RatingResult = await testInstance(fakeRatingResultEntity);
    expect(RatingResult).toBeNull();
  });

  it("should rethrow if addRatingResult of AddRatingResultRepository throws", async () => {
    addRatingResultRepository.addRatingResult.mockRejectedValueOnce(new Error("any_error"));
    await expect(testInstance(fakeRatingResultEntity)).rejects.toThrowError("any_error");
  });
});
