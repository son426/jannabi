import styled, { keyframes } from "styled-components";
import backCursor from "./back.jpg";

export const TestDiv = styled.div`
  /* width: 500px;
  height: 500px;
  background-color: gray;
  position: absolute; */
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
`;

export const Div2 = styled.div`
  width: 100px;
  height: 100px;
  background-color: blue;
  position: absolute;
  top: 60px;
  left: 60px;
`;
export const Div3 = styled.div`
  width: 100px;
  height: 100px;
  background-color: green;
  position: absolute;
  top: 100px;
  left: 100px;
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
