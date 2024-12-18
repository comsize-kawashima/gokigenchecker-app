import React, { useState } from "react";

import { DateDisplay as StyledDateDisplay, DayName } from "./styles";

const DateDisplay = () => {
  const [selectedDate] = useState(new Date());
  const dayNames = ["日", "月", "火", "水", "木", "金", "土"];

  const formattedDate = selectedDate.toISOString().slice(0, 10);
  const dayName = dayNames[selectedDate.getDay()];

  return (
    <StyledDateDisplay>
      {formattedDate}
      <DayName>（{dayName}）</DayName>
    </StyledDateDisplay>
  );
};

export default DateDisplay;
