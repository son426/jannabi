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

export const Div1 = styled.div`
  border: 2px solid black;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const Div2 = styled.div`
  width: 50%;
  height: 120%;
  background-color: black;
  color: white;
  overflow: scroll;
`;
export const Div3 = styled.div`
  width: 80%;
  height: 120%;
  background-color: green;
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
