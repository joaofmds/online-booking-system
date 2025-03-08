import { addRideRepository } from "@/slices/ride/repositories/contracts";
import { RideEntity, RideData } from "@/slices/ride/entities";

export type AddRide = (data: RideData) => Promise<RideEntity | null>;
export type AddRideSignature = (AddRide: addRideRepository) => AddRide;

export const addRide: AddRideSignature =
  (addRideRepository: addRideRepository) => (data: RideData) => {
    return addRideRepository.addRide(new RideEntity(data));
  };
