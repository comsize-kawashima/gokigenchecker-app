import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f0f2f5;
  font-family: "Arial", sans-serif;
`;

export const MoodButton = styled.button`
  background-color: ${({ mood }) => mood.color};
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  margin: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;

  &:focus {
    outline: none;
  }
`;

export const DateDisplay = styled.div`
  margin: 20px;
  font-size: 20px;
  color: #333;
`;
