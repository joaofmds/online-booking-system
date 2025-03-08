import { addRatingRepository } from "@/slices/rating/repositories/contracts";
import { fakeRatingEntity } from "@/slices/rating/entities/RatingEntity.spec";
import MockDate from "mockdate";
import { mock, MockProxy } from "jest-mock-extended";
import { addRating } from "./AddRating";
import { RatingEntity } from "@/slices/rating/entities";

describe("addRating", () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let testInstance: any;
  let addRatingRepository: MockProxy<addRatingRepository>;

  beforeAll(async () => {
    MockDate.set(new Date());
    addRatingRepository = mock();
    addRatingRepository.addRating.mockResolvedValue(fakeRatingEntity);
  });

  beforeEach(() => {
    testInstance = addRating(addRatingRepository);
  });

  afterAll(async () => {
    MockDate.reset();
  });

  it("should call addRating of AddRatingRepository with correct values", async () => {
    await testInstance(fakeRatingEntity);
    expect(addRatingRepository.addRating).toHaveBeenCalledWith(
      new RatingEntity(fakeRatingEntity)
    );
    expect(addRatingRepository.addRating).toHaveBeenCalledTimes(1);
  });

  it("should return a new Rating when addRatingRepository insert it", async () => {
    const Rating = await testInstance(fakeRatingEntity);
    expect(Rating).toEqual(fakeRatingEntity);
  });

  it("should return null a new Rating when addRatingRepository insert it", async () => {
    addRatingRepository.addRating.mockResolvedValue(null);
    const Rating = await testInstance(fakeRatingEntity);
    expect(Rating).toBeNull();
  });

  it("should rethrow if addRating of AddRatingRepository throws", async () => {
    addRatingRepository.addRating.mockRejectedValueOnce(new Error("any_error"));
    await expect(testInstance(fakeRatingEntity)).rejects.toThrowError("any_error");
  });
});
