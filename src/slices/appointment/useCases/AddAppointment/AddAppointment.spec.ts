import { addAppointmentRepository } from "@/slices/appointment/repositories/contracts";
import { fakeAppointmentEntity } from "@/slices/appointment/entities/AppointmentEntity.spec";
import MockDate from "mockdate";
import { mock, MockProxy } from "jest-mock-extended";
import { addAppointment } from "./AddAppointment";
import { AppointmentEntity } from "@/slices/appointment/entities";

describe("addAppointment", () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let testInstance: any;
  let addAppointmentRepository: MockProxy<addAppointmentRepository>;

  beforeAll(async () => {
    MockDate.set(new Date());
    addAppointmentRepository = mock();
    addAppointmentRepository.addAppointment.mockResolvedValue(fakeAppointmentEntity);
  });

  beforeEach(() => {
    testInstance = addAppointment(addAppointmentRepository);
  });

  afterAll(async () => {
    MockDate.reset();
  });

  it("should call addAppointment of AddAppointmentRepository with correct values", async () => {
    await testInstance(fakeAppointmentEntity);
    expect(addAppointmentRepository.addAppointment).toHaveBeenCalledWith(
      new AppointmentEntity(fakeAppointmentEntity)
    );
    expect(addAppointmentRepository.addAppointment).toHaveBeenCalledTimes(1);
  });

  it("should return a new Appointment when addAppointmentRepository insert it", async () => {
    const Appointment = await testInstance(fakeAppointmentEntity);
    expect(Appointment).toEqual(fakeAppointmentEntity);
  });

  it("should return null a new Appointment when addAppointmentRepository insert it", async () => {
    addAppointmentRepository.addAppointment.mockResolvedValue(null);
    const Appointment = await testInstance(fakeAppointmentEntity);
    expect(Appointment).toBeNull();
  });

  it("should rethrow if addAppointment of AddAppointmentRepository throws", async () => {
    addAppointmentRepository.addAppointment.mockRejectedValueOnce(new Error("any_error"));
    await expect(testInstance(fakeAppointmentEntity)).rejects.toThrowError("any_error");
  });
});
