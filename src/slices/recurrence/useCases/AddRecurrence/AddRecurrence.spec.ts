import { addRecurrenceRepository } from "@/slices/recurrence/repositories/contracts";
import { fakeRecurrenceEntity } from "@/slices/recurrence/entities/RecurrenceEntity.spec";
import MockDate from "mockdate";
import { mock, MockProxy } from "jest-mock-extended";
import { addRecurrence } from "./AddRecurrence";
import { RecurrenceEntity } from "@/slices/recurrence/entities";

describe("addRecurrence", () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let testInstance: any;
  let addRecurrenceRepository: MockProxy<addRecurrenceRepository>;

  beforeAll(async () => {
    MockDate.set(new Date());
    addRecurrenceRepository = mock();
    addRecurrenceRepository.addRecurrence.mockResolvedValue(fakeRecurrenceEntity);
  });

  beforeEach(() => {
    testInstance = addRecurrence(addRecurrenceRepository);
  });

  afterAll(async () => {
    MockDate.reset();
  });

  it("should call addRecurrence of AddRecurrenceRepository with correct values", async () => {
    await testInstance(fakeRecurrenceEntity);
    expect(addRecurrenceRepository.addRecurrence).toHaveBeenCalledWith(
      new RecurrenceEntity(fakeRecurrenceEntity)
    );
    expect(addRecurrenceRepository.addRecurrence).toHaveBeenCalledTimes(1);
  });

  it("should return a new Recurrence when addRecurrenceRepository insert it", async () => {
    const Recurrence = await testInstance(fakeRecurrenceEntity);
    expect(Recurrence).toEqual(fakeRecurrenceEntity);
  });

  it("should return null a new Recurrence when addRecurrenceRepository insert it", async () => {
    addRecurrenceRepository.addRecurrence.mockResolvedValue(null);
    const Recurrence = await testInstance(fakeRecurrenceEntity);
    expect(Recurrence).toBeNull();
  });

  it("should rethrow if addRecurrence of AddRecurrenceRepository throws", async () => {
    addRecurrenceRepository.addRecurrence.mockRejectedValueOnce(new Error("any_error"));
    await expect(testInstance(fakeRecurrenceEntity)).rejects.toThrowError("any_error");
  });
});
