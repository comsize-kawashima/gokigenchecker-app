import styled from "styled-components";

interface Mood {
  id: number;
  icon: string;
  color: string;
}
export const HeaderContainer = styled.header`
  background-color: #f0f2f5; /* 背景色を設定 */
  padding: 20px; /* 内側に20pxのパディングを追加 */
  text-align: center; /* テキストを中央揃え */
`;

export const HeaderTitle = styled.h1`
  font-family: "Nico Moji", sans-serif; /* フォントファミリーをNico Mojiに設定 */
  font-size: 36px; /* フォントサイズを36pxに設定 */
  color: #333; /* テキストの色を#333に設定 */
  margin: 0; /* マージンをリセット */
`;

export const HeaderSubtitle = styled.p`
  font-family: "Arial", sans-serif; /* フォントファミリーをArialに設定 */
  font-size: 18px; /* フォントサイズを18pxに設定 */
  color: #666; /* テキストの色を#666に設定 */
  margin: 0; /* マージンをリセット */
  margin-bottom: 10px; /* 下部に10pxのマージンを追加 */
`;

export const AppContainer = styled.div`
  display: flex; /* フレックスボックスレイアウトを使用 */
  flex-direction: column; /* 子要素を縦に並べる */
  align-items: center; /* 子要素を水平方向に中央揃え */
  justify-content: flex-start; /* 子要素を垂直方向に上部に揃え */
  min-height: 100vh; /* コンテナの最小高さを100%のビュー高さに設定 */
  background-color: #f0f2f5; /* 背景色を設定 */
  // font-family: "Nico Moji", sans-serif; /* フォントファミリーを設定 */
  padding-top: 40px; /* 上部に40pxのパディングを追加 */
`;

export const StyledMoodButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const StyledMoodButton = styled.button<{ mood: Mood }>`
  background-color: ${({ mood }) => mood.color};
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  margin: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
  transition: transform 0.1s ease;

  &:focus {
    outline: none;
  }

  &:active {
    transform: scale(0.9);
  }
`;

export const DateDisplay = styled.div`
  margin: 10px; /* 周囲に20pxのマージンを追加 */
  padding: 10px; /* 内側に10pxのパディングを追加 */
  font-size: 25px; /* フォントサイズを25pxに設定 */
  color: #333; /* テキストの色を#333に設定 */
  text-align: center; /* テキストを中央揃え */
  position: relative; /* 必要に応じてpositionプロパティを使用 */
  top: -30px; /* 必要に応じてtopプロパティを使用して縦の位置を調整 */
  // font-family: "Nico Moji";
`;

export const DayName = styled.span`
  font-family: "Nico Moji";
  font-size: 20px; /* フォントサイズを20pxに設定 */
  color: #333; /* テキストの色を#666に設定 */
`;

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const MainContent = styled.main`
  flex: 1;
  padding: 20px;
  background-color: #f0f2f5;
`;

export const CalendarContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
  margin-top: 20px;
`;

export const CalendarDay = styled.div<{ color: string }>`
  background-color: ${({ color }) => color};
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  color: white;
`;
