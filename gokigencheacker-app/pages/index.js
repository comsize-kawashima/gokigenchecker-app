import React, { useState } from "react";
import MoodInput from "../components/MoodInput"; // MoodInputコンポーネントをインポート

export default function Home() {
  const [mood, setMood] = useState(3); // 初期状態を「普通（3）」に設定

  return (
    <div style={{ padding: 20 }}>
      <h1>今日の機嫌は？</h1>
      <MoodInput mood={mood} setMood={setMood} />
    </div>
  );
}
