import { css, styled } from "styled-components";
import images from "../../data/images/regular2";
import { backgroundImgDefault, positionCenter } from "../../constants/style";

const albumCover = images.cover;
const lp = images.lp;

const h1 = "48px";
const h2 = "32px";
const h3 = "24px";
const h4 = "16px";
const h5 = "12px";

const bold = "700";
const semibold = "500";
const medium = "300";
const thin = "100";

const white = "#FAFAFA";
const white2 = "#eaeaea";
const lightgray = "#c1c1c1";
const gray = "#646464";
const yellow = "#FCCF02";
const black = "#1B1B1B";

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
  background-color: white;
`;

interface IIntroProps extends IBoolean, INumber {}

export const IntroDiv = styled.div`
  width: 100%;
  height: 100vh;
`;

export const LogoDiv = styled.div`
  width: 70%;
  aspect-ratio: 90/19;
  position: absolute;
  top: 50px;
  left: 50px;
`;

export const LogoDiv2 = styled.div`
  width: 10%;
  position: absolute;
  bottom: 50px;
  right: 50px;
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
  color: ${black};
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
  color: ${black};
  position: relative;
`;

export const IntroContentBg = styled.div`
  width: 100%;
  height: 100%;
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
`;

export const ContentBg = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  opacity: 0.3;
  background-image: url(${images.contentbg});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
`;

export const ContentBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: baseline;
  padding: 80px;
  position: absolute;
  top: 0;
  z-index: 1;
`;

export const ContentRow = styled.div`
  width: 100%;
`;
export const ContentLine = styled.div`
  display: flex;
  border-bottom: 1px solid black;
  justify-content: space-between;
  padding: 8px 0px;
  cursor: pointer;
`;
export const ContentColumn = styled.div`
  width: 30%;
  text-align: left;
  &:last-child {
    width: 10%;
    text-align: end;
  }
`;
export const ContentMeta = styled.div`
  display: flex;
  padding: 16px 0px;
  justify-content: space-between;
  align-items: start;
  border-bottom: 1px solid black;
  font-weight: ${bold};
  .kor {
    font-size: ${h1};
  }
  .eng {
    font-size: ${h3};
    color: ${lightgray};
  }
`;
export const MetaColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  gap: 12px;
`;
export const LyricDiv = styled.div`
  width: 300px;
  height: 300px;
  background-color: white;
  word-break: keep-all;
  white-space: pre-wrap;
  padding: 8px 16px;
  overflow: scroll;
  color: ${gray};
  font-size: ${h4};
  font-weight: ${medium};
  line-height: ${h3};
  letter-spacing: -2%;
  ${({ theme }) =>
    theme &&
    css`
      scrollbar-width: thin;

      &::-webkit-scrollbar {
        width: 5px;
      }

      &::-webkit-scrollbar-thumb {
        background-color: ${lightgray};
        border-radius: 10px;
      }

      &::-webkit-scrollbar-thumb:hover {
        background-color: ${gray};
      }

      &::-webkit-scrollbar-track {
        background-color: transparent;
      }
    `};
`;

export const LyricRow = styled.div<IBoolean>`
  cursor: pointer;
  color: ${(props) => (props.isboolean ? `${yellow}` : "")};
  font-weight: ${(props) => (props.isboolean ? `${bold}` : "")};
`;
