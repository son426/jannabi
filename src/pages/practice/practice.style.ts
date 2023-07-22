import styled, { keyframes } from "styled-components";
import backCursor from "./back.jpg";

// media screen

export const TestDiv = styled.div`
  border: 3px solid black;
  width: 500px;
  height: 100px;
  @media screen and (max-width: 500px) {
    background-color: aquamarine;
  }
`;

export const Div = styled.div`
  .red,
  .green,
  .blue {
    position: absolute;
    width: 100px;
    color: white;
    line-height: 100px;
    text-align: center;
  }
  .red {
    z-index: 1;
    top: 20px;
    left: 20px;
    background: red;
  }

  .green {
    top: 60px;
    left: 60px;
    background: green;
  }

  .blue {
    top: 100px;
    left: 100px;
    background: blue;
  }
`;

export const Div1 = styled.div`
  width: 100px;
  height: 100px;
  background-color: red;
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 1;
  &:hover {
    background-color: black;
  }
`;

export const Div2 = styled.div`
  width: 100px;
  height: 100px;
  background-color: blue;
  position: absolute;
  top: 60px;
  left: 60px;
  &:hover {
    ${Div1} {
      background-color: pink;
    }
  }
`;
export const Div3 = styled.div`
  width: 100px;
  height: 100px;
  background-color: green;
  position: absolute;
  top: 100px;
  left: 100px;
  ${Div1}:hover ~ & {
    background-color: gray;
  }
`;

// const typing = keyframes`
//   from{
//     width:0;
//   }
// `;

// export const TestDiv = styled.div`
//   animation: typing 1s steps(40, end);
//   overflow: hidden;
//   white-space: nowrap;
//   border-right: 0.15em solid #000;
//   font-family: monospace;
// `;

export const BackgroundDiv = styled.div`
  width: 100%;
`;
