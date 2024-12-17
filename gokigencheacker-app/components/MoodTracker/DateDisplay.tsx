import React from "react";

import { DateDisplay as StyledDateDisplay, Header } from "./styles";

interface DateDisplayProps {
  date: string;
}

const DateDisplay: React.FC<DateDisplayProps> = ({ date }) => {
  return (
    <StyledDateDisplay>
      <Header>ゴキゲンナビ</Header>
      {date}
    </StyledDateDisplay>
  );
};

export default DateDisplay;
