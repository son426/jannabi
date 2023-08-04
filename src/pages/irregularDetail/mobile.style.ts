import { styled } from "styled-components";
import image from "../../data/images/irregular";
import { Link } from "react-router-dom";
import { bold, medium, semibold } from "@/constants/style";

interface IBackgroundProps {
  backgroundcolor: string | undefined;
}

interface IContentProps {
  fontcolor: string | undefined;
}

interface IImageProps {
  image?: string;
}

interface IColorProps {
  color?: string;
  color2?: string;
}

export const BackButton = styled.div<IColorProps>`
  position: fixed;

  cursor: pointer;
  width: 0;
  height: 0;
  border-left: 60px solid ${(props) => props.color2};
  border-bottom: 60px solid transparent;

  z-index: 1;

  .arrow {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.6em;
    position: fixed;
    top: 5px;
    left: 3px;
    color: ${(props) => props.color};
    transform: rotate(-45deg);
  }
`;

export const BackgroundDiv = styled.div<IColorProps>`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: ${(props) => props.color};
`;

export const TextWrapper = styled.div<IColorProps>`
  width: 100%;
  height: 100vh;
  white-space: pre-wrap;
  text-align: center;
  display: flex;
  flex-direction: column;
  color: ${(props) => props.color};
  padding: 4em 3em;
  padding-bottom: 2em;
  position: relative;

  font-size: 16px;
  overflow: hidden;
`;
export const Title = styled.div`
  font-family: PretendardBold;
  font-weight: 600;
  font-size: 2.3em;
  margin-bottom: 3%;
`;
export const Subtitle = styled.h2`
  font-size: 1.2em;
  font-weight: 200;
  margin-bottom: 10%;
`;

export const Player = styled.div`
  /* border: 1px solid black; */
  display: flex;
  justify-content: center;
`;

export const AlbumCover = styled.div<IImageProps>`
  background-image: url(${(props) => props.image});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 80%;
  aspect-ratio: 1/1;
  position: relative;
`;

export const ConsoleDiv = styled.div`
  margin-top: 20%;
  width: 100%;
  height: 15%;

  display: flex;
  justify-content: space-around;
`;

export const PrevDiv = styled.div`
  background-image: url(${image.prev});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 12%;
  cursor: pointer;
`;
export const NextDiv = styled.div`
  background-image: url(${image.next});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 12%;
  cursor: pointer;
`;

interface IBooleanProps {
  istrue: boolean;
}

export const PlayButton = styled.div<IBooleanProps>`
  background-image: ${(props) =>
    props.istrue ? `url(${image.stop})` : `url(${image.play})`};
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 20%;
  cursor: pointer;
`;

export const Meta = styled.p`
  font-size: 10px;
  font-weight: ${semibold};
  margin-top: 10px;
  margin-bottom: 8%;
  opacity: 0.5;
`;

export const LineWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 15%;
  margin-bottom: 10%;
  background-color: white;
`;

export const Line = styled.div<IColorProps>`
  border-left: 1px solid ${(props) => props.color};
  height: 100%;
  position: absolute;
  left: 50%;
  top: 0;
`;

export const Description = styled.p`
  font-size: 12px;
  font-weight: ${semibold};
  word-break: keep-all;
  margin-bottom: 10%;
  line-height: 1.5em;
`;

export const Playlist = styled.div`
  /* border: 1px solid black; */
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 15%;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const PlaylistIsTitle = styled.div<IColorProps>`
  background-color: ${(props) => props.color2};
  color: ${(props) => props.color};
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.3em;
  height: 70%;
  border-radius: 100px;
  padding: 3px 5px;
  p {
    font-size: 10px;
    font-weight: ${bold};
  }
`;

interface IPlayingRowProps extends IColorProps {
  isplaying: boolean;
}

export const PlaylistRow = styled.div<IPlayingRowProps>`
  /* border: 1px solid white; */
  color: ${(props) => (props.isplaying ? props.color : "#C2D1C2")};
  font-weight: ${(props) => (props.isplaying ? `${bold}` : `${medium}`)};
  font-size: ${(props) => (props.isplaying ? "0.8em" : "0.7em")};
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  transition: color 0.1s linear, font-size 0.1s linear, font-weight 0.1s linear;
`;
export const SongIndex = styled.div``;
export const SongTitle = styled.p`
  white-space: nowrap;
  overflow: auto;
  padding: 0.7em;
`;

export const Footer = styled.div`
  font-family: PretendardMedium;
  font-size: 10px;
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translate(-50%, 0);
  line-height: 1.5em;
`;

export const ImageWrapper = styled.div<IImageProps>`
  /* border: 1px solid black; */
  width: 63%;
  height: 100vh;
  background-size: 115% 115%;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.image});
  width: 100%;
  height: 100%;
`;

// export const ImageWrapper = styled.div`
//   width: 63%;
//   height: 100vh;

//   display: grid;
//   grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
//   grid-template-rows: 2fr 1fr;

//   gap: 5px; /* Adjust this value for the desired gap between images */
// `;

// const ImageDiv = styled.div`
//   background-repeat: no-repeat;
// `;

// export const ImageDiv1 = styled(ImageDiv)`
//   background-size: 115% 115%;
//   background-position: center;
//   background-image: url(${image.she1});
//   grid-column-start: 1;
//   grid-column-end: 4;
//   grid-row: 1;
//   width: 100%;
//   height: 100%;
// `;
// export const ImageDiv2 = styled(ImageDiv)`
//   background-image: url(${image.she2});
//   background-size: 115% 115%;
//   background-position: left;
//   grid-column-start: 4;
//   grid-column-end: 6;
//   grid-row: 1;
//   width: 100%;
//   height: 100%;
// `;
// export const ImageDiv3 = styled(ImageDiv)`
//   background-image: url(${image.she3});
//   background-size: 110% 100%;
//   background-position: center;
//   grid-column-start: 1;
//   grid-column-end: 3;
//   grid-row: 2;
//   width: 100%;
//   height: 100%;
// `;
// export const ImageDiv4 = styled(ImageDiv)`
//   background-image: url(${image.she4});
//   background-size: 100% 100%;
//   background-position: center;
//   grid-column-start: 3;
//   grid-column-end: 6;
//   grid-row: 2;
//   width: 100%;
//   height: 100%;
// `;
