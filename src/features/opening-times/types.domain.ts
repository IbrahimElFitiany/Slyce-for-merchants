export type TimeSlot = {
  from: string;
  to: string;
};

export type DaySchedule = {
  day: Weekday;
  slots: TimeSlot[];
};

export type WeeklySchedule = DaySchedule[];

export type Weekday = "Sunday" | "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday";

