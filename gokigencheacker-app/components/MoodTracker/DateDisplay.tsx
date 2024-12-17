import React from "react";

import { DateDisplay as StyledDateDisplay } from "./styles";

interface DateDisplayProps {
  date: string;
}

const DateDisplay: React.FC<DateDisplayProps> = ({ date }) => {
  return <StyledDateDisplay>{date}</StyledDateDisplay>;
};

export default DateDisplay;
