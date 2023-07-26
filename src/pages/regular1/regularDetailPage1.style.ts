import { styled } from "styled-components";
import introbg from "./backgreen.png";
import albumCover from "./album.png";
import lp from "./lp.png";
import { backgroundImgDefault, positionCenter } from "../../constants/style";

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

export const Wrapper = styled.div`
  background-color: black;
`;

export const IntroDiv = styled.div<IBoolean>`
  width: 100%;
  height: 100vh;
  background-image: url(${introbg});
  background-size: 100% 100%;
  background-repeat: no-repeat;
`;
export const CenterDiv = styled.div`
  border: 3px solid red;
  width: 644px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
`;
export const AlbumDiv = styled.div`
  width: 400px;
  aspect-ratio: 1/1;
  background-image: url(${albumCover});
  ${backgroundImgDefault};
  ${positionCenter};
  transform: translate(-65%, -50%);
`;
export const LpDiv = styled.div`
  ${backgroundImgDefault};
  background-image: url(${lp});
  background-size: 82% 82%;
  width: 400px;
  aspect-ratio: 1/1;
  ${positionCenter};
  transform: translate(-35%, -50%);
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

export const ContentDiv = styled.div`
  height: 100vh;
  overflow-x: scroll;
  display: flex;
`;

interface IColumnProps extends IString, IBoolean {}

export const Column = styled.div<IColumnProps>`
  flex-shrink: 0;
  border: 1px solid white;
  width: ${(props) => (props.isboolean ? "50%" : "25%")};
  height: 100%;
  background-image: url(${(props) => props.stringvalue});
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: contain;
  opacity: ${(props) => (props.isboolean ? "1" : "0.5")};
  transition: opacity 0.2s linear, width 0.2s linear;
`;
