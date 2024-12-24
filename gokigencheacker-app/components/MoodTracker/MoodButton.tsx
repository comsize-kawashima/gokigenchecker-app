import React from "react";

import { StyledMoodButton, StyledMoodButtonContainer } from "./styles";

interface Mood {
  id: number;
  icon: string;
  color: string;
}

interface MoodButtonContainerProps {
  moods: Mood[];
  onMoodSelect: (mood: Mood) => void;
}

const MoodButton = ({ mood, onClick }: { mood: Mood; onClick: () => void }) => {
  return (
    <StyledMoodButton mood={mood} onClick={onClick}>
      {mood.icon}
    </StyledMoodButton>
  );
};

const MoodButtonContainer: React.FC<MoodButtonContainerProps> = ({
  moods,
  onMoodSelect,
}) => {
  return (
    <StyledMoodButtonContainer>
      {moods.map((mood) => (
        <MoodButton
          key={mood.id}
          mood={mood}
          onClick={() => onMoodSelect(mood)}
        />
      ))}
    </StyledMoodButtonContainer>
  );
};

export default MoodButtonContainer;
