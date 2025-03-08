import { RideData } from "@/slices/ride/entities";

export interface addRideRepository {
  addRide(Ride: RideData): Promise<RideData | null>;
}
