import styled, { keyframes } from "styled-components";
import backCursor from "./back.jpg";
import { positionCenter } from "@/constants/style";

export const Container = styled.div`
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
`;

export const Container1 = styled.div`
  width: 100%;
  border: 3px solid red;
  height: 100vh;
  position: relative;
  top: 0;
`;

export const Div2 = styled.div`
  width: 300px;
  height: 300px;
  background-color: blue;
  position: absolute;
  ${positionCenter};
`;

export const Div3 = styled.div`
  width: 300px;
  height: 300px;
  background-color: green;
  position: absolute;
  ${positionCenter};
`;

export const Container2 = styled.div`
  width: 100%;
  height: 100vh;
  border: 3px solid pink;
  position: relative;
`;

export const Div4 = styled.div`
  width: 300px;
  height: 300px;
  background-color: pink;
  ${positionCenter};
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
