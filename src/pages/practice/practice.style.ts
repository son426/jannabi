import styled, { keyframes } from "styled-components";
import backCursor from "./back.jpg";

// media screen
export const TestDiv = styled.div`
  border: 3px solid black;
  width: 500px;
  height: 100px;
  @media screen and (max-width: 500px) {
    background-color: aquamarine;
  }
`;

export const Div1 = styled.div`
  border: 2px solid black;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const Div2 = styled.div`
  width: 50%;
  height: 120%;
  background-color: black;
  color: white;
  overflow: scroll;
`;
export const Div3 = styled.div`
  width: 80%;
  height: 120%;
  background-color: green;
`;

export const CardContainer = styled.div<{ nowIndex: number }>`
  position: relative;
  left: 50%;
  display: flex;
  transform: translateX(
    calc(${(props) => props.nowIndex * -25}vw - 25vw - 5px)
  );
  transition: transform 0.3s ease;
  gap: 5px;
`;

export const Card = styled.div<{ iscenter: boolean }>`
  flex-shrink: 0;
  width: ${(props) => (props.iscenter ? "50vw" : "25vw")};
  opacity: ${(props) => (props.iscenter ? "1" : "0.5")};
  transition: opacity 0.3s ease, width 0.3s ease;
  height: 300px;
  background-color: gray;
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
`;

export const CenterCard = styled(Card)`
  width: 50vw;
  font-size: 28px;
`;
