import { LoadRecurrenceRepository } from "@/slices/recurrence/repositories/contracts";
import { RecurrenceData } from "@/slices/recurrence/entities";
import { Query } from "@/application/types";

export type LoadRecurrence = (query: Query) => Promise<RecurrenceData | null>;
export type LoadRecurrenceSignature = (loadRecurrence: LoadRecurrenceRepository) => LoadRecurrence;

export const loadRecurrence: LoadRecurrenceSignature =
  (loadRecurrenceRepository: LoadRecurrenceRepository) => (query: Query) => {
    return loadRecurrenceRepository.loadRecurrence(query);
  };
