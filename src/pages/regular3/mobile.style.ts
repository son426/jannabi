import { styled } from "styled-components";
import images from "@/data/images/regular3";
import { backgroundImgDefault, positionCenter } from "../../constants/style";

const albumCover = images.album;
const introbg = images.bg;
const lp = images.lp;

const h1 = "4rem";
const h2 = "3rem";
const h3 = "1.5rem";
const h4 = "1rem";
const h5 = "0.875rem";

const b1 = "1.75rem";
const b2 = "1.5rem";
const b3 = "1.125rem";
const b4 = "1rem";
const b5 = "0.75rem";

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

export const IntroContentDiv = styled.div`
  width: 100%;
  color: white;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const AlbumDiv = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  background-image: url(${albumCover});
  background-size: 100% 100%;
`;

export const IntroContentBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: ${h3};
  margin-top: ${h3};
`;

export const Row1 = styled.div`
  font-size: ${h4};
  width: 40%;
  text-align: center;
  p {
    padding: ${b5};
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
  margin-bottom: 30px;
  white-space: pre-line;

  .korean {
    font-size: calc(${h3} + 6px);
    line-height: calc(${h3} + 12px);
    font-weight: ${bold};
  }
  .english {
    font-size: ${h4};
    font-weight: ${medium};
    opacity: 0.8;
    color: #e5e5e5;
  }
`;
export const Row3 = styled.div`
  width: 100%;
  word-break: keep-all;
  font-size: calc(${h4} + 2px);
  font-weight: ${medium};
  line-height: ${h2};
  white-space: pre-line;
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
  height: 100px;
  background: linear-gradient(to bottom, black, ${red});
`;

export const MarginDiv2 = styled.div`
  width: 100%;
  height: 150px;
  background: linear-gradient(to top, black, ${red});
`;

export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

interface ICardProps extends IBoolean, IImageProps {}

export const CardDiv = styled.div<ICardProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  cursor: pointer;
  gap: 8px;
`;

export const CardAlbumCover = styled.div<IImageProps>`
  width: 100%;
  aspect-ratio: 1/1;
  background-image: url(${(props) => props.img});
  background-position: center;
  background-repeat: no-repeat;
`;

export const CardInfo = styled.div`
  width: 95%;
  margin-top: -40px;
  border-radius: 8px 40px 8px 8px;
  background-color: white;
  /* background-color: #ededed; */
  opacity: 0.9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  padding: 20px;
  color: ${red};
`;
export const CardRow1 = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: ${h4};
  font-weight: ${semibold};
`;
export const CardRow2 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  .kor {
    font-size: ${h3};
    font-weight: ${bold};
  }
  .eng {
    font-size: 14px;
    font-weight: ${semibold};
    color: gray;
    opacity: 0.8;
  }
  .playicon {
    background-color: ${red};
    color: #ededed;
    opacity: 0.9;
    border-radius: 50%;
    font-size: 30px;
    text-align: center;
  }
  .pauseicon {
    background-color: ${red};
    color: #ededed;
    opacity: 0.9;
    border-radius: 50%;
    font-size: 30px;
    text-align: center;
  }
`;
export const CardRow3 = styled.div`
  height: 8px;
  display: flex;
  align-items: end;
`;

export const CardRow4 = styled.div`
  font-size: ${b4};
  font-weight: ${semibold};
  color: black;
  width: 90%;
  white-space: pre-line;
  word-break: keep-all;
  line-height: ${b2};
`;

export const Column1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const Column2 = styled.div``;

export const CardLyrics = styled.div<IBoolean>`
  width: 95%;

  border-radius: 8px;
  background-color: #ededed;
  opacity: 0.9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  padding: 20px;
  color: ${red};
  white-space: pre-line;
  .row1 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: ${b3};
    font-weight: ${bold};
    text-decoration: underline;
  }
  .icon {
    font-size: ${b2};
  }
  .row2 {
    color: #525252;
    font-size: ${b3};
    line-height: ${b2};
    height: ${(props) => (props.isboolean ? "" : "20px")};
    overflow: hidden;
  }
`;

export const TotalBar = styled.div<IBoolean>`
  z-index: 1;
  width: 100%;
  height: 5px;
  background: ${(props) =>
    props.isboolean
      ? "rgba(0, 0, 0, 0.5)"
      : `linear-gradient(to right, ${red}, ${red} 20%, transparent)`};
  display: flex;
  align-items: center;
  justify-content: baseline;
  transition: all 1s linear;
`;

export const ProgressBar = styled.div<INumber>`
  height: 5px;
  width: ${(props) => props.numbervalue * 100}%;
  /* width: 50%; */
  background-color: ${red};
  transition: all 0.3s linear;
`;
