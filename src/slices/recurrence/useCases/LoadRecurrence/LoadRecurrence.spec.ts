import { LoadRecurrenceRepository } from "@/slices/recurrence/repositories/contracts";
import { Query } from "@/application/types";
import { fakeRecurrenceEntity } from "@/slices/recurrence/entities/RecurrenceEntity.spec";
import { LoadRecurrence, loadRecurrence } from "./LoadRecurrence";
import MockDate from "mockdate";

import { mock, MockProxy } from "jest-mock-extended";

describe("LoadRecurrence", () => {
  let fakeQuery: Query;
  let testInstance: LoadRecurrence;
  let loadRecurrenceRepository: MockProxy<LoadRecurrenceRepository>;

  beforeAll(async () => {
    MockDate.set(new Date());
    loadRecurrenceRepository = mock();
    fakeQuery = { fields: { name: "123" }, options: {} };

    loadRecurrenceRepository.loadRecurrence.mockResolvedValue(fakeRecurrenceEntity);
  });

  beforeEach(() => {
    testInstance = loadRecurrence(loadRecurrenceRepository);
  });

  afterAll(async () => {
    MockDate.reset();
  });

  it("should call loadRecurrence of LoadRecurrenceRepository with correct values", async () => {
    await testInstance(fakeQuery);
    expect(loadRecurrenceRepository.loadRecurrence).toHaveBeenCalledWith(fakeQuery);
    expect(loadRecurrenceRepository.loadRecurrence).toHaveBeenCalledTimes(1);
  });

  it("should return arecurrence loaded when loadRecurrenceRepository insert it", async () => {
    const recurrence = await testInstance(fakeQuery);
    expect(recurrence).toEqual(fakeRecurrenceEntity);
  });

  it("should return null arecurrence loaded when loadRecurrenceRepository insert it", async () => {
    loadRecurrenceRepository.loadRecurrence.mockResolvedValue(null);
    const recurrence = await testInstance(fakeQuery);
    expect(recurrence).toBeNull();
  });

  it("should rethrow if loadRecurrence of loadRecurrenceRepository throws", async () => {
    loadRecurrenceRepository.loadRecurrence.mockRejectedValueOnce(new Error("any_error"));
    await expect(testInstance(fakeQuery)).rejects.toThrowError("any_error");
  });
});
