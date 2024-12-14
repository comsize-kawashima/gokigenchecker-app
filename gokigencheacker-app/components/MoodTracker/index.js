// components/MoodTracker/index.js (または MoodTracker.js)
import React, { useState } from "react";
import { AppContainer, MoodButton, DateDisplay } from "./styles"; // 正しいスタイルファイルのパスを確認

function MoodTracker() {
  const [selectedDate] = useState(new Date());

  const moods = [
    { id: 1, icon: "😭", color: "#FFDAB9" },
    { id: 2, icon: "😞", color: "#FFB6C1" },
    { id: 3, icon: "😐", color: "#FFFF99" },
    { id: 4, icon: "😊", color: "#ADFF2F" },
    { id: 5, icon: "😁", color: "#98FB98" },
  ];

  const handleMoodSelect = (mood) => {
    // ここでAPIにPOSTする処理を追加するかもしれません。
  };

  return (
    <AppContainer>
      <DateDisplay>{selectedDate.toDateString()}</DateDisplay>
      {moods.map((mood) => (
        <MoodButton
          key={mood.id}
          mood={mood}
          onClick={() => handleMoodSelect(mood)}
        >
          {mood.icon}
        </MoodButton>
      ))}
    </AppContainer>
  );
}

export default MoodTracker; // この行を確認
