import styled from "styled-components";

interface MoodButtonProps {
  mood: {
    color: string;
  };
}

export const AppContainer = styled.div`
  display: flex; /* フレックスボックスレイアウトを使用 */
  flex-direction: column; /* 子要素を縦に並べる */
  align-items: center; /* 子要素を水平方向に中央揃え */
  justify-content: flex-start; /* 子要素を垂直方向に上部に揃え */
  min-height: 100vh; /* コンテナの最小高さを100%のビュー高さに設定 */
  background-color: #f0f2f5; /* 背景色を設定 */
  font-family: "Arial", sans-serif; /* フォントファミリーを設定 */
  padding-top: 40px; /* 上部に40pxのパディングを追加 */
`;

export const MoodButtonContainer = styled.div`
  display: flex; /* フレックスボックスレイアウトを使用 */
  flex-direction: row; /* 子要素を横に並べる */
  justify-content: center; /* 子要素を水平方向に中央揃え */
  align-items: center; /* 子要素を垂直方向に中央揃え */
  margin-top: 20px; /* 上部に20pxのマージンを追加 */
`;

export const MoodButton = styled.button<MoodButtonProps>`
  background-color: ${({ mood }) =>
    mood.color}; /* ボタンの背景色をmoodオブジェクトのcolorプロパティに基づいて設定 */
  border: none; /* ボーダーをなしに設定 */
  border-radius: 50%; /* ボタンを円形にするためにボーダー半径を50%に設定 */
  width: 60px; /* ボタンの幅を60pxに設定 */
  height: 60px; /* ボタンの高さを60pxに設定 */
  margin: 20px; /* ボタンの周囲に20pxのマージンを追加 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* ボタンに影を追加 */
  cursor: pointer; /* カーソルをポインターに変更 */
  display: flex; /* フレックスボックスレイアウトを使用 */
  align-items: center; /* 子要素を垂直方向に中央揃え */
  justify-content: center; /* 子要素を水平方向に中央揃え */
  color: white; /* テキストの色を白に設定 */
  font-size: 24px; /* フォントサイズを24pxに設定 */
  transition: transform 0.1s ease; /* 変形のトランジションを設定 */

  &:focus {
    outline: none; /* フォーカス時のアウトラインをなしに設定 */
  }

  &:active {
    transform: scale(0.9); /* クリック時にボタンを縮小 */
  }
`;

export const DateDisplay = styled.div`
  font-family: "Nico Moji", sans-serif; /* フォントファミリーをNico Mojiに設定 */
  margin: 20px; /* 周囲に20pxのマージンを追加 */
  font-size: 30px; /* フォントサイズを30pxに設定 */
  color: #333; /* テキストの色を#333に設定 */
  text-align: center; /* テキストを中央揃え */
`;

export const Header = styled.h1`
  font-family: "Nico Moji", sans-serif; /* フォントファミリーをNico Mojiに設定 */
  font-size: 100px; /* フォントサイズを100pxに設定 */
  color: #333; /* テキストの色を#333に設定 */
  text-align: center; /* テキストを中央揃え */
`;
