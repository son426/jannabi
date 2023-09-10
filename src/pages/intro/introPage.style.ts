import styled, { keyframes, css } from "styled-components";
import { Link } from "react-router-dom";

import arrow from "../../data/images/intro/arrow.png";
import introImg from "../../data/images/intro/intro1.png";

import image from "@/data/images/intro";

interface IClickedProps {
  isclicked: boolean;
}

interface IString {
  stringvalue: string;
}

interface IStartAnimation {
  startanimation: boolean;
}

const zoomInAnimation = keyframes`
  0%{
    transform : scale(1) translateY(calc(-100% + 100vh));
  } 
  100%{
    transform : scale(4) translateY(calc(-57% + 100vh));
  }
`;

const scrollAnimation = keyframes`
  0% {
    pointer-events: none;
    cursor : default;
    transform: translateY(0);
  }
  99%{
    pointer-events: none;
    cursor : default;
  }
  100% {
    pointer-events: all;
    cursor : pointer;
    transform: translateY(calc(-100% + 100vh));
  }
`;

export const BlackDiv = styled.div<IClickedProps>`
  width: 100vw;
  height: 100vh;

  justify-content: center;
  background-color: ${(props) => (props.isclicked ? "black" : "white")};
  opacity: ${(props) => (props.isclicked ? "1" : "0")};
  transition: opacity 1s ease-in-out, background-color 1s ease-in-out;
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
  overflow: hidden;
`;

interface IIntroImgProps extends IClickedProps, IString, IStartAnimation {}

export const IntroImgDiv = styled.div<IIntroImgProps>`
  width: 100%;
  padding-top: 168.4%;
  background-image: url(${(props) => props.stringvalue});
  background-size: cover;
  position: relative;
  animation: ${(props) =>
    props.startanimation
      ? css`
          ${scrollAnimation} 7s ease-in-out 0.5s forwards,
          ${props.isclicked
            ? css`
                ${zoomInAnimation} 2s ease-in forwards
              `
            : "none"}
        `
      : "none"};
`;
