import { UpdateRatingRepository } from "@/slices/rating/repositories/contracts";
import { Query } from "@/application/types";
import { fakeRatingEntity } from "@/slices/rating/entities/RatingEntity.spec";
import { UpdateRating, updateRating } from "./UpdateRating";
import MockDate from "mockdate";

import { mock, MockProxy } from "jest-mock-extended";

describe("UpdateRating", () => {
  let fakeQuery: Query;
  let testInstance: UpdateRating;
  let updateRatingRepository: MockProxy<UpdateRatingRepository>;

  beforeAll(async () => {
    MockDate.set(new Date());
    updateRatingRepository = mock();
    fakeQuery = { fields: { name: "123" }, options: {} };

    updateRatingRepository.updateRating.mockResolvedValue(fakeRatingEntity);
  });

  beforeEach(() => {
    testInstance = updateRating(updateRatingRepository);
  });

  afterAll(async () => {
    MockDate.reset();
  });

  it("should call updateRating of UpdateRatingRepository with correct values", async () => {
    await testInstance(fakeQuery, fakeRatingEntity);
    expect(updateRatingRepository.updateRating).toHaveBeenCalledWith(
      fakeQuery,
      fakeRatingEntity
    );
    expect(updateRatingRepository.updateRating).toHaveBeenCalledTimes(1);
  });

  it("should return a rating updateed when updateRatingRepository insert it", async () => {
    const rating = await testInstance(fakeQuery, fakeRatingEntity);
    expect(rating).toEqual(fakeRatingEntity);
  });

  it("should return null a rating updateed when updateRatingRepository insert it", async () => {
    updateRatingRepository.updateRating.mockResolvedValue(null);
    const rating = await testInstance(fakeQuery, fakeRatingEntity);
    expect(rating).toBeNull();
  });

  it("should rethrow if updateRating of updateRatingRepository throws", async () => {
    updateRatingRepository.updateRating.mockRejectedValueOnce(new Error("any_error"));
    await expect(testInstance(fakeQuery, fakeRatingEntity)).rejects.toThrowError(
      "any_error"
    );
  });
});
