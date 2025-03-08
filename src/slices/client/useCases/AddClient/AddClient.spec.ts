import { addClientRepository } from "@/slices/client/repositories/contracts";
import { fakeClientEntity } from "@/slices/client/entities/ClientEntity.spec";
import MockDate from "mockdate";
import { mock, MockProxy } from "jest-mock-extended";
import { addClient } from "./AddClient";
import { ClientEntity } from "@/slices/client/entities";

describe("addClient", () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let testInstance: any;
  let addClientRepository: MockProxy<addClientRepository>;

  beforeAll(async () => {
    MockDate.set(new Date());
    addClientRepository = mock();
    addClientRepository.addClient.mockResolvedValue(fakeClientEntity);
  });

  beforeEach(() => {
    testInstance = addClient(addClientRepository);
  });

  afterAll(async () => {
    MockDate.reset();
  });

  it("should call addClient of AddClientRepository with correct values", async () => {
    await testInstance(fakeClientEntity);
    expect(addClientRepository.addClient).toHaveBeenCalledWith(
      new ClientEntity(fakeClientEntity)
    );
    expect(addClientRepository.addClient).toHaveBeenCalledTimes(1);
  });

  it("should return a new Client when addClientRepository insert it", async () => {
    const Client = await testInstance(fakeClientEntity);
    expect(Client).toEqual(fakeClientEntity);
  });

  it("should return null a new Client when addClientRepository insert it", async () => {
    addClientRepository.addClient.mockResolvedValue(null);
    const Client = await testInstance(fakeClientEntity);
    expect(Client).toBeNull();
  });

  it("should rethrow if addClient of AddClientRepository throws", async () => {
    addClientRepository.addClient.mockRejectedValueOnce(new Error("any_error"));
    await expect(testInstance(fakeClientEntity)).rejects.toThrowError("any_error");
  });
});
