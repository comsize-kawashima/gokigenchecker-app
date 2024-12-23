import React from "react";

import { CalendarContainer, CalendarDay } from "./styles";

interface Mood {
  id: number;
  icon: string;
  color: string;
}

interface MoodData {
  date: string;
  mood: Mood;
}

interface CalendarProps {
  moodData: MoodData[];
}

const Calendar: React.FC<CalendarProps> = ({ moodData }) => {
  const daysInMonth = new Date(
    new Date().getFullYear(),
    new Date().getMonth() + 1,
    0
  ).getDate();
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <CalendarContainer>
      {daysArray.map((day) => {
        const date = new Date(
          new Date().getFullYear(),
          new Date().getMonth(),
          day
        )
          .toISOString()
          .slice(0, 10);
        const moodForDay = moodData.find((data) => data.date === date);
        return (
          <CalendarDay
            key={day}
            color={moodForDay ? moodForDay.mood.color : "#e0e0e0"}
          >
            {day}
            {moodForDay && <div>{moodForDay.mood.icon}</div>}
          </CalendarDay>
        );
      })}
    </CalendarContainer>
  );
};

export default Calendar;
