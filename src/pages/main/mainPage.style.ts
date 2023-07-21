import styled, { keyframes, css } from "styled-components";
import backImg from "./image/background.png";
import shelfImg from "./image/shelf.png";
import LP from "./image/lp.png";

import { Link } from "react-router-dom";

import regular1_2 from "./image/regular/regular1-2.png";
import regular2_2 from "./image/regular/regular2-2.png";
import regular3_2 from "./image/regular/regular3-2.png";

import irregular1 from "./image/irregular/1.png";
import irregular4 from "./image/irregular/4.png";
import irregular5 from "./image/irregular/5.png";
import irregular6 from "./image/irregular/6.png";
import irregular8 from "./image/irregular/8.png";
import irregular9 from "./image/irregular/9.png";
import irregular11 from "./image/irregular/11.png";
import irregular14 from "./image/irregular/14.png";
import irregular15 from "./image/irregular/15.png";
import irregular16 from "./image/irregular/16.png";
import irregular1_2 from "./image/irregular/1-2.png";
import irregular4_2 from "./image/irregular/4-2.png";
import irregular5_2 from "./image/irregular/5-2.png";
import irregular6_2 from "./image/irregular/6-2.png";
import irregular8_2 from "./image/irregular/8-2.png";
import irregular9_2 from "./image/irregular/9-2.png";
import irregular11_2 from "./image/irregular/11-2.png";
import irregular14_2 from "./image/irregular/14-2.png";
import irregular15_2 from "./image/irregular/15-2.png";
import irregular16_2 from "./image/irregular/16-2.png";

const regular2 = [regular1_2, regular2_2, regular3_2];

const slideLeftAnimation = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-5px);
  }
`;

const slideRightAnimation = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(5px);
  }
`;

export const BackgroundDiv = styled.div`
  background-image: url(${backImg});
  background-position: center;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  top: 0;
  position: absolute;
  z-index: -2;
  overflow: scroll;
`;

// margin 체크
// irregular 에서 어떻게 할지.

export const ShelfDiv = styled.div`
  border: 5px solid transparent;
  width: 100%;
  height: 150vh;
  margin: 20vh 0;
`;

export const Shelf = styled.div`
  border: 5px solid transparent;
  background-image: url(${shelfImg});
  background-size: contain;
  background-position: top;
  background-repeat: no-repeat;
  width: 100%;
  height: 1100px;
  margin: 0 auto;
  position: relative;
`;

export const RegularRow = styled.div`
  border: 3px solid transparent;
  width: 950px;
  margin: 0 auto;
  margin-top: 105px;
  height: 19.5%;
  display: flex;
  justify-content: center;
  gap: 3.5%;
`;

interface IImageProps {
  img: string;
}

export const RegularCoverDiv = styled.div<IImageProps>`
  background-image: url(${(props) => props.img});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100%;
  /* border: 1px solid red; */
  position: absolute;
  z-index: 2;
`;

export const LpDiv = styled.div`
  background-image: url(${LP});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const RegularDiv = styled(Link)<{ series: number }>`
  display: block;
  width: 25%;
  height: 110%;
  bottom: 4.5%;

  position: relative;

  ${RegularCoverDiv}, ${LpDiv} {
    transition: transform 0.3s ease-in-out;
  }
  &:hover {
    cursor: pointer;
    ${RegularCoverDiv} {
      transform: translateX(-10px);
      background-image: ${({ series }) =>
        series ? `url(${regular2[series - 1]})` : "none"};
    }
    ${LpDiv} {
      transform: translateX(15px);
    }
  }
`;

/////////////////////////

export const IrregularRow1 = styled.div`
  border: 3px solid transparent;
  width: 950px;
  height: 185px;
  margin: 0 auto;
  margin-top: 102px;
  display: flex;
  justify-content: center;
  gap: 2em;
  position: relative;
`;

const SampleLink = styled(Link)<IImageProps>`
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
`;

export const Irr4 = styled(SampleLink)<IImageProps>`
  width: 12em;
  height: 3.5em;
  bottom: 0;
  left: 11.9em;
  &:hover {
    transform: translateY(-5px) rotate(-2deg);
    background-image: url(${irregular4_2});
  }
`;

export const Irr1 = styled(SampleLink)<IImageProps>`
  width: 12em;
  height: 3.6em;
  bottom: 8.6em;
  left: 12.3em;
  &:hover {
    transform: translateY(-5px) rotate(3deg);
    background-image: url(${irregular1_2});
  }
  ${Irr4}:hover ~ & {
    transform: translateY(-10px);
  }
`;

export const Irr2 = styled(SampleLink)<IImageProps>`
  width: 12em;
  height: 2.97em;
  bottom: 5.8em;
  left: 11.2em;
  ${Irr4}:hover ~ & {
    transform: translateY(-10px);
  }
