import styled, { keyframes, css } from "styled-components";
import { Link } from "react-router-dom";
import dollImg from "@/data/images/main/background/doll.png";

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

interface IImageProps {
  img?: string;
  hoveredImg?: string;
}

export const BackgroundDiv = styled.div<IImageProps>`
  background-image: url(${(props) => props.img});
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

// const rowWidth = "690px";
// const shelfHeight = "800px";
// const fontSize = "11.6px";

const rowWidth = "780px";
const shelfHeight = "900px";
const fontSize = "13.1px";

export const ShelfDiv = styled.div`
  width: 100%;
  margin: 20vh 0;
  margin-bottom: 0;
`;

export const Shelf = styled.div<IImageProps>`
  border: 5px solid transparent;
  background-image: url(${(props) => props.img});
  background-size: contain;
  background-position: top;
  background-repeat: no-repeat;
  width: 100%;
  height: ${shelfHeight};
  margin: 0 auto;
  position: relative;
`;

export const RegularRow = styled.div`
  border: 3px solid transparent;
  width: ${rowWidth};
  margin: 0 auto;
  margin-top: calc(${shelfHeight}*0.095);
  height: 19.5%;
  display: flex;
  justify-content: center;
  gap: 3.5%;
`;

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

export const LpDiv = styled.div<IImageProps>`
  background-image: url(${(props) => props.img});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const RegularDiv = styled(Link)<IImageProps>`
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
      filter: brightness(1.1);
    }
    ${LpDiv} {
      transform: translateX(15px);
    }
  }
`;

/////////////////////////

export const IrregularRow1 = styled.div`
  border: 3px solid transparent;
  width: ${rowWidth};
  height: calc(${shelfHeight}*0.19);
  margin: 0 auto;
  margin-top: calc(${shelfHeight}*0.0718);
  display: flex;
  justify-content: center;
  position: relative;
  font-size: ${fontSize};
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
  width: 11.5em;
  aspect-ratio: 227.4/67.79;
  bottom: 0.2em;
  left: 11.5em;
  &:hover {
    transform: translateY(-5px) rotate(-2deg);
    filter: brightness(1.1);
  }
`;

export const Irr1 = styled(SampleLink)<IImageProps>`
  width: 12.5em;
  height: 3.4em;
  bottom: 8.2em;
  left: 13.28em;
  &:hover {
    transform: translateY(-5px) rotate(3deg);
    filter: brightness(1.1);
  }
  ${Irr4}:hover ~ & {
    transform: translateY(-7px);
  }
`;

export const Irr2 = styled(SampleLink)<IImageProps>`
  cursor: default;
  width: 12em;
  height: 2.7em;
  bottom: 5.7em;
  left: 11.2em;
  ${Irr4}:hover ~ & {
    transform: translateY(-7px);
  }
`;

export const Irr3 = styled(SampleLink)<IImageProps>`
  cursor: default;
  width: 11em;
  aspect-ratio: 211/44;
  bottom: 3.5em;
  left: 12.9em;
  ${Irr4}:hover ~ & {
    transform: translateY(-7px);
  }
`;

export const Irr8 = styled(SampleLink)<IImageProps>`
  width: 4em;
  height: 10em;
  bottom: 0em;
  left: 35.5em;
  &:hover {
    transform: translateY(-15px);
    filter: brightness(1.1);
  }
`;

export const Irr6 = styled(SampleLink)<IImageProps>`
  width: 4.5em;
  height: 11em;
  bottom: 0em;
  left: 28.55em;
  &:hover {
    transform: translateY(-5px);
    filter: brightness(1.1);
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
    filter: brightness(1.1);
  }
  ${Irr6}:hover ~ & {
    transform: translateX(-2px) rotate(-2deg);
  }
  ${Irr8}:hover ~ & {
    transform: translateX(-2px) rotate(-2deg);
  }
`;

export const Irr7 = styled(SampleLink)<IImageProps>`
  cursor: default;
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
  width: ${rowWidth};
  height: calc(${shelfHeight}*0.17);
  margin: 0 auto;
  margin-top: calc(${shelfHeight}*0.045);
  font-size: ${fontSize};
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
    filter: brightness(1.1);
  }
`;

export const Irr10 = styled(SampleLink)<IImageProps>`
  cursor: default;
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
    filter: brightness(1.1);
  }
`;

export const Irr15 = styled(SampleLink)<IImageProps>`
  width: 4.5em;
  height: 10.9em;
  bottom: 0em;
  left: 31.5em;
  &:hover {
    transform: translateY(-5px);
    filter: brightness(1.1);
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
    filter: brightness(1.1);
  }
  ${Irr15}:hover ~ & {
    transform: translateX(-2px);
  }
`;

export const Irr11 = styled(SampleLink)<IImageProps>`
  width: 10em;
  height: 8.8em;
  bottom: 0em;
  left: 10em;
  &:hover {
    transform: translateY(-5px);
    filter: brightness(1.1);
  }
  ${Irr14}:hover ~ & {
    transform: translate(1px, -2px) rotate(-1deg);
  }
  ${Irr15}:hover ~ & {
    transform: translate(-2px, -2px) rotate(-2deg);
  }
`;

export const Irr12 = styled(SampleLink)<IImageProps>`
  cursor: default;
  width: 13.5em;
  height: 10.2em;
  bottom: 0em;
  left: 14.2em;
  ${Irr14}:hover ~ & {
    transform: translate(1px, -2px) rotate(-1deg);
  }
  ${Irr15}:hover ~ & {
    transform: translateX(-2px);
  }
`;

export const Irr13 = styled(SampleLink)<IImageProps>`
  cursor: default;
  width: 15em;
  height: 3.2em;
  bottom: 0em;
  left: 19em;
`;

////

export const BottomRow = styled.div`
  border: 3px solid transparent;
  width: ${rowWidth};
  height: calc(${shelfHeight}*0.172);
  margin: 0 auto;
  margin-top: calc(${shelfHeight}*0.02);
  display: flex;
  justify-content: center;
  position: relative;
  font-size: ${fontSize};
`;

export const TyperLink = styled(SampleLink)<IImageProps>`
  width: 16em;
  height: 92%;
  bottom: 0em;
  right: 6.4em;
`;

export const DoorDiv = styled.div`
  width: 26.6em;
  height: 100%;
  position: absolute;
  display: flex;
  bottom: 0em;
  left: 3.9em;
`;

export const ClickDiv = styled.div`
  background-image: url(${dollImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
  width: 24.4%;
  aspect-ratio: 86/41;
  z-index: 2;
  position: absolute;
  top: 47px;
  left: 56px;
  cursor: pointer;
`;

export const LeftDoor = styled.div<IImageProps>`
  background-image: url(${(props) => props.img});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: 50%;
  height: 100%;
  bottom: 0.7em;
  left: 4.4em;
  cursor: pointer;
  transition: all 0.2s linear;
  z-index: 3;
`;

export const RightDoor = styled.div<IImageProps>`
  background-image: url(${(props) => props.img});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: 50%;
  height: 100%;
  bottom: 0.7em;
  left: 17.5em;
  cursor: pointer;
  z-index: 4;
  transition: all 0.2s linear;
`;
