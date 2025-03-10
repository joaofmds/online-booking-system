import { UpdateRideRepository } from "@/slices/ride/repositories/contracts";
import { RideData } from "@/slices/ride/entities";
import { Query } from "@/application/types";

export type UpdateRide = (
  query: Query,
  data: RideData
) => Promise<RideData | null>;
export type UpdateRideSignature = (
  updateRide: UpdateRideRepository
) => UpdateRide;

export const updateRide: UpdateRideSignature =
  (updateRideRepository: UpdateRideRepository) =>
  (query: Query, data: RideData) => {
    return updateRideRepository.updateRide(query, data);
  };
