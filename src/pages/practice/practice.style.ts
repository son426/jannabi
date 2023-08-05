import styled, { css, keyframes } from "styled-components";
import backCursor from "./back.jpg";
import { positionCenter } from "@/constants/style";
import image from "@/data/images/irregular";

const h1 = "64px";
const h2 = "48px";
const h3 = "24px";
const h4 = "16px";
const h5 = "14px";

const b1 = "28px";
const b2 = "24px";
const b3 = "18px";
const b4 = "16px";
const b5 = "12px";

const bold = "700";
const semibold = "500";
const medium = "300";
const thin = "100";

const red = "#A0262D";
const darkred = "#401F1F";
const gray = "#A3A3A3";

const drift = keyframes`
  from { transform: rotate(0deg); }
  from { transform: rotate(360deg); }
`;

const waveAnimation = keyframes`
    0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 500vh;
  background-color: black;
`;

export const WaveContainer = styled.div`
  position: relative;
  width: 500px;
  height: 500px;
  border: 3px solid red;
  overflow: hidden;
`;

export const Wave = styled.svg`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: auto;
  /* animation: ${waveAnimation} 4s linear infinite; */
`;

export const TestDiv3 = styled.div`
  height: 100vh;
  aspect-ratio: 1/1;
  background-color: red;
  background-image: url(${image.she});
  background-size: contain;
  position: relative;
`;

export const TestDiv2 = styled.div`
  width: 100%;
  height: 300px;
  background-color: pink;
  opacity: 0.5;
  position: absolute;
  bottom: 0;
`;

export const ImageWaveBox = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 5px;
  opacity: 0.5;
  position: relative;
  overflow: hidden;
`;
export const ImageWave = styled.div`
  opacity: 0.4;
  position: absolute;
  left: -160%;
  bottom: 40%;
  background: transparent;
  height: calc(400vh);
  aspect-ratio: 1/1;
  border-radius: 43%;
  animation: ${drift} 3000ms infinite linear;
`;
export const ImageWave1 = styled(ImageWave)``;
export const ImageWave2 = styled(ImageWave)`
  animation: ${drift} 5000ms infinite linear;
`;
export const ImageWave3 = styled(ImageWave)`
  animation: ${drift} 7000ms infinite linear;
  opacity: 0.1;
  background: #fff;
`;

export const TestSvg = styled.rect`
  transition: height 1s ease;
`;

export const DragDiv1 = styled.div`
  width: 100px;
  height: 100px;
  background-color: red;
  margin: 30px auto;
  cursor: pointer;
  position: relative;
`;

export const MenuDiv = styled.div`
  width: 300px;
  height: 300px;
  background-color: blue;
`;

export const Container = styled.div<{ isboolean: boolean }>`
  /* display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: repeat(1fr);
  grid-gap: 10px; */
  width: 70%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;

interface ITest {
  size?: string;
}

interface IBoolean {
  isboolean?: boolean;
}

interface IImageProps {
  img?: string;
  hoveredimg?: string;
}
export const Item = styled.div<IBoolean>`
  height: 100px;
  width: ${(props) => (props.isboolean ? "100%" : "32%")};
  aspect-ratio: ${(props) => (props.isboolean ? "1/0.72" : "1/1.18")};
  display: flex;
  position: relative;
  background-color: darkviolet;
`;

interface ICardProps extends IBoolean, IImageProps {}
export const CardDiv = styled.div<ICardProps>`
  width: ${(props) => (props.isboolean ? "100%" : "32%")};
  aspect-ratio: ${(props) => (props.isboolean ? "1/0.72" : "1/1.18")};
  background-image: url(${(props) => props.img});
  background-size: ${(props) => (props.isboolean ? "100% 100%" : "contain")};
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  position: relative;
  cursor: pointer;
  &:hover {
    transform: ${(props) => (props.isboolean ? "" : "scale(1.1)")};
    transition: ${(props) =>
      props.isboolean ? "" : "transform 0.2s ease-in-out"};
    z-index: 2;
  }
`;

export const CardInfo = styled.div<IBoolean>`
  width: 100%;
  height: 33%;
  position: absolute;
  bottom: 0%;
  border-radius: 8px 40px 8px 8px;
  background-color: #ededed;
  opacity: 0.9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  color: ${red};
  white-space: pre-line;
`;
export const FocusedCardInfo = styled.div<IBoolean>`
  width: 85%;
  height: 85%;
  margin: auto;
  border-radius: 8px 40px 8px 8px;
  background-color: #ededed;
  opacity: 0.9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  color: ${red};
  white-space: pre-line;
`;

