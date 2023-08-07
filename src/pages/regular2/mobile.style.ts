import { css, styled } from "styled-components";
import images from "../../data/images/regular2";
import { backgroundImgDefault, positionCenter } from "../../constants/style";

const albumCover = images.cover;
const lp = images.lp;

export const h1 = "48px";
export const h2 = "32px";
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
  width: 76%;
  aspect-ratio: 90/19;
  position: absolute;
  top: 32%;
  left: 42%;
  transform: translate(-50%, -30%);
`;

export const LogoDiv2 = styled.div`
  width: 15%;
  position: absolute;
  bottom: 24%;
  right: 20px;
`;

export const AlbumDiv = styled.div`
  width: 60%;
  aspect-ratio: 1/1;
  background-image: url(${albumCover});
  ${backgroundImgDefault};
  ${positionCenter};
  left: 44%;
`;
export const LpDiv = styled.div`
  ${backgroundImgDefault};
  background-image: url(${lp});
  background-size: 82% 82%;
  width: 60%;
  aspect-ratio: 1/1;
  ${positionCenter};
  left: 56%;
`;
export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${black};
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 50%;
  bottom: 24%;
  transform: translate(-50%, 0%);
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
  min-height: 100vh;
  color: ${black};
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const IntroContentBg = styled.div`
  width: 100%;
  background-size: 100% 120%;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0.15;
  position: absolute;
  top: 0;
`;

export const IntroContentBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  padding: 10%;
`;

export const Row1 = styled.div`
  font-size: ${h4};
  text-align: start;
  margin-bottom: 16px;
  padding: 12px 0px;
  span {
    padding: 6px 12px;
    border: 1px solid black;
    border-radius: 24px;
  }
`;
export const Row2 = styled.div`
  width: 100%;
  display: flex;
  justify-content: baseline;
  align-items: baseline;
  gap: 16px;
  margin-bottom: 24px;
  .korean {
    font-size: ${h2};
    font-weight: ${bold};
  }
  .english {
    font-size: ${h4};
    font-weight: ${medium};
  }
`;
export const Row3 = styled.div`
  margin: 0 auto;
  width: 100%;
  word-break: keep-all;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: ${h4};
  font-weight: ${medium};
  line-height: ${h2};
  gap: 30px;
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
  padding: 32px 16px;
  position: absolute;
  top: 0;
  z-index: 1;
`;

export const ContentTitle = styled.div`
  width: 100%;
  height: 100px;
  text-align: start;
  font-size: ${h1};
  font-weight: ${bold};
`;

export const ContentRow = styled.div`
  width: 100%;
`;
export const ContentLine = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid black;
  justify-content: space-between;
  padding: 16px 0px;
  cursor: pointer;
  gap: 12px;
  .row1 {
    white-space: nowrap;
  }
  .row2 {
    display: flex;
    justify-content: space-between;
    align-content: center;
  }
  .icon {
    color: ${lightgray};
    font-size: ${h4};
    font-weight: ${bold};
  }
`;
export const ContentColumn = styled.div`
  text-align: left;
  &:last-child {
    width: 10%;
    text-align: end;
  }
`;
export const ContentMeta = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 0px;

  justify-content: space-between;
  align-items: start;
  border-bottom: 1px solid black;
  font-weight: ${bold};
  cursor: pointer;
`;

export const MetaColumn = styled.div<INumber>`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  gap: 12px;
  .kor {
    font-size: ${h2};
    font-weight: ${bold};
  }
  .engText {
    cursor: pointer;
    font-size: ${h4};
    font-weight: ${bold};
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
  width: 100%;
  aspect-ratio: 34/40;
  margin: 0 auto;

  background-color: #f5f5f5;
  word-break: keep-all;
  white-space: pre-wrap;
  padding: 8px 16px;
  overflow: scroll;
  color: ${gray};
  font-size: ${h4};
  font-weight: ${medium};
  line-height: ${h2};
  letter-spacing: -2%;
  margin-top: 5%;
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
