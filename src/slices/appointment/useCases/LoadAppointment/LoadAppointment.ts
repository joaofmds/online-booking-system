import { LoadAppointmentRepository } from "@/slices/appointment/repositories/contracts";
import { AppointmentData } from "@/slices/appointment/entities";
import { Query } from "@/application/types";

export type LoadAppointment = (query: Query) => Promise<AppointmentData | null>;
export type LoadAppointmentSignature = (loadAppointment: LoadAppointmentRepository) => LoadAppointment;

export const loadAppointment: LoadAppointmentSignature =
  (loadAppointmentRepository: LoadAppointmentRepository) => (query: Query) => {
    return loadAppointmentRepository.loadAppointment(query);
  };
