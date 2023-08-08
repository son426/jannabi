import { css, styled } from "styled-components";
import images from "../../data/images/regular2";
import { backgroundImgDefault, positionCenter } from "../../constants/style";

const albumCover = images.cover;
const lp = images.lp;

export const h1 = "64px";
export const h2 = "48px";
export const h3 = "24px";
export const h4 = "16px";
export const h5 = "12px";

export const bold = "700";
export const semibold = "500";
export const medium = "300";
export const thin = "100";

export const white = "#FAFAFA";
export const white2 = "#eaeaea";
export const lightgray = "#c1c1c1";
export const gray = "#646464";
export const yellow = "#FCCF02";
export const black = "#1B1B1B";

interface IBoolean {
  isboolean: boolean;
}

interface IString {
  stringvalue: string;
}

interface INumber {
  numbervalue?: number;
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
  position: absolute;
  height: 100%;
  width: 100%;
  background-size: 100% 100%;
  background-image: url(${images.introcontentbg});
  background-position: center;
  background-repeat: no-repeat;
`;

export const IntroContentBg2 = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: white;
`;

export const IntroContentBox = styled.div`
  width: 100%;
  display: flex;
  position: absolute;
  top: 50%;
  transform: translate(0%, -50%);
  padding: 10%;

  .test:first-child {
    width: 20%;
    transform: translateY(-200px);
  }
  .test:last-child {
    width: 80%;
  }
`;

export const Row1 = styled.div`
  font-size: ${h4};
  text-align: start;
  margin-bottom: 16px;
  padding: 12px 0px;
  span {
    padding: 12px;
    border: 1px solid black;
    border-radius: 24px;
  }
`;
export const Row2 = styled.div`
  width: 100%;
  display: flex;
  justify-content: baseline;
  align-items: baseline;
  gap: 20px;
  margin-bottom: 64px;
  .korean {
    font-size: ${h1};
    font-weight: ${bold};
  }
  .english {
    font-size: ${h3};
    font-weight: ${medium};
  }
`;
export const Row3 = styled.div`
  margin: 0 auto;
  width: 90%;
  word-break: keep-all;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 6%;
  font-size: ${h4};
  font-weight: ${medium};
  line-height: ${h3};
  gap: 30px;
  div {
    width: 80%;
  }
`;

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
  padding: 16px 0px;
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
  cursor: pointer;
`;

export const MetaColumn = styled.div<INumber>`
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  gap: 12px;
  .kor {
    font-size: ${h1};
  }
  .engText {
    cursor: pointer;
    font-size: ${h3};
    color: ${lightgray};
    background: linear-gradient(
      to right,
      ${yellow} ${(props) => props.numbervalue}%,
      ${lightgray} ${(props) => props.numbervalue}% 100%
    );
    -webkit-background-clip: text;
    color: transparent;
  }
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
        width: 7px;
      }

      &::-webkit-scrollbar-thumb {
        background-color: ${black};
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
