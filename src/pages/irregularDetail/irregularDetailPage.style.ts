import { styled, css, keyframes } from "styled-components";
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

interface INumber {
  numbervalue: number;
}

export const TransitionWrapper = styled.div`
  &.page-transition-enter {
    opacity: 0;
    transform: translateX(100%);
  }

  &.page-transition-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 1s, transform 1s;
  }

  &.page-transition-exit {
    opacity: 1;
    transform: translateX(0);
  }

  &.page-transition-exit-active {
    opacity: 0;
    transform: translateX(-100%);
    transition: opacity 1s, transform 1s;
  }
`;

export const BackButton = styled.div<IColorProps>`
  position: fixed;
  cursor: pointer;
  width: 0;
  height: 0;
  border-left: 80px solid ${(props) => props.color2};
  border-bottom: 80px solid transparent;
  z-index: 1;

  .arrow {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3em;
    position: fixed;
    top: 7px;
    left: 5px;
    color: ${(props) => props.color};
    transform: rotate(-45deg);
  }
`;

export const NextButton = styled.div<IColorProps>``;
export const PrevButton = styled.div<IColorProps>``;

export const BackgroundDiv = styled.div<IColorProps>`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.color};
  font-size: 10px;
`;

export const TextWrapper = styled.div<IColorProps>`
  border: 1px solid white;
  height: 100vh;
  white-space: pre-wrap;

  display: flex;
  flex-direction: column;
  color: ${(props) => props.color};
  padding: 80px;
  padding-bottom: 0px;
  position: relative;
  overflow: hidden;
`;
export const Title = styled.div`
  font-weight: ${bold};
  font-size: 6em;
`;
export const Subtitle = styled.h2`
  font-size: 2em;
  font-weight: 100;
  margin-bottom: 2em;
`;

export const Player = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const AlbumCover = styled.div<IImageProps>`
  background-image: url(${(props) => props.image});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 60%;
  aspect-ratio: 1/1;
  position: relative;
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
  display: block;
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
  position: absolute;
  width: 32%;
  height: 32%;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
  cursor: pointer;
`;

export const Meta = styled.div<IColorProps>`
  color: ${(props) => props.color};
  font-size: 1.2em;
  font-weight: ${semibold};
  margin-bottom: 0.67em;
`;

export const Description = styled.div`
  border-bottom: 1px solid white;
  font-size: 1.4em;
  font-weight: ${semibold};
  word-break: keep-all;
  padding-bottom: 1.428em;
  line-height: 1.5em;
  margin-bottom: 2.78em;
`;

export const Playlist = styled.div<IColorProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  margin-bottom: 5em;
  ::-webkit-scrollbar {
    display: none;
  }
  ${({ theme }) =>
    theme &&
    css`
      scrollbar-width: thin;

      &::-webkit-scrollbar {
        width: 5px;
      }

      &::-webkit-scrollbar-thumb {
        background-color: #939393;
        border-radius: 10px;
      }

      &::-webkit-scrollbar-thumb:hover {
        background-color: #2f3542;
      }

      &::-webkit-scrollbar-track {
        background-color: transparent;
      }
    `};
`;

export const PlaylistIsTitle = styled.div<IColorProps>`
  background-color: ${(props) => props.color2};
  color: ${(props) => props.color};
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 7px;
  border-radius: 100px;
  height: 70%;
  p {
    font-size: 10px;
    font-weight: ${bold};
  }
`;

interface IPlayingRowProps extends IColorProps {
  isplaying: boolean;
}

export const PlaylistRow = styled.div<IPlayingRowProps>`
  color: ${(props) => (props.isplaying ? props.color : "#C2D1C2")};
  font-weight: ${(props) => (props.isplaying ? `${bold}` : `${medium}`)};
  font-size: ${(props) => (props.isplaying ? "1.8em" : "1.4em")};
  width: 100%;
  line-height: ${(props) => (props.isplaying ? "1em" : "0.5em")};
  display: flex;
  justify-content: baseline;
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

export const TapeDiv = styled.div<IColorProps>`
  width: 100%;
  height: 100px;
  background-color: ${(props) => props.color};
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
`;
export const TapeColumn1 = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 50%;
`;
export const TapeColumn2 = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: end;
  padding-right: 10px;
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 50%;
`;
export const Button1 = styled(ButtonDiv)<IColorProps>`
  font-size: 2em;
  color: ${(props) => props.color};
`;
export const Button2 = styled(ButtonDiv)<IColorProps>`
  border: 2px solid ${(props) => props.color};
  font-size: 3em;
  color: ${(props) => props.color};
`;
export const Button3 = styled(ButtonDiv)<IColorProps>`
  border: 2px solid ${(props) => props.color};
  font-size: 5em;
  color: ${(props) => props.color};
`;
export const Button4 = styled(ButtonDiv)<IColorProps>`
  border: 2px solid ${(props) => props.color};
  font-size: 3em;
  color: ${(props) => props.color};
`;
export const Button5 = styled(ButtonDiv)<IColorProps>`
  font-size: 2em;
  color: ${(props) => props.color};
`;
export const TapeAlbumCover = styled.div<IImageProps>`
  width: 150px;
  height: 150px;
  background-image: url(${(props) => props.image});
  background-position: center;
  background-size: contain;
  border-radius: 50%;
`;

export const Footer = styled.div`
  font-size: 1em;
  font-weight: ${medium};
  line-height: 1.5em;
  text-align: center;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ImageWrapper = styled.div<IImageProps>`
  height: 100vh;
  aspect-ratio: 1/1;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.image});
  display: flex;
  align-items: end;
  cursor: pointer;
`;

export const ImageProgress = styled.div<INumber>`
  width: 100%;
  height: ${(props) => props.numbervalue}%;
  background-color: #fff;
  opacity: 0.3;
  transition: all 0.3s linear;
`;
const drift = keyframes`
  from { transform: rotate(0deg); }
  from { transform: rotate(360deg); }
`;

export const ImageWaveBox = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 5px;
  box-shadow: 0 2px 30px rgba(black, 0.2);
  background: lighten(#f0f4c3, 10%);
  position: relative;
  overflow: hidden;
  transform: translate3d(0, 0, 0);
`;
export const ImageWave = styled.div`
  opacity: 0.4;
  position: absolute;
  top: 3%;
  left: 50%;
  background: #0af;
  width: 500px;
  height: 500px;
  margin-left: -250px;
  margin-top: -250px;
  transform-origin: 50% 48%;
  border-radius: 43%;
  animation: ${drift} 3000ms infinite linear;
`;
export const ImageWave1 = styled(ImageWave)``;
export const ImageWave2 = styled(ImageWave)`
  animation: ${drift} 5000ms infinite linear;
`;
export const ImageWave3 = styled(ImageWave)`
  animation: ${drift} 7000ms infinite linear;
  opacity: 0.1;
  background: yellow;
`;
