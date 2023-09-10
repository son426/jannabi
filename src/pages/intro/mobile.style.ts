import styled, { keyframes, css } from "styled-components";
import introImg from "../../data/images/intro/intro1.png";
import bg from "../../data/images/intro/bg.png";

interface IClickedProps {
  isclicked: boolean;
}

const zoomInAnimation = keyframes`
    0%{
      transform : scale(1) translateY(calc(-100% + var(--vh, 1vh) * 100))
    } 
    100%{
      transform : scale(4) translateY(calc(-57% + var(--vh, 1vh) * 100));
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
      transform: translateY(calc(-100% + var(--vh, 1vh) * 100));
    }
  `;

export const BlackDiv = styled.div<IClickedProps>`
  width: 100vw;
  height: calc(var(--vh, 1vh) * 100);

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
  height: calc(var(--vh, 1vh) * 100);
  overflow: hidden;
`;

export const IntroImgDiv = styled.div<IClickedProps>`
  width: 100%;
  padding-top: 220%;
  background-image: url(${introImg});
  background-size: cover;
  background-position: center;
  position: relative;

  animation: ${scrollAnimation} 4s ease-in-out 1.5s forwards,
    ${({ isclicked }) =>
      isclicked
        ? css`
            ${zoomInAnimation} 2s ease-in forwards
          `
        : "none"};
`;
