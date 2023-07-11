import { styled } from "styled-components";
import backImg from "./backgreen.png";

export const BackgroundDiv = styled.div`
  background-image: url(${backImg});
  width: 100%;
  height: 1020vh;
  position: absolute;
  top: 0;
  z-index: -1;
`;

interface IIndexProps {
  isOn: boolean;
}

interface IIndexMenuProps {
  selected: boolean;
}

export const Index = styled.div<IIndexProps>`
  color: white;
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  opacity: ${(props) => (props.isOn ? "1" : "0")};
  transition: opacity 0.2s linear;
`;

export const IndexTop = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  position: absolute;
  top: 2vh;
`;

export const IndexBottom = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  position: absolute;
  top: 90vh;
`;

export const IndexMenu = styled.div<IIndexMenuProps>`
  cursor: pointer;
  width: 10%;
  transition: color 0.2s linear;
  font-weight: ${(props) => (props.selected ? "600" : "200")};
  color: ${(props) => (props.selected ? "red" : "white")};
  white-space: pre-line;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.2em;
  &:hover {
    color: red;
    transition: color 0.2s linear;
  }
  p {
    font-size: 0.9em;
    font-weight: 600;
    text-align: center;
  }
`;

export const ContentDiv = styled.div`
  width: 100%;
  height: 100vh;
  color: white;
  border: 1px white solid;
  display: flex;
  justify-content: center;
  align-items: center;
`;
