import { styled } from "styled-components";
import * as image from "./image/index";

interface IBackgroundProps {
  backgroundcolor: string | undefined;
}

interface IContentProps {
  fontcolor: string | undefined;
}

export const BackButton = styled.div`
  position: fixed;
  top: 10px;
  left: 10px;
  cursor: pointer;
  width: 30px;
  height: 30px;
  border: 1px solid black;
  z-index: 1;
`;

export const BackgroundDiv = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: #d24a3e;
`;

export const TextWrapper = styled.div`
  white-space: pre-wrap;
  text-align: center;
  width: 37%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  color: white;
  font-size: 18px;
  padding: 2em 3em;
  position: relative;
`;
export const Title = styled.h1`
  font-weight: 600;
  font-size: 3em;
  margin-bottom: 3%;
`;
export const Subtitle = styled.h2`
  font-size: 0.6em;
  font-weight: 100;
  margin-bottom: 10%;
`;
export const Description = styled.p`
  font-size: 0.6em;
  font-weight: 600;
  word-break: keep-all;
  margin-bottom: 50%;
`;
export const Footer = styled.div`
  font-size: 0.55em;
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translate(-50%, 0);
  line-height: 1.5em;
`;

export const ImageWrapper = styled.div`
  width: 63%;
  height: 100vh;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 2fr 1fr;

  gap: 5px; /* Adjust this value for the desired gap between images */
`;

const ImageDiv = styled.div`
  background-repeat: no-repeat;
`;

export const ImageDiv1 = styled(ImageDiv)`
  background-size: 115% 115%;
  background-position: center;
  background-image: url(${image.she1});
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row: 1;
  width: 100%;
  height: 100%;
`;
export const ImageDiv2 = styled(ImageDiv)`
  background-image: url(${image.she2});
  background-size: 115% 115%;
  background-position: left;
  grid-column-start: 4;
  grid-column-end: 6;
  grid-row: 1;
  width: 100%;
  height: 100%;
`;
export const ImageDiv3 = styled(ImageDiv)`
  background-image: url(${image.she3});
  background-size: 110% 100%;
  background-position: center;
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row: 2;
  width: 100%;
  height: 100%;
`;
export const ImageDiv4 = styled(ImageDiv)`
  background-image: url(${image.she4});
  background-size: 100% 100%;
  background-position: center;
  grid-column-start: 3;
  grid-column-end: 6;
  grid-row: 2;
  width: 100%;
  height: 100%;
`;

export const ContentColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  white-space: pre-line;
  height: 300px; // 같은 값
  width: calc(100vw - 300px);
`;
