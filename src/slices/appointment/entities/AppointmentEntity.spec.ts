import { AppointmentEntity } from "./AppointmentEntity";
import MockDate from "mockdate";

export const fakeAppointmentEntity = {
  _id: "123",
  createdById: "123",
  name: "fakeAppointmentEntity",
  active: true,
  createdAt: new Date(),
  updatedAt: new Date(),
  requestId: "string",
  message: "string",
  service: "string",
  ownerId: "string",
  clientId: "string",
  professionalId: "string",
  serviceId: "string",
  status: "string",
  createdForId: "string",
  read: true,
  cancelled: false,
  push: true,
  email: true,
  initDate: new Date(),
  endDate: new Date(),
  cancelledAt: new Date(),
  cancelledBy: "string",
};

export const fakeAppointmentPaginated = {
  total: 11,
  appointment: [
    fakeAppointmentEntity,
    fakeAppointmentEntity,
    fakeAppointmentEntity,
    fakeAppointmentEntity,
    fakeAppointmentEntity,
    fakeAppointmentEntity,
    fakeAppointmentEntity,
    fakeAppointmentEntity,
    fakeAppointmentEntity,
    fakeAppointmentEntity,
  ],
};

describe("Appointment", () => {
  beforeAll(async () => {
    MockDate.set(new Date());
  });

  afterAll(async () => {
    MockDate.reset();
  });

  it("Should be created", () => {
    const obj = new AppointmentEntity(fakeAppointmentEntity);

    expect(obj).toBeTruthy();
    expect(obj).toEqual({
      ...fakeAppointmentEntity,
      _id: undefined,
      active: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  });
});
