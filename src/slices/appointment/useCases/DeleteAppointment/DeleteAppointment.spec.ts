import { DeleteAppointmentRepository } from "@/slices/appointment/repositories/contracts";
import { fakeAppointmentEntity } from "@/slices/appointment/entities/AppointmentEntity.spec";
import MockDate from "mockdate";
import { mock, MockProxy } from "jest-mock-extended";
import { DeleteAppointment, deleteAppointment } from "./DeleteAppointment";
import { Query } from "@/application/types";

describe("deleteAppointment", () => {
  let fakeQuery: Query;
  let testInstance: DeleteAppointment;
  let deleteAppointmentRepository: MockProxy<DeleteAppointmentRepository>;

  beforeAll(async () => {
    MockDate.set(new Date());
    deleteAppointmentRepository = mock();
    fakeQuery = { fields: { name: "123" }, options: {} };
    deleteAppointmentRepository.deleteAppointment.mockResolvedValue(fakeAppointmentEntity);
  });

  beforeEach(() => {
    testInstance = deleteAppointment(deleteAppointmentRepository);
  });

  afterAll(async () => {
    MockDate.reset();
  });

  it("should call deleteAppointment of DeleteAppointmentRepository with correct values", async () => {
    await testInstance(fakeQuery);
    expect(deleteAppointmentRepository.deleteAppointment).toHaveBeenCalledWith(fakeQuery);
    expect(deleteAppointmentRepository.deleteAppointment).toHaveBeenCalledTimes(1);
  });

  it("should return a new appointment when deleteAppointmentRepository delete it", async () => {
    const appointment = await testInstance(fakeQuery);
    expect(appointment).toEqual(fakeAppointmentEntity);
  });

  it("should return null a new appointment when deleteAppointmentRepository delete it", async () => {
    deleteAppointmentRepository.deleteAppointment.mockResolvedValue(null);
    const appointment = await testInstance(fakeQuery);
    expect(appointment).toBeNull();
  });

  it("should rethrow if deleteAppointment of DeleteAppointmentRepository throws", async () => {
    deleteAppointmentRepository.deleteAppointment.mockRejectedValueOnce(new Error("any_error"));
    await expect(testInstance(fakeQuery)).rejects.toThrowError("any_error");
  });
});
