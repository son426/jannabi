import { styled } from "styled-components";
import image from "../../data/images/regular3";

export const IntroDiv = styled.div`
  width: 100%;
  height: 200vh;
`;

export const IntroBackgroundDiv = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${image.bg});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: top;
  position: relative;
`;

export const LpWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  height: 50%;
  border: 1px solid black;
`;

export const LpCoverDiv = styled.div`
  border: 3px solid red;
  background-image: url(${image.cover});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 45%;
  height: 100%;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 13%;
`;
export const LpDiv = styled.div`
  border: 3px solid red;
  background-image: url(${image.lp});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 45%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 13%;
`;

const introTitleEm = "18px";
const introTitleFontSize = "2.5em";

export const TextWrapper = styled.div`
  border: 3px solid black;
  white-space: pre-line;
  color: white;
  width: 60%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: ${introTitleEm};
`;

export const TitleDiv = styled.div`
  border: 3px solid black;
  font-size: ${introTitleFontSize};
  font-weight: 600;
  line-height: calc(${introTitleFontSize}*0.6);
  letter-spacing: -0.06em;
  margin-bottom: 6%;
`;

// fontsize : title 대비 0.4375
export const SubtitleDiv = styled.div`
  border: 3px solid black;
  font-size: calc(${introTitleFontSize}*0.4375);
  margin-bottom: 8%;
  font-weight: 100;
  line-height: calc(${introTitleFontSize}*0.6);
`;

// fontsize : title 대비 0.375
export const SummaryDiv = styled.div`
  border: 3px solid black;
  font-size: calc(${introTitleFontSize}*0.375);
  padding-left: 8%;
  line-height: calc(${introTitleFontSize}*0.6);
`;

export const ContentWrapper = styled.div`
  width: 100%;
  background-color: black;
`;

const contentEm = "18px";
const contentTitleFontSize = "2em";

interface IContentIndex {
  index: number;
}

const images = [image.c1, image.c2];

export const ContentDiv = styled.div`
  font-size: ${contentEm};
  color: white;
  padding: 5%;
`;

export const ContentImgDiv = styled.div<IContentIndex>`
  background-image: url(${(props) => images[props.index]});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  width: 30%;
  aspect-ratio: 1/1;
  margin-bottom: 3%;
`;

export const ContentTextDiv = styled.div`
  white-space: pre-wrap;
  padding: 1% 0%;
  display: flex;
  flex-direction: column;
  gap: 0.8em;
`;
export const ContentTextRow1 = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: calc(${contentTitleFontSize}*0.4);
  div {
    border: 1px solid white;
    padding: calc(${contentEm} * 0.6);
    border-radius: calc(${contentEm});
  }
`;
export const ContentTextRow2 = styled.div`
  font-size: ${contentTitleFontSize};
  font-weight: 600;
`;

export const ContentTextRow3 = styled.div`
  font-size: calc(${contentTitleFontSize}*0.38);
  font-weight: 100;
  display: flex;
  flex-direction: column;
  padding: 2em;
  gap: 2em;
  line-height: 1.6em;
`;
