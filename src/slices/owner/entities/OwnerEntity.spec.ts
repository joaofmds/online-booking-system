import { OwnerEntity } from "./OwnerEntity";
import MockDate from "mockdate";

export const fakeOwnerEntity = {
  _id: "123",
  createdById: "123",
  name: "fakeOwnerEntity",
  active: true,
  createdAt: new Date(),
  updatedAt: new Date(),
  appointmentsTotal: 123,
  ratingsTotal: 123,
  haveDelivery: 123,
  typeTax: "string",
  costByTimeDriving: 123,
  fidelityTaxPoints: 123,
  fixedTax: 123,
  minimumTimeForReschedule: 123,
  description: "string",
  days1: "unknown",
  days2: "unknown",
  days3: "unknown",
  days4: "unknown",
  hourStart1: "string",
  hourStart2: "string",
  hourStart3: "string",
  hourStart4: "string",
  hourEnd1: "string",
  hourEnd2: "string",
  hourEnd3: "string",
  hourEnd4: "string",
  hourLunchStart1: "string",
  hourLunchEnd1: "string",
  hourLunchStart2: "string",
  hourLunchEnd2: "string",
  hourLunchStart3: "string",
  hourLunchEnd3: "string",
  hourLunchStart4: "string",
  hourLunchEnd4: "string",
};

export const fakeOwnerPaginated = {
  total: 11,
  owner: [
    fakeOwnerEntity,
    fakeOwnerEntity,
    fakeOwnerEntity,
    fakeOwnerEntity,
    fakeOwnerEntity,
    fakeOwnerEntity,
    fakeOwnerEntity,
    fakeOwnerEntity,
    fakeOwnerEntity,
    fakeOwnerEntity,
  ],
};

describe("Owner", () => {
  beforeAll(async () => {
    MockDate.set(new Date());
  });

  afterAll(async () => {
    MockDate.reset();
  });

  it("Should be created", () => {
    const obj = new OwnerEntity(fakeOwnerEntity);

    expect(obj).toBeTruthy();
    expect(obj).toEqual({
      ...fakeOwnerEntity,
      _id: undefined,
      active: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  });
});
