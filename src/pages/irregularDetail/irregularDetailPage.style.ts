import { styled, css } from "styled-components";
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
  border-left: 80px solid ${(props) => props.color2};
  border-bottom: 80px solid transparent;
  z-index: 1;

  .arrow {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.1em;
    position: fixed;
    top: 7px;
    left: 5px;
    color: ${(props) => props.color};
    transform: rotate(-45deg);
  }
`;

export const BackgroundDiv = styled.div<IColorProps>`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.color};
`;

export const TextWrapper = styled.div<IColorProps>`
  max-width: 30%;
  height: 100vh;
  white-space: pre-wrap;
  text-align: center;
  display: flex;
  flex-direction: column;
  color: ${(props) => props.color};
  padding: 2em 2em;
  position: relative;

  font-size: 16px;
  overflow: hidden;
`;
export const Title = styled.div`
  font-weight: ${bold};
  font-size: 2.3em;
  margin-bottom: 3%;
`;
export const Subtitle = styled.h2`
  font-size: 1.2em;
  font-weight: 200;
  margin-bottom: 10%;
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

export const Meta = styled.p`
  font-size: 10px;
  font-weight: ${semibold};
  margin-top: 10px;
  margin-bottom: 8%;
  opacity: 0.5;
`;

export const Description = styled.p`
  font-size: 0.8em;
  font-weight: ${semibold};
  word-break: keep-all;
  margin-bottom: 10%;
  line-height: 1.5em;
`;

export const Playlist = styled.div<IColorProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  overflow: auto;
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
  font-size: 10px;
  font-weight: ${medium};
  margin-top: 40px;
  line-height: 1.5em;
`;

export const ImageWrapper = styled.div<IImageProps>`
  border: 2px solid white;
  height: 100vh;
  aspect-ratio: 1/1;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.image});
`;
