import styled, { keyframes, css } from "styled-components";
import { Link } from "react-router-dom";
import arrow from "./arrow.png";
import introImage from "./intro.jpg";
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
  width: 100%;
  height: 100vh;
  position: relative;
  border: 3px solid red;
  overflow: hidden;
`;

const slideDownAnimation = keyframes`
  0%{
    pointer-events: none;
  } 
  95%{
    pointer-events: none;
  }
  100%{
    pointer-events: all;
    cursor : pointer;
    transform: translate(0, -58%);
  }
`;

const zoomInAnimation = keyframes`
  0%{
    transform : scale(1) translate(0, -58%);
  } 
  100%{
    transform : scale(4) translate(0, -40%) ;
    
  }
`;

export const IntroImageDiv = styled.div<IClickedProps>`
  background-image: url(${introImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 50%;
  height: 250%;
  border: 1px solid blue;
  animation: ${slideDownAnimation} 5s cubic-bezier(0.42, 0, 0.58, 1) 1s forwards,
    ${({ isclicked }) =>
      isclicked
        ? css`
            ${zoomInAnimation} 2s ease-in forwards
          `
        : "none"};
`;

export const Img = styled.img<IClickedProps>`
  overflow: hidden;
  animation: ${slideDownAnimation} 5s cubic-bezier(0.42, 0, 0.58, 1) 1s forwards;
  transform: ${(props) => (props.isclicked ? "scale(4)" : "scale(2)")};
  /* &:hover {
    transform: ${(props) => (props.isclicked ? "scale(10)" : "scale(2.5)")}
      translate(0, -430px);
    transition: transform 5s cubic-bezier(0.42, 0, 0.58, 1);
    cursor: pointer;
  } */
`;

const floatingAnimation = keyframes`
  0% {
    transform: translateX(-50%);
  }
  50% {
    transform: translateX(50%);
  }
  100% {
    transform: translateX(-50%);
  }
`;

export const FloatingButtonWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

export const FloatingButton = styled.div`
  border-radius: 50%;
  color: red;
  animation: ${floatingAnimation} 2s linear infinite;

  cursor: pointer;
`;

export const FloatingArrow = styled.div`
  background-image: url(${arrow});
  background-position: center;
  width: 100%;
  height: 100%;
`;
