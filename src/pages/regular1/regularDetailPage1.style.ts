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

const transitionDuration = "0.5s";
const lpRotation = "10deg";
const transitionMixin = css`
  transition-property: opacity, width, transform;
  transition-duration: ${transitionDuration};
  transition-timing-function: linear;
`;

export const IntroDiv = styled.div<IIntroProps>`
  width: 100%;
  height: 100vh;
  background-image: url(${introbg});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: ${(props) => (props.isboolean ? "absolute" : "sticky")};
  top: ${(props) => (props.isboolean ? `1800px` : "0")};
  z-index: 1;
`;

export const MarginDiv = styled.div`
  background-color: black;
  width: 100%;
  height: calc(100vh + 1800px);
`;

export const AlbumDiv = styled.div<INumber>`
  width: 400px;
  aspect-ratio: 1/1;
  background-image: url(${albumCover});
  ${backgroundImgDefault};
  position: absolute;
  ${positionCenter};
  --translation: -${(props) => props.numbervalue * 0.025}px;
  transform: translate(calc(-60% + var(--translation)), -50%);
`;
export const LpDiv = styled.div<INumber>`
  ${backgroundImgDefault};
  ${transitionMixin};

  background-image: url(${lp});
  background-size: 82% 82%;
  width: 400px;
  aspect-ratio: 1/1;
  ${positionCenter};
  --translation: ${(props) => props.numbervalue * 0.025}px;
  --rotation: ${(props) => props.numbervalue * 0.2}deg;
  transform: translate(calc(-40% + var(--translation)), -50%)
    rotate(var(--rotation));
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

export const IntroContentBox = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 5%;
  transform: translate(0%, -50%);
`;

export const Row1 = styled.div`
  font-size: ${h4};
  width: 20%;
  text-align: center;
  p {
    padding: 12px;
    border: 1px solid white;
    border-radius: 20px;
  }
  margin-bottom: 16px;
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
  padding-left: 40px;

  width: 50%;
  word-break: keep-all;
  font-size: ${h4};
  font-weight: ${medium};
  line-height: ${h2};
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
`;

export const MenuDiv = styled.div`
  color: white;
  position: absolute;
  right: 50px;
  top: 100px;
  z-index: 1;
`;
export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid white;
  cursor: pointer;
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
