import { ServiceEntity } from "./ServiceEntity";
import MockDate from "mockdate";

export const fakeServiceEntity = {
  _id: "123",
  createdById: "123",
  name: "fakeServiceEntity",
  active: true,
  createdAt: new Date(),
  updatedAt: new Date(),
  categoryId: "string",
  duration: 1,
  description: "string",
  productsQuantityNeeded: 1,
  productId: "string",
  promotionalPrice: 1,
  price: 1,
  finalPrice: 1,
  comission: 1,
  havePromotionalPrice: true,
  hasFidelityGenerator: true,
  generateHowManyPoints: 1,
  appointmentsTotal: 1,
  canPayWithFidelityPoints: true,
  howManyPointsIsNeededToRescue: 1,
};

export const fakeServicePaginated = {
  total: 11,
  service: [
    fakeServiceEntity,
    fakeServiceEntity,
    fakeServiceEntity,
    fakeServiceEntity,
    fakeServiceEntity,
    fakeServiceEntity,
    fakeServiceEntity,
    fakeServiceEntity,
    fakeServiceEntity,
    fakeServiceEntity,
  ],
};

describe("Service", () => {
  beforeAll(async () => {
    MockDate.set(new Date());
  });

  afterAll(async () => {
    MockDate.reset();
  });

  it("Should be created", () => {
    const obj = new ServiceEntity(fakeServiceEntity);

    expect(obj).toBeTruthy();
    expect(obj).toEqual({
      ...fakeServiceEntity,
      _id: undefined,
      active: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  });
});
