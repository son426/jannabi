import styled from "styled-components";
import { Link } from "react-router-dom";
import introImage from "images/intro.jpg";

interface IClickedProps {
  isclicked: boolean;
}

export const BlackDiv = styled.div<IClickedProps>`
  width: 100vw;
  height: 100vh;

  justify-content: center;
  background-color: ${(props) => (props.isclicked ? "black" : "white")};
  opacity: ${(props) => (props.isclicked ? "1" : "0")};
  transition: opacity 1.5s ease-in-out, background-color 1.5s ease-in-out;
  display: flex;
  position: fixed;
  top: 0;
  z-index: 10;
  pointer-events: none;
`;

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Img = styled.img<IClickedProps>`
  width: 20vw;
  margin-top: 80vh;
  transform: ${(props) => (props.isclicked ? "scale(4)" : "scale(2.5)")};
  transition: transform 1s;
  &:hover {
    transform: ${(props) => (props.isclicked ? "scale(10)" : "scale(2.5)")}
      translate(0, -430px);
    transition: transform 5s cubic-bezier(0.42, 0, 0.58, 1);
    cursor: pointer;
  }
`;