`;

export const Irr3 = styled(SampleLink)<IImageProps>`
  width: 12em;
  height: 2.55em;
  bottom: 3.4em;
  left: 12.3em;
  ${Irr4}:hover ~ & {
    transform: translateY(-10px);
  }
`;

export const Irr8 = styled(SampleLink)<IImageProps>`
  width: 4em;
  height: 10em;
  bottom: 0em;
  left: 35.5em;
  &:hover {
    transform: translateY(-15px);
    background-image: url(${irregular8_2});
  }
`;

export const Irr6 = styled(SampleLink)<IImageProps>`
  width: 4.5em;
  height: 11em;
  bottom: 0em;
  left: 28.55em;
  &:hover {
    transform: translateY(-5px);
    background-image: url(${irregular6_2});
  }

  ${Irr8}:hover ~ & {
    transform: translateX(-2px) rotate(-2deg);
  }
`;

export const Irr5 = styled(SampleLink)<IImageProps>`
  width: 5.5em;
  height: 9em;
  bottom: 0em;
  left: 24em;

  &:hover {
    transform: translateY(-5px);
    background-image: url(${irregular5_2});
  }

  ${Irr6}:hover ~ & {
    transform: translateX(-2px) rotate(-2deg);
  }

  ${Irr8}:hover ~ & {
    transform: translateX(-2px) rotate(-2deg);
  }
`;

export const Irr7 = styled(SampleLink)<IImageProps>`
  pointer-events: none;
  width: 4.2em;
  height: 10.3em;
  bottom: 0em;
  left: 32.1em;
  ${Irr8}:hover ~ & {
    transform: translateX(-2px) rotate(-2deg);
  }
`;

/////////////////////////

export const IrregularRow2 = styled.div`
  border: 3px solid transparent;
  width: 950px;
  height: 177px;
  margin: 0 auto;
  margin-top: 63px;
  display: flex;
  justify-content: center;
  gap: 2em;
  position: relative;
`;

export const Irr9 = styled(SampleLink)<IImageProps>`
  width: 4em;
  height: 10.2em;
  bottom: 0em;
  left: 4.5em;
  &:hover {
    transform: translateY(-5px);
    background-image: url(${irregular9_2});
  }
`;

export const Irr10 = styled(SampleLink)<IImageProps>`
  width: 4em;
  height: 7.7em;
  bottom: 0em;
  left: 8.1em;

  ${Irr9}:hover ~ & {
    transform: translateX(0.5px) rotate(0.5deg);
  }
`;

export const Irr16 = styled(SampleLink)<IImageProps>`
  width: 5em;
  height: 10.1em;
  bottom: 0em;
  left: 35.5em;
  &:hover {
    transform: translateY(-10px);
    background-image: url(${irregular16_2});
  }
`;

export const Irr15 = styled(SampleLink)<IImageProps>`
  width: 4.5em;
  height: 10.9em;
  bottom: 0em;
  left: 31.5em;
  background-image: url(${irregular15_2});
  &:hover {
    transform: translateY(-5px);
    background-image: url(${irregular15_2});
  }
  ${Irr16}:hover ~ & {
    transform: translateX(-1px) rotate(-1.5deg);
  }
`;

export const Irr14 = styled(SampleLink)<IImageProps>`
  width: 9.9em;
  height: 3.6em;
  bottom: 2.95em;
  left: 22.5em;
  &:hover {
    transform: translateY(-5px);
    background-image: url(${irregular14_2});
  }
  ${Irr15}:hover ~ & {
    transform: translateX(-2px);
  }
`;

export const Irr11 = styled(SampleLink)<IImageProps>`
  width: 10em;
  height: 8.8em;
  bottom: 0em;
  left: 10.2em;
  &:hover {
    transform: translateY(-5px);
    background-image: url(${irregular11_2});
  }
  ${Irr14}:hover ~ & {
    transform: translate(3px, -2px) rotate(-2deg);
  }
  ${Irr15}:hover ~ & {
    transform: translate(-2px, -2px) rotate(-2deg);
  }
`;

export const Irr12 = styled(SampleLink)<IImageProps>`
  pointer-events: none;
  width: 13.5em;
  height: 10.2em;
  bottom: 0em;
  left: 14.4em;
  ${Irr14}:hover ~ & {
    transform: translate(3px, -1px) rotate(-2deg);
  }
  ${Irr15}:hover ~ & {
    transform: translateX(-2px);
  }
`;

export const Irr13 = styled(SampleLink)<IImageProps>`
  width: 15em;
  height: 3.2em;
  bottom: 0em;
  left: 19em;
`;
