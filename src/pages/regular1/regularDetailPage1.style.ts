import { css, styled } from "styled-components";
import images from "../../data/images/regular1/";
import { backgroundImgDefault, positionCenter } from "../../constants/style";

const albumCover = images.album;
const introbg = images.backgreen;
const lp = images.lp;
const floatingButtonImg = images.floatingimg;

const h1 = "40px";
const h2 = "32px";
const h3 = "24px";
const h4 = "16px";
const h5 = "12px";

const bold = "700";
const semibold = "500";
const medium = "300";
const thin = "100";

const red = "#e1321b";
const black = "1b1b1b";
const yellow = "#fec800";
const eaeaea = "eaeaea";
const fff = "ffffff";

interface IBoolean {
  isboolean: boolean;
}

interface IString {
  stringvalue: string;
}

interface INumber {
  numbervalue: number;
}

export const Wrapper = styled.div`
  background-color: black;
`;

interface IIntroProps extends IBoolean, INumber {}

const transitionDuration = "0.1s";
const lpRotation = "10deg";
const transitionMixin = css`
  transition-property: opacity, width, transform;
  transition-duration: ${transitionDuration};
  transition-timing-function: linear;
`;

export const IntroDiv = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${introbg});
  background-size: 100% 100%;
  background-repeat: no-repeat;
`;

export const AlbumDiv = styled.div`
  width: 400px;
  aspect-ratio: 1/1;
  background-image: url(${albumCover});
  ${backgroundImgDefault};
  ${positionCenter};
  left: 48%;
`;
export const LpDiv = styled.div`
  ${backgroundImgDefault};
  background-image: url(${lp});
  background-size: 82% 82%;
  width: 400px;
  aspect-ratio: 1/1;
  ${positionCenter};
  left: 52%;
`;
export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${yellow};
  justify-content: center;
  align-items: center;
  position: absolute;
  ${positionCenter};
  top: 90%;
  .title {
    font-size: ${h4};
    font-weight: ${bold};
  }
  .jannabi {
    font-size: ${h5};
    font-weight: ${semibold};
  }
`;

export const IntroContentDiv = styled.div`
  width: 100%;
  height: 100vh;
  color: white;
  position: relative;
`;

export const IntroContentBg = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${images.introbg});
  background-size: 100% 120%;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0.15;
`;

export const IntroContentBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  transform: translate(0%, -50%);
  padding: 10%;
  .test {
    opacity: 0;
  }
`;

export const Row1 = styled.div`
  font-size: ${h4};
  text-align: start;
  margin-bottom: 16px;
  padding: 12px 0px;
  span {
    padding: 12px;
    border: 1px solid white;
    border-radius: 24px;
  }
`;
export const Row2 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  align-items: baseline;
  gap: 20px;
  margin-bottom: 64px;
  .korean {
    font-size: ${h1};
    font-weight: ${bold};
  }
  .english {
    font-size: ${h4};
    font-weight: ${medium};
  }
`;
export const Row3 = styled.div`
  margin: 0 auto;
  width: 90%;
  word-break: keep-all;
  display: flex;
  justify-content: space-between;
  padding: 0 6%;
  font-size: ${h4};
  font-weight: ${medium};
  line-height: ${h2};
  div {
    width: 43%;
  }
`;

interface INumber {
  numbervalue: number;
}

const gap = "5px";

export const ContentDiv = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const CarouselDiv = styled.div<INumber>`
  height: 80%;
  display: flex;
  align-items: end;
  transform: translateX(
    calc(${(props) => props.numbervalue * -26.7}vw - 27.8vw)
  );
  transition: transform 0.5s ease;
  position: relative;
  top: 21%;
  left: 50%;
`;

interface IColumnProps extends IString, IBoolean {}

export const Column = styled.div<IColumnProps>`
  cursor: pointer;
  flex-shrink: 0;
  width: ${(props) => (props.isboolean ? "56%" : "27%")};
  height: ${(props) => (props.isboolean ? "100%" : "75%")};
  background-image: url(${(props) => props.stringvalue});
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: contain;
  opacity: ${(props) => (props.isboolean ? "1" : "0.4")};
  transition: opacity 0.4s linear, width 0.4s linear;
`;

export const ColumnTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: red;

  position: absolute;
  top: 12%;
  left: 50%;
  transform: translate(-50%, -50%);

  .trackIndex {
    font-size: ${h1};
    font-family: "Pinyon Script", cursive;
  }
  .trackTitle {
    white-space: pre-line;
    font-size: calc(${h3} + 6px);
    font-weight: ${bold};
    text-align: center;
  }
`;

export const ColumnDescription = styled.div`
  color: white;
  position: absolute;
  top: 50%;
  left: 5%;
  width: 30%;
  transform: translate(-0%, -50%);
  white-space: pre-line;
  word-break: keep-all;
  font-weight: ${medium};
  font-size: calc(${h4} + 4px);
  line-height: ${h3};
`;

export const FloatingButton = styled.div`
  cursor: pointer;
  width: 100px;
  height: 100px;
  position: absolute;
  right: 50px;
  background-image: url(${floatingButtonImg});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 2;
`;

export const MenuDiv = styled.div`
  color: white;
  position: absolute;
  right: 50px;
  top: 100px;
  z-index: 1;
  font-size: ${h3};
  font-weight: ${semibold};
`;
export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: baseline;
  gap: 25px;
  padding: ${h4} 0px;
  border-bottom: 1px solid white;
  cursor: pointer;
`;

export const MenuColumn1 = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const MenuColumn2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  white-space: nowrap;
`;

export const PlayerDiv = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  font-size: ${h4};
`;

export const PlayerRow = styled.div<IBoolean>`
  display: flex;
  cursor: pointer;
  color: ${(props) => (props.isboolean ? "red" : "white")};
  z-index: 2;
  gap: 12px;
  padding: 10px;
`;
export const PlayerColumn1 = styled.div`
  display: flex;
  justify-content: baseline;
`;
export const PlayerColumn2 = styled.div`
  display: flex;
  justify-content: baseline;

  width: 100%;
`;
