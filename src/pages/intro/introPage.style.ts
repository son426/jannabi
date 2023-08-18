import styled, { keyframes, css } from "styled-components";
import { Link } from "react-router-dom";

import arrow from "../../data/images/intro/arrow.png";
import introImg from "../../data/images/intro/intro1.png";

import image from "@/data/images/intro";

interface IClickedProps {
  isclicked: boolean;
}

const blinkAnimation = keyframes`
  0%, 100%{
    filter:brightness(1);
  }
  50%{
    filter:brightness(1.5);
  }
`;

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

export const IntroImgDiv = styled.div<IClickedProps>`
  width: 100%;
  padding-top: 168.4%;
  background-image: url(${introImg});
  background-size: cover;
  position: relative;
  animation: ${scrollAnimation} 7s ease-in-out 1.5s forwards,
    ${({ isclicked }) =>
      isclicked
        ? css`
            ${zoomInAnimation} 2s ease-in forwards
          `
        : "none"};
`;

export const TopDiv = styled.div`
  width: 100%;
  height: 70%;
  background-image: url(${image.top});
  background-size: contain;
  background-repeat: no-repeat;
`;
export const StoreDiv = styled.div`
  width: 100%;
  height: 20%;
  background-image: url(${image.store});
  background-size: contain;
  background-repeat: no-repeat;
`;
export const BottomDiv = styled.div`
  width: 100%;
  height: 100px;
  background-image: url(${image.bottom});
  background-size: contain;
  background-repeat: no-repeat;
`;

export const BlinkingDiv = styled.div`
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translate(-50%, 0%);
  width: 450px;
  height: 280px;
  background-color: rgba(255, 255, 255, 1);

  border: none;
  /* animation: ${blinkAnimation} 2s ease-in-out infinite; */
`;

// export const IntroImageDiv = styled.div<IClickedProps>`
//   pointer-events: none;
//   @media screen and (min-width: 1536px) {
//     background-size: cover;
//     width: 100%;

//     /* animation: ${slideDownAnimation} 5s cubic-bezier(0.42, 0, 0.58, 1) 1s
//         forwards,
//       ${({ isclicked }) =>
//       isclicked
//         ? css`
//             ${zoomInAnimation} 2s ease-in forwards
//           `
//         : "none"}; */
//   }
//   @media screen and (min-width: 501px) and (max-width: 1535px) {
//     background-size: 100%;
//     width: 50%;
//     height: 250%;

//     animation: ${slideDownAnimation} 5s cubic-bezier(0.42, 0, 0.58, 1) 1s
//         forwards,
//       ${({ isclicked }) =>
//         isclicked
//           ? css`
//               ${zoomInAnimation} 2s ease-in forwards
//             `
//           : "none"};
//   }

//   @media screen and (min-width: 416px) and (max-width: 500px) {
//     background-size: contain;
//     width: 100%;
//     transform: scale(1.3) translateY(300px);
//     animation: ${slideDownAnimation2} 5s cubic-bezier(0.42, 0, 0.58, 1) 1s
//         forwards,
//       ${({ isclicked }) =>
//         isclicked
//           ? css`
//               ${zoomInAnimation2} 2s ease-in forwards
//             `
//           : "none"};
//   }
//   @media screen and (max-width: 415px) {
//     background-size: contain;
//     width: 100%;
//     transform: scale(1.1) translateY(300px);
//     animation: ${slideDownAnimation3} 5s cubic-bezier(0.42, 0, 0.58, 1) 1s
//         forwards,
//       ${({ isclicked }) =>
//         isclicked
//           ? css`
//               ${zoomInAnimation3} 2s ease-in forwards
//             `
//           : "none"};
//   }
//   background-image: url(${introImage});
//   background-position: center;
//   background-repeat: no-repeat;
// `;

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
