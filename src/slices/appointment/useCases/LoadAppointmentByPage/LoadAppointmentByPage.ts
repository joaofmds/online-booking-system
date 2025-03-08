import { LoadAppointmentByPageRepository } from "@/slices/appointment/repositories/contracts";
import { AppointmentPaginated } from "@/slices/appointment/entities";
import { Query } from "@/application/types";

export type LoadAppointmentByPage = (query: Query) => Promise<AppointmentPaginated | null>;
export type LoadAppointmentByPageSignature = (
  loadAppointmentByPage: LoadAppointmentByPageRepository
) => LoadAppointmentByPage;

export const loadAppointmentByPage: LoadAppointmentByPageSignature =
  (loadAppointmentByPageRepository: LoadAppointmentByPageRepository) => (query: Query) => {
    return loadAppointmentByPageRepository.loadAppointmentByPage(query);
  };
