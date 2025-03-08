import { DeleteRatingResultRepository } from "@/slices/ratingResult/repositories/contracts";
import { fakeRatingResultEntity } from "@/slices/ratingResult/entities/RatingResultEntity.spec";
import MockDate from "mockdate";
import { mock, MockProxy } from "jest-mock-extended";
import { DeleteRatingResult, deleteRatingResult } from "./DeleteRatingResult";
import { Query } from "@/application/types";

describe("deleteRatingResult", () => {
  let fakeQuery: Query;
  let testInstance: DeleteRatingResult;
  let deleteRatingResultRepository: MockProxy<DeleteRatingResultRepository>;

  beforeAll(async () => {
    MockDate.set(new Date());
    deleteRatingResultRepository = mock();
    fakeQuery = { fields: { name: "123" }, options: {} };
    deleteRatingResultRepository.deleteRatingResult.mockResolvedValue(fakeRatingResultEntity);
  });

  beforeEach(() => {
    testInstance = deleteRatingResult(deleteRatingResultRepository);
  });

  afterAll(async () => {
    MockDate.reset();
  });

  it("should call deleteRatingResult of DeleteRatingResultRepository with correct values", async () => {
    await testInstance(fakeQuery);
    expect(deleteRatingResultRepository.deleteRatingResult).toHaveBeenCalledWith(fakeQuery);
    expect(deleteRatingResultRepository.deleteRatingResult).toHaveBeenCalledTimes(1);
  });

  it("should return a new ratingResult when deleteRatingResultRepository delete it", async () => {
    const ratingResult = await testInstance(fakeQuery);
    expect(ratingResult).toEqual(fakeRatingResultEntity);
  });

  it("should return null a new ratingResult when deleteRatingResultRepository delete it", async () => {
    deleteRatingResultRepository.deleteRatingResult.mockResolvedValue(null);
    const ratingResult = await testInstance(fakeQuery);
    expect(ratingResult).toBeNull();
  });

  it("should rethrow if deleteRatingResult of DeleteRatingResultRepository throws", async () => {
    deleteRatingResultRepository.deleteRatingResult.mockRejectedValueOnce(new Error("any_error"));
    await expect(testInstance(fakeQuery)).rejects.toThrowError("any_error");
  });
});
