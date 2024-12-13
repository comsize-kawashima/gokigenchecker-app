import React from "react";
import { Box, Slider, Typography } from "@mui/material";
import Image from "next/image";

// 機嫌のマークと対応するラベルを定義
const marks = [
  {
    value: 1,
    label: (
      <Image src="/images/fuming.png" alt="Smiling" width={50} height={50} />
    ),
  },
  {
    value: 2,
    label: <Image src="/images/angry.png" alt="Angry" width={50} height={50} />,
  },
  {
    value: 3,
    label: <Image src="/images/cry.png" alt="Crying" width={50} height={50} />,
  },
  {
    value: 4,
    label: (
      <Image src="/images/nomal.png" alt="Fuming" width={35} height={50} />
    ),
  },
  {
    value: 5,
    label: <Image src="/images/happy.png" alt="Happy" width={50} height={50} />,
  },
];

// MoodInput コンポーネントは、ユーザーが機嫌をスライダーで選択できるUIを提供します。
const MoodInput = ({ mood, setMood }) => {
  // スライダーの値が変更されたときに呼び出される関数
  const handleChange = (event, newValue) => {
    setMood(newValue); // 新しい値でmood状態を更新
  };

  // コンポーネントのUI部分を定義
  return (
    <Box sx={{ width: 300, padding: 3 }}>
      <Typography id="input-slider" gutterBottom>
        機嫌を選択:
      </Typography>
      <Slider
        value={mood}
        onChange={handleChange}
        aria-labelledby="input-slider"
        step={1}
        marks={marks} // 定義したマークを使用
        min={1}
        max={5}
        valueLabelDisplay="off" // 値のラベルは表示しない
      />
    </Box>
  );
};

export default MoodInput;
