// import React, { useState } from "react";

import DateDisplay from "./DateDisplay"; // インポートパスを修正
import MoodButtonContainer from "./MoodButtonContainer";
import { AppContainer } from "./styles";

interface Mood {
  id: number;
  icon: string;
  color: string;
}

const MoodTracker: React.FC = () => {
  // const [selectedDate] = useState(new Date());

  // ISO形式で日付をフォーマットし、年月日部分だけを切り出して表示
  // const formattedDate = selectedDate.toISOString().slice(0, 10); // YYYY-MM-DD形式

  const moods: Mood[] = [
    { id: 1, icon: "😭", color: "#FFDAB9" },
    { id: 2, icon: "😞", color: "#FFB6C1" },
    { id: 3, icon: "😐", color: "#FFFF99" },
    { id: 4, icon: "😊", color: "#ADFF2F" },
    { id: 5, icon: "😁", color: "#98FB98" },
  ];

  const handleMoodSelect = (mood: Mood) => {
    // クリックされたボタンの情報をコンソールに表示
    console.log("Selected mood:", mood);

    // アラートを表示
    alert(`Selected mood: ${mood.icon}`);
  };

  return (
    <AppContainer>
      <DateDisplay />
      <MoodButtonContainer moods={moods} onMoodSelect={handleMoodSelect} />
    </AppContainer>
  );
};

export default MoodTracker;
