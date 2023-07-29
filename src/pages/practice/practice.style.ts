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
  background-color: pink;
  margin-top: 700px;
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

interface IBoolean {
  isboolean: boolean;
}

const Wrapper = styled.div`
  overflow: hidden; /* Hide overflow to prevent content from scrolling before the transition */
`;

const ContentContainer = styled.div<IBoolean>`
  position: ${(props) => (props.isboolean ? "static" : "fixed")};
  top: ${(props) => (props.isboolean ? "0" : "1000px")};
  left: 0;
  width: 100%;
  height: 100%;
  transition: top 0.5s ease; /* Add transition to create a smooth scrolling effect */
`;
