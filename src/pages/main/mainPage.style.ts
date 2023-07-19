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
  border: 5px solid red;
  width: 100%;
  height: 150vh;
  margin: 20vh 0;
`;

export const Shelf = styled.div`
  border: 5px solid black;
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
  border: 3px solid blue;
  width: 950px;
  margin: 0 auto;
  margin-top: 108px;
  height: 19%;
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

export const RegularDiv = styled(Link)`
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
    }
    ${LpDiv} {
      transform: translateX(15px);
    }
  }
`;

/////////////////////////

export const IrregularRow1 = styled.div`
  border: 3px solid blue;
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
  display: block;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
`;

export const Irr1 = styled(SampleLink)<IImageProps>`
  width: 12em;
  height: 3.6em;
  bottom: 8.6em;
  left: 12.3em;
  &:hover {
    transform: translateY(-5px) rotate(3deg);
  }
`;

export const Irr2 = styled(SampleLink)<IImageProps>`
  pointer-events: none;
  width: 12em;
  height: 2.97em;
  bottom: 5.8em;
  left: 11.2em;
  ${Irr1}:hover & {
    transform: translateY(-5px);
  }
`;

export const Irr3 = styled(SampleLink)<IImageProps>`
  pointer-events: none;
  width: 12em;
  height: 2.55em;
  bottom: 3.4em;
  left: 12.3em;
`;

export const Irr4 = styled(SampleLink)<IImageProps>`
  width: 12em;
  height: 3.5em;
  bottom: 0;
  left: 11.7em;
  &:hover {
    transform: translateY(-3px) rotate(-2deg);
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
`;

export const Irr6 = styled(SampleLink)<IImageProps>`
  width: 5.5em;
  height: 11em;
  bottom: 0em;
  left: 28.55em;
  &:hover {
    transform: translateY(-5px);
  }
  &:hover ~ ${Irr5} {
    transform: translateY(-50px);
  }
`;

export const Irr7 = styled(SampleLink)<IImageProps>`
  pointer-events: none;
  width: 4.2em;
  height: 10.3em;
  bottom: 0em;
  left: 32em;
`;

export const Irr8 = styled(SampleLink)<IImageProps>`
  width: 4em;
  height: 10em;
  bottom: 0em;
  left: 35.5em;
`;

/////////////////////////

export const IrregularRow2 = styled.div`
  border: 3px solid blue;
  width: 950px;
  height: 177px;
  margin: 0 auto;
  margin-top: 60px;
  display: flex;
  justify-content: center;
  gap: 2em;
  position: relative;
`;

export const Irr9 = styled(SampleLink)<IImageProps>`
  width: 4em;
  height: 10em;
  bottom: 0em;
  left: 4.5em;
`;

export const Irr10 = styled(SampleLink)<IImageProps>`
  width: 4em;
  height: 7.5em;
  bottom: 0em;
  left: 8.1em;
`;

export const Irr11 = styled(SampleLink)<IImageProps>`
  width: 10em;
  height: 8.6em;
  bottom: 0em;
  left: 10em;
`;

export const Irr12 = styled(SampleLink)<IImageProps>`
  width: 13.5em;
  height: 10.2em;
  bottom: 0em;
  left: 14.2em;
`;

export const Irr13 = styled(SampleLink)<IImageProps>`
  width: 15em;
  height: 3.2em;
  bottom: 0em;
  left: 19em;
`;

export const Irr14 = styled(SampleLink)<IImageProps>`
  width: 14em;
  height: 3.6em;
  bottom: 3em;
  left: 22.38em;
`;

export const Irr15 = styled(SampleLink)<IImageProps>`
  width: 5.5em;
  height: 10.5em;
  bottom: 0em;
  left: 31.5em;
`;

export const Irr16 = styled(SampleLink)<IImageProps>`
  width: 5em;
  height: 10em;
  bottom: 0em;
  left: 35.5em;
`;
