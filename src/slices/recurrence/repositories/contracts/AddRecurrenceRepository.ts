import { RecurrenceData } from "@/slices/recurrence/entities";

export interface addRecurrenceRepository {
  addRecurrence(Recurrence: RecurrenceData): Promise<RecurrenceData | null>;
}
