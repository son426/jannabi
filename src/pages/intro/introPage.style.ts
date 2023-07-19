import styled, { keyframes, css } from "styled-components";
import { Link } from "react-router-dom";
import arrow from "./arrow.png";
import introImage from "./intro.jpg";
interface IClickedProps {
  isclicked: boolean;
}

const floatingAnimation = keyframes`
  0% {
    transform: translate(50%, -50%) scale(1);
  }
  25%{
    transform: translate(0%, 0%) scale(1.5);
  }
  50% {
    transform: translate(50%, -50%) scale(1);
  }
  75%{
    transform: translate(0%, 0%) scale(1.5);
  }
  100% {
    transform: translate(50%, -50%) scale(1);
  }
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

const opacityAnimation = keyframes`
  0%{
    opacity : 0;
  } 
  95%{
    opacity : 0;
  }
  100%{
    opacity : 1
  }
`;

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

export const FloatingButtonWrapper = styled.div<IClickedProps>`
  visibility: ${(props) => (props.isclicked ? "hidden" : "")};
  position: absolute;
  top: 55%;
  left: 65%;

  z-index: 1;
  animation: ${floatingAnimation} 4s linear infinite,
    ${opacityAnimation} 6.5s cubic-bezier(0.42, 0, 0.58, 1) forwards;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FloatingButton = styled.div`
  border-radius: 50%;
  color: red;
  font-weight: 600;
`;

export const FloatingArrow = styled.div`
  background-image: url(${arrow});
  background-position: center;
  background-size: contain;
  width: 50px;
  height: 50px;
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
