import { addDays, addMinutes } from "./dateFns";
import MockDate from "mockdate";

describe("dateFns functions", () => {
  beforeAll(() => {
    MockDate.set(new Date());
  });

  afterAll(() => {
    MockDate.reset();
  });

  it("should return added days when I call addDays", () => {
    expect(addDays(new Date(2025, 3, 9), 1)).toBe(new Date(2025, 3, 10).toISOString());
  });

  it("should return added minutes when I call add Minutes", () => {
    expect(addMinutes(new Date(2025, 3, 9, 10, 20), 10)).toBe(
      new Date(2025, 3, 9, 10, 30).toISOString()
    );
  });
});
