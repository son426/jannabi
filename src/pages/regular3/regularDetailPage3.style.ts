import { css, styled } from "styled-components";
import images from "@/data/images/regular3";
import { backgroundImgDefault, positionCenter } from "../../constants/style";

const albumCover = images.album;
const introbg = images.bg;
const lp = images.lp;

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

interface IBoolean {
  isboolean: boolean;
}

interface IString {
  stringvalue: string;
}

interface IImageProps {
  img?: string;
  hoveredimg?: string;
}

export const Wrapper = styled.div`
  background-color: black;
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
  color: white;
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

export const IntroBackground = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  background-image: url(${images.bg2});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
`;

export const IntroContentBox = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 55%;
  left: 5%;
  transform: translate(0%, -50%);
  .test {
    opacity: 0;
  }
`;

export const Row1 = styled.div`
  font-size: ${b4};
  width: 20%;
  text-align: center;
  p {
    padding: ${b3};
    border: 1px solid white;
    border-radius: ${b2};
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
  margin-bottom: ${h2};

  white-space: pre-line;

  .korean {
    line-height: ${h1};
    font-size: ${h2};
    font-weight: ${bold};
  }
  .english {
    font-size: ${b2};
    font-weight: ${medium};
    opacity: 0.8;
  }
`;
export const Row3 = styled.div`
  padding-left: 36px;
  width: 50%;
  word-break: keep-all;
  font-size: ${b3};
  font-weight: ${medium};
  line-height: ${b1};
`;

interface INumber {
  numbervalue: number;
}

export const ContentDiv = styled.div`
  position: relative;
  width: 100%;
  background-color: ${red};
`;

export const MarginDiv = styled.div`
  width: 100%;
  height: 150px;
  background: linear-gradient(to bottom, black, ${red});
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 12px;
  margin: 0 auto;
  padding: 20px;
  width: 70%;
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

export const LyricRow = styled.div<IBoolean>`
  color: ${(props) => (props.isboolean ? `${red}` : "")};
  font-weight: ${(props) => (props.isboolean ? `${bold}` : "")};
`;

export const TotalBar = styled.div<IBoolean>`
  z-index: 1;
  width: 100%;

  min-height: ${(props) => (props.isboolean ? "5px" : "3px")};
  background: ${(props) =>
    props.isboolean
      ? "rgba(0, 0, 0, 0.5)"
      : `linear-gradient(to right, ${red}, ${red} 20%, transparent)`};
  display: flex;
  align-items: center;
  justify-content: baseline;
`;

export const ProgressBar = styled.div<INumber>`
  height: 5px;
  width: ${(props) => props.numbervalue * 100}%;
  /* width: 50%; */
  background-color: ${red};
`;

export const Column1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const Column2 = styled.div``;
