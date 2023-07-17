import styled, { keyframes } from "styled-components";
import backImg from "./background.png";
import shelfImg from "./shelf.png";
import LP from "./lp.png";

import { Link } from "react-router-dom";
import irregular5_2 from "./image/irregular/5-2.png";

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
  width: 100%;
  height: 250vh;
  top: 0;
  position: absolute;
  z-index: -2;
`;

export const ShelfDiv = styled.div`
  background-image: url(${shelfImg});
  background-size: 100%;
  /* border: 5px solid red; */
  width: 100%;
  height: 250vh; // background Div랑 같은 vh
  transform: translateY(-13em);
  position: relative;
`;

// 콘텐츠 들어가는 div에 맞게
// 새롭게 div 짜자.

export const RegularRow = styled.div`
  /* border: 3px solid blue; */
  width: 100vw;
  height: 16em;
  position: absolute;
  top: 30.7em;
  display: flex;
  justify-content: center;
  gap: 2em;
`;

interface IImageProps {
  img: string;
}

export const RegularCoverDiv = styled.div<IImageProps>`
  background-image: url(${(props) => props.img});
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 2;
`;

export const LpDiv = styled.div`
  background-image: url(${LP});
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const RegularDiv = styled(Link)`
  display: block;
  width: 17.5em;
  height: 100%;
  position: relative;

  ${RegularCoverDiv}, ${LpDiv} {
    transition: transform 0.3s ease-in-out;
  }
  &:hover {
    cursor: pointer;
    ${RegularCoverDiv} {
      transform: translateX(-10px);
    }
    ${LpDiv} {
      transform: translateX(15px);
    }
  }
`;

/////////////////////////

export const IrregularRow1 = styled.div`
  /* border: 3px solid blue; */
  width: 100vw;
  height: 14em;
  position: relative;
  top: 53.9em;
  display: flex;
  justify-content: center;
  gap: 2em;
`;

const SampleLink = styled(Link)<IImageProps>`
  display: block;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
`;

export const Irr1 = styled(SampleLink)<IImageProps>`
  width: 14em;
  height: 4.5em;
  bottom: 9.3em;
  left: 27.3em;
  &:hover {
    transform: translateY(-5px) rotate(3deg);
  }
`;

export const Irr2 = styled(SampleLink)<IImageProps>`
  pointer-events: none;
  width: 14em;
  height: 3.5em;
  bottom: 6.3em;
  left: 25.8em;
  ${Irr1}:hover & {
    transform: translateY(-5px);
  }
`;

export const Irr3 = styled(SampleLink)<IImageProps>`
  pointer-events: none;
  width: 14em;
  height: 3.1em;
  bottom: 3.5em;
  left: 27.3em;
`;

export const Irr4 = styled(SampleLink)<IImageProps>`
  width: 14em;
  height: 3.85em;
  bottom: 0;
  left: 26em;
  &:hover {
    transform: translateY(-3px) rotate(-2deg);
  }
`;

export const Irr5 = styled(SampleLink)<IImageProps>`
  width: 7em;
  height: 10.5em;
  bottom: 0em;
  left: 41.2em;
  &:hover {
    transform: translateY(-5px);
    background-image: url(${irregular5_2});
  }
`;

export const Irr6 = styled(SampleLink)<IImageProps>`
  width: 6em;
  height: 13.3em;
  bottom: 0em;
  left: 46.6em;
  &:hover {
    transform: translateY(-5px);
  }
  &:hover ~ ${Irr5} {
    transform: translateY(-50px);
  }
`;

export const Irr7 = styled(SampleLink)<IImageProps>`
  pointer-events: none;
  width: 5em;
  height: 12em;
  bottom: 0em;
  left: 51em;
`;

export const Irr8 = styled(SampleLink)<IImageProps>`
  width: 5em;
  height: 12em;
  bottom: 0em;
  left: 55em;
`;

/////////////////////////

export const IrregularRow2 = styled.div`
  /* border: 3px solid blue; */
  width: 100vw;
  height: 13em;
  position: absolute;
  top: 72.6em;
  display: flex;
  justify-content: center;
  gap: 2em;
`;

export const Irr9 = styled(SampleLink)<IImageProps>`
  width: 5em;
  height: 12em;
  bottom: 0em;
  left: 18.5em;
`;

export const Irr10 = styled(SampleLink)<IImageProps>`
  width: 5em;
  height: 9em;
  bottom: 0em;
  left: 23em;
`;

export const Irr11 = styled(SampleLink)<IImageProps>`
  width: 13em;
  height: 10em;
  bottom: 0em;
  left: 25em;
`;

export const Irr12 = styled(SampleLink)<IImageProps>`
  width: 13em;
  height: 12em;
  bottom: 0em;
  left: 30em;
`;

export const Irr13 = styled(SampleLink)<IImageProps>`
  width: 14em;
  height: 3.5em;
  bottom: 0em;
  left: 35.3em;
`;

export const Irr14 = styled(SampleLink)<IImageProps>`
  width: 14em;
  height: 4em;
  bottom: 3.2em;
  left: 39em;
`;

export const Irr15 = styled(SampleLink)<IImageProps>`
  width: 5.5em;
  height: 12.5em;
  bottom: 0em;
  left: 49.5em;
`;

export const Irr16 = styled(SampleLink)<IImageProps>`
  width: 5em;
  height: 12em;
  bottom: 0em;
  left: 54.2em;
`;