export const CardRow1 = styled.div<IBoolean>`
  display: flex;
  justify-content: space-between;
  font-size: ${(props) => (props.isboolean ? `${h3}` : `${b3}`)};
  font-weight: ${(props) => (props.isboolean ? `${bold}` : `${semibold};`)};
  margin-bottom: ${h4};
`;
export const CardRow2 = styled.div<IBoolean>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  .kor {
    font-size: ${(props) => (props.isboolean ? `${h2}` : `${h3}`)};
    font-weight: ${bold};
  }
  .eng {
    font-size: ${(props) => (props.isboolean ? `${h3}` : `${h5}`)};
    font-weight: ${semibold};
    color: gray;
    opacity: 0.8;
  }
  .playicon {
    background-color: ${red};
    color: #ededed;
    opacity: 0.9;
    border-radius: 50%;
    font-size: ${(props) => (props.isboolean ? `${h2}` : `${h3}`)};
    text-align: center;
  }
  .pauseicon {
    background-color: ${red};
    color: #ededed;
    opacity: 0.9;
    border-radius: 50%;
    font-size: ${(props) => (props.isboolean ? `${h2}` : `${h3}`)};
    text-align: center;
  }
`;

export const CardRow3 = styled.div<IBoolean>`
  height: 10px;

  display: flex;
  align-items: end;
`;

export const CardRow4 = styled.div`
  height: 70%;
  width: 100%;
  margin-top: 36px;
  display: flex;
  gap: ${h3};
  font-size: ${b4};
  font-weight: ${semibold};
  line-height: ${b3};
  justify-content: space-between;
  color: black;
  word-break: keep-all;
`;

export const CardRowColumn1 = styled.div`
  width: 64%;
  height: 100%;
  display: flex;
  gap: ${h4};

  .col1 {
    width: 50%;
  }
  .col2 {
    width: 50%;
  }
`;
export const CardRowColumn2 = styled.div`
  height: 100%;
  width: 30%;
  background-color: white;
  padding: ${h4};
  overflow: scroll;
  ${({ theme }) =>
    theme &&
    css`
      scrollbar-width: thin;

      &::-webkit-scrollbar {
        width: 5px;
      }

      &::-webkit-scrollbar-thumb {
        background-color: ${red};
        border-radius: 10px;
      }

      &::-webkit-scrollbar-thumb:hover {
        background-color: ${darkred};
      }

      &::-webkit-scrollbar-track {
        background-color: transparent;
      }
    `};

  .row1 {
    color: ${red};
    text-decoration: underline;
  }
  .row2 {
    padding: 8px 0px;
    line-height: ${h3};
    color: #525252;
  }
`;

export const TotalBar = styled.div<IBoolean>`
  width: 100%;
  height: ${(props) => (props.isboolean ? "5px" : "3px")};
  background: ${(props) =>
    props.isboolean
      ? "rgba(0, 0, 0, 0.5)"
      : `linear-gradient(to right, ${red}, ${red} 20%, transparent)`};
  display: flex;
  align-items: center;
  justify-content: baseline;
`;

export const Column1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const Column2 = styled.div``;

// // gsap
// export const Container = styled.div`
//   width: 100%;
//   background-color: white;
//   display: flex;
//   flex-direction: column;
// `;

// export const Container1 = styled.div`
//   width: 100%;
//   border: 3px solid red;
//   height: 100vh;
//   position: relative;
//   top: 0;
// `;

// export const Div2 = styled.div`
//   width: 300px;
//   height: 300px;
//   background-color: blue;
//   position: absolute;
//   ${positionCenter};
// `;

// export const Div3 = styled.div`
//   width: 300px;
//   height: 300px;
//   background-color: green;
//   position: absolute;
//   ${positionCenter};
// `;

// export const Container2 = styled.div`
//   width: 100%;
//   height: 100vh;
//   border: 3px solid pink;
//   position: relative;
// `;

// export const Div4 = styled.div`
//   width: 300px;
//   height: 300px;
//   background-color: pink;
//   ${positionCenter};
// `;

// export const CardContainer = styled.div<{ nowIndex: number }>`
//   position: relative;
//   left: 50%;
//   display: flex;
//   transform: translateX(
//     calc(${(props) => props.nowIndex * -25}vw - 25vw - 5px)
//   );
//   transition: transform 0.3s ease;
//   gap: 5px;
// `;
