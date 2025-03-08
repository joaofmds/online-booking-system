import { LoadAppointmentByPageRepository } from "@/slices/appointment/repositories/contracts";
import { Query } from "@/application/types";
import { fakeAppointmentPaginated } from "@/slices/appointment/entities/AppointmentEntity.spec";
import { LoadAppointmentByPage, loadAppointmentByPage } from "./LoadAppointmentByPage";
import MockDate from "mockdate";

import { mock, MockProxy } from "jest-mock-extended";

describe("LoadAppointmentByPage", () => {
  let fakeQuery: Query;
  let testInstance: LoadAppointmentByPage;
  let loadAppointmentByPageRepository: MockProxy<LoadAppointmentByPageRepository>;

  beforeAll(async () => {
    MockDate.set(new Date());
    loadAppointmentByPageRepository = mock();
    fakeQuery = { fields: { name: "123" }, options: {} };

    loadAppointmentByPageRepository.loadAppointmentByPage.mockResolvedValue(
      fakeAppointmentPaginated
    );
  });

  beforeEach(() => {
    testInstance = loadAppointmentByPage(loadAppointmentByPageRepository);
  });

  afterAll(async () => {
    MockDate.reset();
  });

  it("should call loadAppointmentByPage of LoadAppointmentByPageRepository with correct values", async () => {
    await testInstance(fakeQuery);
    expect(loadAppointmentByPageRepository.loadAppointmentByPage).toHaveBeenCalledWith(
      fakeQuery
    );
    expect(loadAppointmentByPageRepository.loadAppointmentByPage).toHaveBeenCalledTimes(1);
  });

  it("should return a appointment loaded when loadAppointmentByPageRepository insert it", async () => {
    const appointment = await testInstance(fakeQuery);
    expect(appointment).toEqual(fakeAppointmentPaginated);
  });

  it("should return null a appointment loaded when loadAppointmentByPageRepository insert it", async () => {
    loadAppointmentByPageRepository.loadAppointmentByPage.mockResolvedValue(null);
    const appointment = await testInstance(fakeQuery);
    expect(appointment).toBeNull();
  });

  it("should rethrow if loadAppointmentByPage of loadAppointmentByPageRepository throws", async () => {
    loadAppointmentByPageRepository.loadAppointmentByPage.mockRejectedValueOnce(
      new Error("any_error")
    );
    await expect(testInstance(fakeQuery)).rejects.toThrowError("any_error");
  });
});
