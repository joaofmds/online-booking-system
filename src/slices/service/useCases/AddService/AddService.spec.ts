import { addServiceRepository } from "@/slices/service/repositories/contracts/AddServiceRepository";
import { fakeServiceEntity } from "@/slices/service/entities/ServiceEntity.spec";
import MockDate from "mockdate";
import { mock, MockProxy } from "jest-mock-extended";
import { addService } from "./AddService";
import { ServiceEntity } from "@/slices/service/entities";

describe("addService", () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let testInstance: any;
  let addServiceRepository: MockProxy<addServiceRepository>;

  beforeAll(async () => {
    MockDate.set(new Date());
    addServiceRepository = mock();
    addServiceRepository.addService.mockResolvedValue(fakeServiceEntity);
  });

  beforeEach(() => {
    testInstance = addService(addServiceRepository);
  });

  afterAll(async () => {
    MockDate.reset();
  });

  it("should call addService of AddServiceRepository with correct values", async () => {
    await testInstance(fakeServiceEntity);
    expect(addServiceRepository.addService).toHaveBeenCalledWith(
      new ServiceEntity(fakeServiceEntity)
    );
    expect(addServiceRepository.addService).toHaveBeenCalledTimes(1);
  });

  it("should return a new Service when addServiceRepository insert it", async () => {
    const Service = await testInstance(fakeServiceEntity);
    expect(Service).toEqual(fakeServiceEntity);
  });

  it("should return null a new Service when addServiceRepository insert it", async () => {
    addServiceRepository.addService.mockResolvedValue(null);
    const Service = await testInstance(fakeServiceEntity);
    expect(Service).toBeNull();
  });

  it("should rethrow if addService of AddServiceRepository throws", async () => {
    addServiceRepository.addService.mockRejectedValueOnce(new Error("any_error"));
    await expect(testInstance(fakeServiceEntity)).rejects.toThrowError("any_error");
  });
});
