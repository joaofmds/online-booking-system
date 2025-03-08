import { AccountEntity } from "./AccountEntity";
import MockDate from "mockdate";

export const fakeAccountEntity = {
  _id: "123",
  createdById: "123",
  name: "fakeAccountEntity",
  active: true,
  createdAt: new Date(),
  updatedAt: new Date(),
  refreshToken: "string",
  expiresAt: "string",
};

export const fakeAccountPaginated = {
  total: 11,
  account: [
    fakeAccountEntity,
    fakeAccountEntity,
    fakeAccountEntity,
    fakeAccountEntity,
    fakeAccountEntity,
    fakeAccountEntity,
    fakeAccountEntity,
    fakeAccountEntity,
    fakeAccountEntity,
    fakeAccountEntity,
  ],
};

describe("Account", () => {
  beforeAll(async () => {
    MockDate.set(new Date());
  });

  afterAll(async () => {
    MockDate.reset();
  });

  it("Should be created", () => {
    const obj = new AccountEntity(fakeAccountEntity);

    expect(obj).toBeTruthy();
    expect(obj).toEqual({
      ...fakeAccountEntity,
      _id: undefined,
      active: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  });
});
