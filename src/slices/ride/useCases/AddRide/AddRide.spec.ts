import { addRideRepository } from "@/slices/ride/repositories/contracts";
import { fakeRideEntity } from "@/slices/ride/entities/RideEntity.spec";
import MockDate from "mockdate";
import { mock, MockProxy } from "jest-mock-extended";
import { addRide } from "./AddRide";
import { RideEntity } from "@/slices/ride/entities";

describe("addRide", () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let testInstance: any;
  let addRideRepository: MockProxy<addRideRepository>;

  beforeAll(async () => {
    MockDate.set(new Date());
    addRideRepository = mock();
    addRideRepository.addRide.mockResolvedValue(fakeRideEntity);
  });

  beforeEach(() => {
    testInstance = addRide(addRideRepository);
  });

  afterAll(async () => {
    MockDate.reset();
  });

  it("should call addRide of AddRideRepository with correct values", async () => {
    await testInstance(fakeRideEntity);
    expect(addRideRepository.addRide).toHaveBeenCalledWith(
      new RideEntity(fakeRideEntity)
    );
    expect(addRideRepository.addRide).toHaveBeenCalledTimes(1);
  });

  it("should return a new Ride when addRideRepository insert it", async () => {
    const Ride = await testInstance(fakeRideEntity);
    expect(Ride).toEqual(fakeRideEntity);
  });

  it("should return null a new Ride when addRideRepository insert it", async () => {
    addRideRepository.addRide.mockResolvedValue(null);
    const Ride = await testInstance(fakeRideEntity);
    expect(Ride).toBeNull();
  });

  it("should rethrow if addRide of AddRideRepository throws", async () => {
    addRideRepository.addRide.mockRejectedValueOnce(new Error("any_error"));
    await expect(testInstance(fakeRideEntity)).rejects.toThrowError("any_error");
  });
});
