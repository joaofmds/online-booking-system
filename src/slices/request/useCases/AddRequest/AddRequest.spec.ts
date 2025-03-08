import { addRequestRepository } from "@/slices/request/repositories/contracts";
import { fakeRequestEntity } from "@/slices/request/entities/RequestEntity.spec";
import MockDate from "mockdate";
import { mock, MockProxy } from "jest-mock-extended";
import { addRequest } from "./AddRequest";
import { RequestEntity } from "@/slices/request/entities";

describe("addRequest", () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let testInstance: any;
  let addRequestRepository: MockProxy<addRequestRepository>;

  beforeAll(async () => {
    MockDate.set(new Date());
    addRequestRepository = mock();
    addRequestRepository.addRequest.mockResolvedValue(fakeRequestEntity);
  });

  beforeEach(() => {
    testInstance = addRequest(addRequestRepository);
  });

  afterAll(async () => {
    MockDate.reset();
  });

  it("should call addRequest of AddRequestRepository with correct values", async () => {
    await testInstance(fakeRequestEntity);
    expect(addRequestRepository.addRequest).toHaveBeenCalledWith(
      new RequestEntity(fakeRequestEntity)
    );
    expect(addRequestRepository.addRequest).toHaveBeenCalledTimes(1);
  });

  it("should return a new Request when addRequestRepository insert it", async () => {
    const Request = await testInstance(fakeRequestEntity);
    expect(Request).toEqual(fakeRequestEntity);
  });

  it("should return null a new Request when addRequestRepository insert it", async () => {
    addRequestRepository.addRequest.mockResolvedValue(null);
    const Request = await testInstance(fakeRequestEntity);
    expect(Request).toBeNull();
  });

  it("should rethrow if addRequest of AddRequestRepository throws", async () => {
    addRequestRepository.addRequest.mockRejectedValueOnce(new Error("any_error"));
    await expect(testInstance(fakeRequestEntity)).rejects.toThrowError("any_error");
  });
});
