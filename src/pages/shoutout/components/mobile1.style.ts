import { styled, keyframes } from "styled-components";

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

interface IString {
  stringvalue: string;
}

export const Content1 = styled.div`
  height: 100vh;
  /* border: 5px solid red; */
  font-size: ${content1Em};
`;

export const LogoDiv = styled.div<IString>`
  background-image: url(${(props) => props.stringvalue});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 35em;
  height: 45em;
  position: absolute;
  top: 12%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
`;

export const MarginDiv = styled.div`
  width: 100%;
  height: 30vh;
  /* border: 1px white solid; */
`;

export const Column = styled.div`
  /* border: 1px solid red; */
  position: relative;
  width: 100%;
  height: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  /* border: 1px solid white; */
  color: white;
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  gap: 2em;
  padding-bottom: 5em;
`;

export const CheckBoxRow = styled.div<{ selected: boolean }>`
  color: ${(props) => (props.selected ? "white" : "gray")};
  font-weight: ${(props) => (props.selected ? "600" : "200")};
  cursor: pointer;
  display: flex;
  gap: 10px;
  p {
    width: 100%;
    font-size: 18px;
    /* border: 1px solid white; */
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
  width: 65%;
  aspect-ratio: 10/13;
  position: absolute;
  animation: ${rotateAnimation} 3s linear infinite;
`;
