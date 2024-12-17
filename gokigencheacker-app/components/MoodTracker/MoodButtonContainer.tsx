import React from "react";

import MoodButton from "./MoodButton";
import { MoodButtonContainer as StyledMoodButtonContainer } from "./styles";

interface Mood {
  id: number;
  icon: string;
  color: string;
}

interface MoodButtonContainerProps {
  moods: Mood[];
  onMoodSelect: (mood: Mood) => void;
}

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
