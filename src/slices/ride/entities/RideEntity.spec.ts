import { RideEntity } from "./RideEntity";
import MockDate from "mockdate";

export const fakeRideEntity = {
  _id: "123",
  createdById: "123",
  name: "fakeRideEntity",
  active: true,
  createdAt: new Date(),
  updatedAt: new Date(),
  requestId: "123",
  driverUserType: "string",
  origin: "unknown",
  destiny: "unknown",
  status: 123,
  distance: 123,
  distanceTime: 123,
  maxCostEstimated: 123,
  minCostEstimated: 123,
  finalCost: 123,
  costDefinedByOwner: 123,
  initDate: new Date(),
  endDateEstimated: new Date(),
  endDate: new Date(),
};

export const fakeRidePaginated = {
  total: 11,
  ride: [
    fakeRideEntity,
    fakeRideEntity,
    fakeRideEntity,
    fakeRideEntity,
    fakeRideEntity,
    fakeRideEntity,
    fakeRideEntity,
    fakeRideEntity,
    fakeRideEntity,
    fakeRideEntity,
  ],
};

describe("Ride", () => {
  beforeAll(async () => {
    MockDate.set(new Date());
  });

  afterAll(async () => {
    MockDate.reset();
  });

  it("Should be created", () => {
    const obj = new RideEntity(fakeRideEntity);

    expect(obj).toBeTruthy();
    expect(obj).toEqual({
      ...fakeRideEntity,
      _id: undefined,
      active: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  });
});
