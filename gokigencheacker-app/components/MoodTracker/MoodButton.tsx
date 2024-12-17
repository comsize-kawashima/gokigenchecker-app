import React from "react";

import { MoodButton as StyledMoodButton } from "./styles";

interface Mood {
  id: number;
  icon: string;
  color: string;
}

interface MoodButtonProps {
  mood: Mood;
  onClick: () => void;
}

const MoodButton: React.FC<MoodButtonProps> = ({ mood, onClick }) => {
  return (
    <StyledMoodButton mood={mood} onClick={onClick}>
      {mood.icon}
    </StyledMoodButton>
  );
};

export default MoodButton;
