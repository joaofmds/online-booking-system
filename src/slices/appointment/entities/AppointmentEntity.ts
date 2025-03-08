export type AppointmentData = {
  _id?: string;
  createdById: string;
  name: string;
  active?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  requestId?: string;
  message?: string;
  service?: string;
  ownerId?: string;
  clientId?: string;
  professionalId?: string;
  serviceId?: string;
  status?: string;
  createdForId?: string;
  read?: boolean;
  cancelled?: boolean;
  push?: boolean;
  email?: boolean;
  initDate?: Date;
  endDate?: Date;
  cancelledAt?: Date | null;
  cancelledBy?: string;
};

export type AppointmentPaginated = {
  appointment: AppointmentData[];
  total: number;
};

export class AppointmentEntity {
  createdById: string;
  name: string;
  active?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  requestId?: string;
  message?: string;
  service?: string;
  ownerId?: string;
  clientId?: string;
  professionalId?: string;
  serviceId?: string;
  status?: string;
  createdForId?: string;
  read?: boolean;
  cancelled?: boolean;
  push?: boolean;
  email?: boolean;
  initDate?: Date;
  endDate?: Date;
  cancelledAt?: Date | null;
  cancelledBy?: string;

  constructor(data: AppointmentData) {
    this.createdById = data.createdById;
    this.name = data.name;
    this.active = false;
    this.createdAt = new Date();
    this.updatedAt = new Date();
    this.requestId = data.requestId;
    this.message = data.message;
    this.service = data.service;
    this.ownerId = data.ownerId;
    this.clientId = data.clientId;
    this.professionalId = data.professionalId;
    this.serviceId = data.serviceId;
    this.status = data.status;
    this.createdForId = data.createdForId;
    this.read = data.read;
    this.cancelled = false;
    this.push = data.push;
    this.email = data.email;
    this.initDate = data.initDate;
    this.endDate = data.endDate;
    this.cancelledAt = data.cancelledAt;
    this.cancelledBy = data.cancelledBy;
  }
}

export type OwnerAppointmentInfo = {
  hourEnd1: unknown;
  hourLunchEnd1?: unknown;
  hourLunchStart1?: unknown;
  hourStart1: unknown;
  hourEnd2?: unknown;
  hourEnd3?: unknown;
  hourLunchEnd2?: unknown;
  hourLunchEnd3?: unknown;
  hourLunchStart2?: unknown;
  hourLunchStart3?: unknown;
  hourStart2?: unknown;
  hourStart3?: unknown;
  days1: unknown;
  days2?: unknown;
  days3?: unknown;
};
export type AvailableTimesModelRepository = {
  _id: OwnerAppointmentInfo;
  data: Array<unknown>;
};
export type QueryAvailableTimesRepository = {
  professionalId: string | undefined;
  endDay: string | undefined;
  initDay: string | undefined;
};
export type QueryAvailableTimes = {
  professionalId: string | null;
  date: string | null;
  serviceId: string | null;
  ownerId: string | null;
};
export type QueryVerifyAvailableTimes = QueryAvailableTimes & {
  initDate: Date | string | null;
  endDate: Date | string | null;
};
