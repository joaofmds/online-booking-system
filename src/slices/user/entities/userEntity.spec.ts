import { UserEntity } from "./userEntity";
import MockDate from "mockdate";

export const fakeUserEntity = {
  _id: "123",
  createdById: "123",
  name: "fakeUserEntity",
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
