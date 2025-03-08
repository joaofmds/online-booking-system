import { UserEntity } from "./userEntity";
import MockDate from "mockdate";

export const fakeUserEntity = {
  _id: "123",
  createdById: "123",
  name: "fakeUserEntity",
  email: "string",
  role: "string",
  confirmedEmail: true,
  sendedEmail: true,
  password: "string",
  carId: "string",
  ownerId: "string",
  myOwnerId: "string",
  payDay: "string",
  photoUrl: "string",
  cpf: "string",
  phone: "string",
  coord: "unknown",
  distance: 123,
  appointmentsTotal: 123,
  plan: "string",
  cnpj: "string",
  city: "string",
  uf: "string",
  address: "string",
  complement: "string",
  photoId: "string",
  cash: true,
  creditCard: true,
  debitCard: true,
  transferBank: true,
  check: true,
  pix: true,
  nextPlan: "string",
  addresses: "unknown",
  clientId: "string",
  active: true,
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const fakeUserPaginated = {
  total: 11,
  user: [
    fakeUserEntity,
    fakeUserEntity,
    fakeUserEntity,
    fakeUserEntity,
    fakeUserEntity,
    fakeUserEntity,
    fakeUserEntity,
    fakeUserEntity,
    fakeUserEntity,
    fakeUserEntity,
  ],
};

describe("User", () => {
  beforeAll(async () => {
    MockDate.set(new Date());
  });

  afterAll(async () => {
    MockDate.reset();
  });

  it("Should be created", () => {
    const obj = new UserEntity(fakeUserEntity);

    expect(obj).toBeTruthy();
    expect(obj).toEqual({
      ...fakeUserEntity,
      _id: undefined,
      active: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  });
});
