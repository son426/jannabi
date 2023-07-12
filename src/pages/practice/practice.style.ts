import { styled } from "styled-components";
import backImg1 from "./14401024.png";
import backImg2 from "./19201080.png";
import backImg3 from "./1600900.png";

export const TestDiv = styled.div`
  height: 200vh;
`;

export const BackgroundDiv = styled.div`
  background-image: url(${backImg1});
  width: 100%;
  height: 1020vh;
  position: absolute;
  top: 0;
  z-index: -1;
`;
