import { addRecurrenceRepository } from "@/slices/recurrence/repositories/contracts";
import { RecurrenceEntity, RecurrenceData } from "@/slices/recurrence/entities";

export type AddRecurrence = (data: RecurrenceData) => Promise<RecurrenceEntity | null>;
export type AddRecurrenceSignature = (AddRecurrence: addRecurrenceRepository) => AddRecurrence;

export const addRecurrence: AddRecurrenceSignature =
  (addRecurrenceRepository: addRecurrenceRepository) => (data: RecurrenceData) => {
    return addRecurrenceRepository.addRecurrence(new RecurrenceEntity(data));
  };
