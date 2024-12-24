import React, { useState } from "react";

import Calendar from "./Calendar";
import DateDisplay from "./DateDisplay";
import MoodButton from "./MoodButton";
import { AppContainer } from "./styles";

interface Mood {
  id: number;
  icon: string;
  color: string;
}

interface MoodData {
  date: string;
  mood: Mood;
}

const MoodTracker: React.FC = () => {
  const [moodData, setMoodData] = useState<MoodData[]>([]);

  const moods: Mood[] = [
    { id: 1, icon: "😭", color: "#FFDAB9" },
    { id: 2, icon: "😞", color: "#FFB6C1" },
    { id: 3, icon: "😐", color: "#FFFF99" },
    { id: 4, icon: "😊", color: "#ADFF2F" },
    { id: 5, icon: "😁", color: "#98FB98" },
  ];

  const handleMoodSelect = (mood: Mood) => {
    const selectedDate = new Date().toISOString().slice(0, 10); // YYYY-MM-DD形式
    const newMoodData = { date: selectedDate, mood };
    setMoodData([...moodData, newMoodData]);

    // クリックされたボタンの情報をコンソールに表示
    console.log("Selected mood:", mood);

    // アラートを表示
    alert(`Selected mood: ${mood.icon}`);
  };

  return (
    <AppContainer>
      <DateDisplay />
      <MoodButton moods={moods} onMoodSelect={handleMoodSelect} />
      <Calendar moodData={moodData} />
    </AppContainer>
  );
};

export default MoodTracker;
