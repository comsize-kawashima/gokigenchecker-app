import React, { useState } from "react";

import { DateDisplay as StyledDateDisplay, DayName } from "./styles";

const DateDisplay = () => {
  const [selectedDate] = useState(new Date());
  const dayNames = ["日", "月", "火", "水", "木", "金", "土"];

  const year = selectedDate.getFullYear();
  const month = String(selectedDate.getMonth() + 1).padStart(2, "0");
  const day = String(selectedDate.getDate()).padStart(2, "0");
  const formattedDate = `${year}/${month}/${day}`;
  const dayName = dayNames[selectedDate.getDay()];

  return (
    <StyledDateDisplay>
      {formattedDate}
      <DayName>（{dayName}）</DayName>
    </StyledDateDisplay>
  );
};

export default DateDisplay;
