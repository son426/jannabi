import { styled } from "styled-components";
import images from "@/data/images/regular3";
import { backgroundImgDefault, positionCenter } from "../../constants/style";

const albumCover = images.album;
const introbg = images.bg;
const lp = images.lp;

const h1 = "36px";
const h2 = "28px";
const h3 = "20px";
const h4 = "14px";
const h5 = "12px";

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
  top: 50%;
  left: 5%;
  transform: translate(0%, -50%);
  .test {
    opacity: 0;
  }
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
  white-space: pre-line;

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
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 20px;
  gap: 12px;
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
  transition: width 0.5s linear, height 0.5s linear, background-size 0.5s linear;
`;

export const CardInfo = styled.div<IBoolean>`
  width: ${(props) => (props.isboolean ? "85%" : "100%")};
  height: ${(props) => (props.isboolean ? "85%" : "33%")};
  position: absolute;
  top: ${(props) => (props.isboolean ? "50%" : "")};
  left: ${(props) => (props.isboolean ? "50%" : "")};
  bottom: ${(props) => (props.isboolean ? "" : "0%")};
  transform: ${(props) => (props.isboolean ? "translate(-50%, -50%)" : "")};
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
  font-size: ${(props) => (props.isboolean ? `${h3}` : `${h4}`)};
  font-weight: ${semibold};
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
    font-size: ${(props) => (props.isboolean ? `${h4}` : `${h5}`)};
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
`;

export const CardRow3 = styled.div`
  height: 10px;
  /* background: linear-gradient(to right, ${red}, ${red} 20%, transparent); */
  display: flex;
  align-items: center;
`;

export const CardRow4 = styled.div`
  height: 70%;
  width: 100%;
  margin-top: 36px;
  border: 1px solid pink;
  display: flex;
  font-size: 16px;
  font-weight: ${medium};
  color: black;
  word-break: keep-all;
`;

export const CardRowColumn1 = styled.div`
  width: 64%;
  height: 100%;
  display: flex;
  .col1 {
    width: 50%;
  }
  .col2 {
    width: 50%;
  }
`;
export const CardRowColumn2 = styled.div`
  width: 36%;
  height: 100%;
`;

export const TotalBar = styled.div`
  width: 100%;
  height: 3px;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: baseline;
`;

export const ProgressBar = styled.div<INumber>`
  height: 2px;
  width: ${(props) => props.numbervalue * 100}%;
  /* width: 50%; */
  background-color: red;
`;

export const Column1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const Column2 = styled.div`
  .pauseicon {
    font-size: 1.5em;
  }
`;
