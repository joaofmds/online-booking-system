import { UpdateRecurrenceRepository } from "@/slices/recurrence/repositories/contracts";
import { RecurrenceData } from "@/slices/recurrence/entities";
import { Query } from "@/application/types";

export type UpdateRecurrence = (
  query: Query,
  data: RecurrenceData
) => Promise<RecurrenceData | null>;
export type UpdateRecurrenceSignature = (
  updateRecurrence: UpdateRecurrenceRepository
) => UpdateRecurrence;

export const updateRecurrence: UpdateRecurrenceSignature =
  (updateRecurrenceRepository: UpdateRecurrenceRepository) =>
  (query: Query, data: RecurrenceData) => {
    return updateRecurrenceRepository.updateRecurrence(query, data);
  };
