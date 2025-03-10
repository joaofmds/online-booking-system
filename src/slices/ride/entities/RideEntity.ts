export type RideData = {
  _id?: string;
  createdById: string;
  name: string;
  active?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  requestId: string;
  driverUserType: string;
  origin: unknown;
  destiny: unknown;
  status: number;
  distance: number;
  distanceTime: number;
  maxCostEstimated: number;
  minCostEstimated: number;
  finalCost: number;
  costDefinedByOwner: number;
  initDate: Date;
  endDateEstimated: Date;
  endDate: Date;
};

export type RidePaginated = {
  ride: RideData[];
  total: number;
};

export class RideEntity {
  createdById: string;
  name: string;
  active?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  requestId: string;
  driverUserType: string;
  origin: unknown;
  destiny: unknown;
  status: number;
  distance: number;
  distanceTime: number;
  maxCostEstimated: number;
  minCostEstimated: number;
  finalCost: number;
  costDefinedByOwner: number;
  initDate: Date;
  endDateEstimated: Date;
  endDate: Date;

  constructor(data: RideData) {
    this.createdById = data.createdById;
    this.name = data.name;
    this.active = false;
    this.createdAt = new Date();
    this.updatedAt = new Date();
    this.requestId = data.requestId;
    this.driverUserType = data.driverUserType;
    this.origin = data.origin;
    this.destiny = data.destiny;
    this.status = data.status;
    this.distance = data.distance;
    this.distanceTime = data.distanceTime;
    this.maxCostEstimated = data.maxCostEstimated;
    this.minCostEstimated = data.minCostEstimated;
    this.finalCost = data.finalCost;
    this.costDefinedByOwner = data.costDefinedByOwner;
    this.initDate = data.initDate;
    this.endDateEstimated = data.endDateEstimated;
    this.endDate = data.endDate;
  }
}
