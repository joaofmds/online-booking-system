import { LoadServiceByPageRepository } from "../../repositories/contracts";
import { Query } from "@/application/types";
import { fakeServicePaginated } from "../../entities/ServiceEntity.spec";
import { LoadServiceByPage, loadServiceByPage } from "./LoadServiceByPage";
import MockDate from "mockdate";

import { mock, MockProxy } from "jest-mock-extended";

describe("LoadServiceByPage", () => {
  let fakeQuery: Query;
  let testInstance: LoadServiceByPage;
  let loadServiceByPageRepository: MockProxy<LoadServiceByPageRepository>;

  beforeAll(async () => {
    MockDate.set(new Date());
    loadServiceByPageRepository = mock();
    fakeQuery = { fields: { name: "123" }, options: {} };

    loadServiceByPageRepository.loadServiceByPage.mockResolvedValue(fakeServicePaginated);
  });

  beforeEach(() => {
    testInstance = loadServiceByPage(loadServiceByPageRepository);
  });

  afterAll(async () => {
    MockDate.reset();
  });

  it("should call loadServiceByPage of LoadServiceByPageRepository with correct values", async () => {
    await testInstance(fakeQuery);
    expect(loadServiceByPageRepository.loadServiceByPage).toHaveBeenCalledWith(fakeQuery);
    expect(loadServiceByPageRepository.loadServiceByPage).toHaveBeenCalledTimes(1);
  });

  it("should return a service loaded when loadServiceByPageRepository insert it", async () => {
    const service = await testInstance(fakeQuery);
    expect(service).toEqual(fakeServicePaginated);
  });

  it("should return null a service loaded when loadServiceByPageRepository insert it", async () => {
    loadServiceByPageRepository.loadServiceByPage.mockResolvedValue(null);
    const service = await testInstance(fakeQuery);
    expect(service).toBeNull();
  });

  it("should rethrow if loadServiceByPage of loadServiceByPageRepository throws", async () => {
    loadServiceByPageRepository.loadServiceByPage.mockRejectedValueOnce(
      new Error("any_error")
    );
    await expect(testInstance(fakeQuery)).rejects.toThrowError("any_error");
  });
});
