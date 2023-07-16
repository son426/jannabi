import { styled } from "styled-components";
import backImg from "./backgreen.png";
import backCursor1 from "../../data/images/backCursor1.png";
import backCursor2 from "../../data/images/backCursor2.png";

interface IIndexProps {
  isOn: boolean;
}

interface IIndexMenuProps {
  selected: boolean;
}

interface IFloatingProps {
  ishovered: boolean;
}

export const BackgroundDiv = styled.div`
  background-image: url(${backImg});
  width: 100%;
  height: 1020vh;
  position: absolute;
  top: 0;
  z-index: -1;
`;

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

export const BackDiv = styled.div`
  width: 40%;
  height: 50vh;
  position: fixed;
  top: 20vh;

  cursor: url(${backCursor1}) 20 30, pointer;
  &:hover {
    animation-name: cursorAnimation;
    animation-duration: 1s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
  }

  @keyframes cursorAnimation {
    0% {
      cursor: url(${backCursor1}) 20 30, auto;
    }
    50% {
      cursor: url(${backCursor2}) 20 30, auto;
    }
    100% {
      cursor: url(${backCursor1}) 20 30, auto;
    }
  }
`;

export const FloatingDiv = styled.div<IFloatingProps>`
  position: fixed;
  top: 30vh;
  right: 10vw;
  width: ${(props) => (props.ishovered ? "200px" : "100px")};
  height: 50px;
  background-color: red;
  transition: width 0.3s ease-in-out;
`;
