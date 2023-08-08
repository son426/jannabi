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

interface INumber {
  numbervalue: number;
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
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: ${(props) => props.color};
`;

export const TextWrapper = styled.div<IColorProps>`
  width: 100%;
  height: 100vh;
  font-size: 10px;
  white-space: pre-wrap;
  text-align: start;
  display: flex;
  flex-direction: column;
  color: ${(props) => props.color};
  padding: 8em 4em;
  padding-bottom: 2em;
  position: relative;
  overflow: hidden;
`;

export const Title = styled.div`
  font-weight: 800;
  font-size: 3.5em;
  margin-bottom: 3%;
`;
export const Subtitle = styled.h2`
  font-size: 1.5em;
  font-weight: 200;
  margin-bottom: 3%;
`;

export const Player = styled.div`
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

export const ConsoleDiv = styled.div<IColorProps>`
  width: 100%;
  height: 23%;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: ${(props) => props.color};
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const ConsoleRow1 = styled.div`
  width: 100%;
  height: 40%;

  position: relative;
  display: flex;
  align-items: center;
`;

export const ButtonWrapper = styled.div<IColorProps>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10%;
  font-size: 3em;
  color: ${(props) => props.color};
  div {
    cursor: pointer;
  }
`;

export const ConsoleRow2 = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10%;
`;

export const TapeAlbumCover = styled.div<IImageProps>`
  width: 110px;
  height: 110px;
  background-image: url(${(props) => props.image});
  background-position: center;
  background-size: contain;
  border-radius: 50%;
  position: absolute;
  top: -80%;
  left: 50%;
  transform: translate(-50%, 0);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  .icon {
    font-size: 50px;
    color: #ff6153;
  }
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

interface IButtonProps extends IColorProps, IBooleanProps {}
export const Button5 = styled(ButtonDiv)<IButtonProps>`
  font-size: 2em;
  color: ${(props) => (props.isboolean ? "white" : props.color)};
`;

/////////////

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
  isboolean: boolean;
}

export const PlayButton = styled.div<IBooleanProps>`
  background-image: ${(props) =>
    props.isboolean ? `url(${image.stop})` : `url(${image.play})`};
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 20%;
  cursor: pointer;
`;

export const Meta = styled.p`
  font-size: 1.2em;
  font-weight: ${semibold};
  margin-top: 1em;
  margin-bottom: 10px;
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
  font-size: 1.2em;
  font-weight: ${semibold};
  word-break: keep-all;
  padding-bottom: 3%;
  margin-bottom: 10%;
  line-height: 1.5em;
  border-bottom: 1px solid white;
`;

export const Playlist = styled.div`
  /* border: 1px solid black; */
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  height: 30%;
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
  border-radius: 100px;
  margin-left: 10px;
  p {
    font-size: 10px;
    padding: 5px 5px;
    font-weight: ${bold};
  }
`;

interface IPlayingRowProps extends IColorProps {
  isplaying: boolean;
}

export const PlaylistRow = styled.div<IPlayingRowProps>`
  color: ${(props) => (props.isplaying ? props.color : "#C2D1C2")};
  font-weight: ${(props) => (props.isplaying ? `${bold}` : `${medium}`)};
  font-size: ${(props) => (props.isplaying ? "1.5em" : "1.4em")};
  width: 100%;
  display: flex;
  justify-content: baseline;
  align-items: center;
  cursor: pointer;
  overflow-x: hidden;
  transition: color 0.1s linear, font-size 0.1s linear, font-weight 0.1s linear;
`;

interface ITitle {
  isboolean: boolean;
  numbervalue: number;
}
export const SongIndex = styled.div``;

export const SongTitle = styled.div<ITitle>`
  white-space: nowrap;
  padding: 0.7em 0em;
  @keyframes scrollText {
    from {
      transform: translateX(5%);
    }
    to {
      transform: translateX(-${(props) => props.numbervalue}px);
    }
  }

  ${(props) =>
    props.isboolean &&
    props.numbervalue > 0 &&
    css`
      p {
        animation: scrollText 5s linear infinite; /* Adjust the animation duration as needed */
      }
    `}
`;
export const Footer = styled.div`
  font-size: 10px;
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translate(-50%, 0);
  line-height: 1.5em;
`;

export const ImageWrapper = styled.div<IImageProps>`
  width: 63%;
  height: 100vh;
  background-size: 115% 115%;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.image});
  width: 100%;
  height: 100%;
`;
