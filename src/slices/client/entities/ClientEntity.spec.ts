import { ClientEntity } from "./ClientEntity";
import MockDate from "mockdate";

export const fakeClientEntity = {
  _id: "123",
  createdById: "123",
  name: "fakeClientEntity",
  active: true,
  createdAt: new Date(),
  updatedAt: new Date(),
  cpf: "string",
  phone: "string",
  userId: "string",
  ownerId: "string",
  birthDate: new Date(),
  appointmentsTotal: 123,
};

export const fakeClientPaginated = {
  total: 11,
  client: [
    fakeClientEntity,
    fakeClientEntity,
    fakeClientEntity,
    fakeClientEntity,
    fakeClientEntity,
    fakeClientEntity,
    fakeClientEntity,
    fakeClientEntity,
    fakeClientEntity,
    fakeClientEntity,
  ],
};

describe("Client", () => {
  beforeAll(async () => {
    MockDate.set(new Date());
  });

  afterAll(async () => {
    MockDate.reset();
  });

  it("Should be created", () => {
    const obj = new ClientEntity(fakeClientEntity);

    expect(obj).toBeTruthy();
    expect(obj).toEqual({
      ...fakeClientEntity,
      _id: undefined,
      active: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  });
});
