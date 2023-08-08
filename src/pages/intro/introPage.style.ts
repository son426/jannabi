import styled, { keyframes, css } from "styled-components";
import { Link } from "react-router-dom";

import arrow from "../../data/images/intro/arrow.png";
import introImage from "../../data/images/intro/intro.jpg";

// import arrow from "@data/images/intro/arrow.png";
// import introImage from "@data/images/intro/intro.jpg";

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
  border: 3px solid transparent;
  overflow: hidden;
`;

// 태블릿
const slideDownAnimation1 = keyframes`
  0%{
    pointer-events: none;
    transform: scale(1.5);
  } 
  95%{
    pointer-events: none;
  }
  100%{
    pointer-events: all;
    cursor : pointer;
    transform: translate(0, -52%) scale(1.5);
  }
`;

const zoomInAnimation1 = keyframes`
  0%{
    transform : scale(1.5) translate(0, -52%);
  } 
  100%{
    transform : scale(4) translate(0, -40%) ;
  }
`;

// 큰 모바일
const slideDownAnimation2 = keyframes`
  0%{
    pointer-events: none;
    transform: scale(1.3) translateY(300px);
  } 
  95%{
    pointer-events: none;
  }
  100%{
    pointer-events: all;
    cursor : pointer;
    transform: translate(0, -100px) scale(1.3);
  }
`;

const zoomInAnimation2 = keyframes`
  0%{
    transform : scale(1.3) translate(0, -100px);
  } 
  100%{
    transform : scale(4) translate(0, -400px) ;
  }
`;

// 작은 모바일
const slideDownAnimation3 = keyframes`
  0%{
    pointer-events: none;
    transform: scale(1.1) translateY(300px);
  } 
  95%{
    pointer-events: none;
  }
  100%{
    pointer-events: all;
    cursor : pointer;
    transform: translate(0, -100px) scale(1.1);
  }
`;

const zoomInAnimation3 = keyframes`
  0%{
    transform : scale(1.1) translate(0, -100px);
  } 
  100%{
    transform : scale(4) translate(0, -400px) ;
  }
`;

export const IntroImageDiv = styled.div<IClickedProps>`
  pointer-events: none;
  @media screen and (min-width: 1536px) {
    background-size: cover;
    width: 50%;
    height: 250%;
    animation: ${slideDownAnimation} 5s cubic-bezier(0.42, 0, 0.58, 1) 1s
        forwards,
      ${({ isclicked }) =>
        isclicked
          ? css`
              ${zoomInAnimation} 2s ease-in forwards
            `
          : "none"};
  }
  @media screen and (min-width: 501px) and (max-width: 1535px) {
    background-size: 100%;
    width: 50%;
    height: 250%;

    animation: ${slideDownAnimation} 5s cubic-bezier(0.42, 0, 0.58, 1) 1s
        forwards,
      ${({ isclicked }) =>
        isclicked
          ? css`
              ${zoomInAnimation} 2s ease-in forwards
            `
          : "none"};
  }

  @media screen and (min-width: 416px) and (max-width: 500px) {
    background-size: contain;
    width: 100%;
    transform: scale(1.3) translateY(300px);
    animation: ${slideDownAnimation2} 5s cubic-bezier(0.42, 0, 0.58, 1) 1s
        forwards,
      ${({ isclicked }) =>
        isclicked
          ? css`
              ${zoomInAnimation2} 2s ease-in forwards
            `
          : "none"};
  }
  @media screen and (max-width: 415px) {
    background-size: contain;
    width: 100%;
    transform: scale(1.1) translateY(300px);
    animation: ${slideDownAnimation3} 5s cubic-bezier(0.42, 0, 0.58, 1) 1s
        forwards,
      ${({ isclicked }) =>
        isclicked
          ? css`
              ${zoomInAnimation3} 2s ease-in forwards
            `
          : "none"};
  }
  background-image: url(${introImage});
  background-position: center;
  background-repeat: no-repeat;
`;

export const TestDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  font-size: 20px;

  @media screen and (max-width: 1535px) {
    &:after {
      content: "작은 버젼";
    }
  }
  @media screen and (min-width: 1536px) {
    &:after {
      content: "큰 버젼";
    }
  }
  @media screen and (max-width: 500px) {
    &:after {
      content: "모바일";
    }
  }
`;
