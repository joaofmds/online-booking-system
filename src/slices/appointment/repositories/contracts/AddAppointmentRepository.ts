import { AppointmentData } from "@/slices/appointment/entities";

export interface addAppointmentRepository {
  addAppointment(Appointment: AppointmentData): Promise<AppointmentData | null>;
}
