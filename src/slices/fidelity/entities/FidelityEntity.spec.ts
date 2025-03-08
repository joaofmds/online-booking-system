import { FidelityEntity } from "./FidelityEntity";
import MockDate from "mockdate";

export const fakeFidelityEntity = {
  _id: "123",
  createdById: "123",
  name: "fakeFidelityEntity",
  active: true,
  createdAt: new Date(),
  updatedAt: new Date(),
  ownerId: "string",
  requestId: "string",
  points: 123,
  clientId: "string",
};

export const fakeFidelityPaginated = {
  total: 11,
  fidelity: [
    fakeFidelityEntity,
    fakeFidelityEntity,
    fakeFidelityEntity,
    fakeFidelityEntity,
    fakeFidelityEntity,
    fakeFidelityEntity,
    fakeFidelityEntity,
    fakeFidelityEntity,
    fakeFidelityEntity,
    fakeFidelityEntity,
  ],
};

describe("Fidelity", () => {
  beforeAll(async () => {
    MockDate.set(new Date());
  });

  afterAll(async () => {
    MockDate.reset();
  });

  it("Should be created", () => {
    const obj = new FidelityEntity(fakeFidelityEntity);

    expect(obj).toBeTruthy();
    expect(obj).toEqual({
      ...fakeFidelityEntity,
      _id: undefined,
      active: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  });
});
