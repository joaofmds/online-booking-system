import { UpdateAppointmentRepository } from "@/slices/appointment/repositories/contracts";
import { AppointmentData } from "@/slices/appointment/entities";
import { Query } from "@/application/types";

export type UpdateAppointment = (
  query: Query,
  data: AppointmentData
) => Promise<AppointmentData | null>;
export type UpdateAppointmentSignature = (
  updateAppointment: UpdateAppointmentRepository
) => UpdateAppointment;

export const updateAppointment: UpdateAppointmentSignature =
  (updateAppointmentRepository: UpdateAppointmentRepository) =>
  (query: Query, data: AppointmentData) => {
    return updateAppointmentRepository.updateAppointment(query, data);
  };
