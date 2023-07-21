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

const content1Em = "20px";

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
  width: 5em;
  height: 10em;
  position: absolute;
  top: 12%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
`;

export const MarginDiv = styled.div`
  width: 100%;
  height: 15vh;
  /* border: 1px white solid; */
`;

export const Column = styled.div`
  /* border: 1px solid red; */
  position: relative;
  width: 45%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2em;
`;

export const Title = styled.div`
  /* border: 1px solid white; */
  white-space: pre-line;
  font-size: 1.7em;
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
`;
