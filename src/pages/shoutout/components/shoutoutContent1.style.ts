import { styled, keyframes } from "styled-components";
import Logo from "../assets/logo.png";

const rotateAnimation = keyframes`
  0% {
    transform: rotateZ(-10deg);
  }
  50% {
    transform: rotateZ(10deg);
  }
  100% {
    transform: rotateZ(-10deg);
  }
`;

const translateZAnimation = keyframes`
  0% {
    transform: translateZ(0);
  }
  50% {
    transform: translateZ(50px);
  }
  100% {
    transform: translateZ(0);
  }
`;

const content1Em = "1.4vw";

export const Content1 = styled.div`
  height: 100vh;
  /* border: 5px solid red; */
  font-size: ${content1Em};
`;

export const LogoDiv = styled.div`
  background-image: url(${Logo});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 8em;
  height: 12em;
  position: absolute;
  top: 12%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  @media screen and (min-width: 501px) {
  }
  @media screen and (max-width: 767px) {
    width: 50%;
    aspect-ratio: 2/1;
  }
`;

export const MarginDiv = styled.div`
  width: 100%;
  height: 15vh;
  /* border: 1px white solid; */
  @media screen and (max-width: 767px) {
    height: 35vh;
  }
`;

export const Column = styled.div`
  border: 1px solid red;
  position: relative;
  width: 40%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2em;
  @media screen and (max-width: 767px) {
    width: 100%;
    height: 30vh;
  }
`;

export const Title = styled.div`
  /* border: 1px solid white; */
  white-space: pre-line;
  font-size: 2em;
  line-height: 1.25em;
  font-weight: 600;
  color: white;
  width: 80%;
`;

export const SubTitle = styled.div`
  /* border: 1px solid white; */
  white-space: pre-line;
  font-size: 0.65em;
  line-height: 1.3em;
  font-weight: 100;
  color: white;
  width: 80%;
`;

export const CheckBox = styled.div`
  color: white;
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  font-size: 0.6em;
  @media screen and (max-width: 767px) {
    height: 70%;
    gap: 1em;
    font-size: 2em;
    align-items: center;
    justify-content: end;
  }
`;

export const CheckBoxRow = styled.div<{ selected: boolean }>`
  color: ${(props) => (props.selected ? "white" : "gray")};
  font-weight: ${(props) => (props.selected ? "600" : "200")};
  cursor: pointer;
  display: flex;
  p {
    width: 6em;
  }
`;

interface IImageProps {
  img: string;
}

export const Card = styled.div<IImageProps>`
  background-image: url(${(props) => props.img});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 15em;
  height: 20em;
  position: absolute;
  animation: ${rotateAnimation} 3s linear infinite;
  @media screen and (max-width: 767px) {
    width: 80%;
    height: 180%;
    align-items: center;
  }
`;
