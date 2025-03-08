import { addAppointmentRepository } from "@/slices/appointment/repositories/contracts";
import { AppointmentEntity, AppointmentData } from "@/slices/appointment/entities";

export type AddAppointment = (data: AppointmentData) => Promise<AppointmentEntity | null>;
export type AddAppointmentSignature = (AddAppointment: addAppointmentRepository) => AddAppointment;

export const addAppointment: AddAppointmentSignature =
  (addAppointmentRepository: addAppointmentRepository) => (data: AppointmentData) => {
    return addAppointmentRepository.addAppointment(new AppointmentEntity(data));
  };
