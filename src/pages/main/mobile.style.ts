import { Link } from "react-router-dom";
import { styled } from "styled-components";

// shelf height
// 컴퓨터 1100
// 모바일 650

interface IImageProps {
  img?: string;
  hoveredImg?: string;
}

export const BackgroundDiv = styled.div<IImageProps>`
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  width: 200%;
  min-width: 800px;
  min-height: 100vh;
  display: flex;
  align-items: end;
  justify-content: center;
`;
export const ShelfDiv = styled.div<IImageProps>`
  border: 5px solid transparent;
  background-image: url(${(props) => props.img});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom;
  width: 600px;
  height: 650px;
  margin: 0 auto;
  font-size: 9.45px;
`;

export const RegularRow = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 53px;
  height: 130px;
  display: flex;
  justify-content: center;
  gap: 15px;
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
  width: 140px;
  height: 140px;

  aspect-ratio: 1/1;

  position: relative;

  ${RegularCoverDiv}, ${LpDiv} {
    transition: transform 0.3s ease-in-out;
  }
  &:hover {
    cursor: pointer;
    ${RegularCoverDiv} {
      transform: translateX(-10px);
      background-image: url(${(props) => props.hoveredImg});
    }
    ${LpDiv} {
      transform: translateX(15px);
    }
  }
`;

//////

export const IrregularRow1 = styled.div`
  border: 3px solid transparent;
  width: 100%;
  height: 120px;
  margin: 0 auto;
  margin-top: 54px;
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
  left: 13.4em;
  &:hover {
    transform: translateY(-5px) rotate(-2deg);
    background-image: url(${(props) => props.hoveredImg});
  }
`;

export const Irr1 = styled(SampleLink)<IImageProps>`
  width: 12em;
  height: 3.6em;
  bottom: 8.6em;
  left: 13.8em;
  &:hover {
    transform: translateY(-5px) rotate(3deg);
    background-image: url(${(props) => props.hoveredImg});
  }
  ${Irr4}:hover ~ & {
    transform: translateY(-7px);
  }
`;

export const Irr2 = styled(SampleLink)<IImageProps>`
  width: 12em;
  height: 2.97em;
  bottom: 5.8em;
  left: 12.7em;
  ${Irr4}:hover ~ & {
    transform: translateY(-7px);
  }
`;

export const Irr3 = styled(SampleLink)<IImageProps>`
  width: 12em;
  height: 2.55em;
  bottom: 3.4em;
  left: 13.8em;
  ${Irr4}:hover ~ & {
    transform: translateY(-7px);
  }
`;

export const Irr8 = styled(SampleLink)<IImageProps>`
  width: 4em;
  height: 10em;
  bottom: 0em;
  left: 37em;
  &:hover {
    transform: translateY(-15px);
    background-image: url(${(props) => props.hoveredImg});
  }
`;

export const Irr6 = styled(SampleLink)<IImageProps>`
  width: 4.5em;
  height: 11em;
  bottom: 0em;
  left: 30.05em;
  &:hover {
    transform: translateY(-5px);
    background-image: url(${(props) => props.hoveredImg});
  }

  ${Irr8}:hover ~ & {
    transform: translateX(-2px) rotate(-2deg);
  }
`;

export const Irr5 = styled(SampleLink)<IImageProps>`
  width: 5.5em;
  height: 9em;
  bottom: 0em;
  left: 25.5em;
  &:hover {
    transform: translateY(-5px);
    background-image: url(${(props) => props.hoveredImg});
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
  left: 33.6em;
  ${Irr8}:hover ~ & {
    transform: translateX(-2px) rotate(-2deg);
  }
`;

/////////////////////////

export const IrregularRow2 = styled.div`
  border: 3px solid transparent;
  width: 100%;
  height: 110px;
  margin: 0 auto;
  margin-top: 29px;
  display: flex;
  justify-content: center;
  gap: 2em;
  position: relative;
`;

export const Irr9 = styled(SampleLink)<IImageProps>`
  width: 4em;
  height: 10.2em;
  bottom: 0em;
  left: 6em;
  &:hover {
    transform: translateY(-5px);
    background-image: url(${(props) => props.hoveredImg});
  }
`;

export const Irr10 = styled(SampleLink)<IImageProps>`
  width: 4em;
  height: 7.7em;
  bottom: 0em;
  left: 9.6em;

  ${Irr9}:hover ~ & {
    transform: translateX(0.5px) rotate(0.5deg);
  }
`;

export const Irr16 = styled(SampleLink)<IImageProps>`
  width: 5em;
  height: 10.1em;
  bottom: 0em;
  left: 37em;
  &:hover {
    transform: translateY(-10px);
    background-image: url(${(props) => props.hoveredImg});
  }
`;

export const Irr15 = styled(SampleLink)<IImageProps>`
  width: 4.5em;
  height: 10.9em;
  bottom: 0em;
  left: 33em;
  &:hover {
    transform: translateY(-5px);
    background-image: url(${(props) => props.hoveredImg});
  }
  ${Irr16}:hover ~ & {
    transform: translateX(-1px) rotate(-1.5deg);
  }
`;

export const Irr14 = styled(SampleLink)<IImageProps>`
  width: 9.9em;
  height: 3.6em;
  bottom: 2.95em;
  left: 24em;
  &:hover {
    transform: translateY(-5px);
    background-image: url(${(props) => props.hoveredImg});
  }
  ${Irr15}:hover ~ & {
    transform: translateX(-2px);
  }
`;

export const Irr11 = styled(SampleLink)<IImageProps>`
  width: 10em;
  height: 8.8em;
  bottom: 0em;
  left: 11.7em;
  &:hover {
    transform: translateY(-5px);
    background-image: url(${(props) => props.hoveredImg});
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
  left: 15.9em;
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
  left: 20.5em;
`;
