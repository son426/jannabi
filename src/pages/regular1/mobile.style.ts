import { styled } from "styled-components";
import { backgroundImgDefault, positionCenter } from "../../constants/style";

const h1 = "40px";
const h2 = "32px";
const h3 = "24px";
const h4 = "16px";
const h5 = "12px";

const bold = "700";
const semibold = "500";
const medium = "300";
const thin = "100";

const red = "#e1321b";
const black = "1b1b1b";
const yellow = "#fec800";
const eaeaea = "eaeaea";
const fff = "ffffff";

interface IString {
  stringvalue: string;
}
interface IImageProps {
  image: string;
}

interface IBoolean {
  isboolean: boolean;
}

export const Wrapper = styled.div`
  background-color: black;
`;

export const IntroDiv = styled.div<IString>`
  width: 100%;
  height: 100vh;
  background-image: url(${(props) => props.stringvalue});
  background-size: 100% 100%;
  background-repeat: no-repeat;
`;

export const AlbumDiv = styled.div<IString>`
  width: 205px;
  aspect-ratio: 1/1;
  background-image: url(${(props) => props.stringvalue});
  ${backgroundImgDefault};
  ${positionCenter};
  position: absolute;
  top: 20%;
  transform: translate(-65%, -30%);
`;
export const LpDiv = styled.div<IString>`
  ${backgroundImgDefault};
  background-image: url(${(props) => props.stringvalue});
  background-size: 82% 82%;
  width: 205px;
  aspect-ratio: 1/1;
  ${positionCenter};
  position: absolute;
  top: 20%;
  transform: translate(-35%, -30%);
`;
export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${yellow};
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
  color: white;
  position: absolute;
  width: 100%;
  height: 300px;
  ${positionCenter};
  transform: translate(-50%, -20%);
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 12px;
`;

export const Row1 = styled.div`
  font-size: ${h5};
  width: 100px;
  text-align: center;
  p {
    padding: 8px;
    border: 1px solid white;
    border-radius: 16px;
  }
`;
export const Row2 = styled.div`
  width: 100%;
  display: flex;
  justify-content: baseline;
  align-items: end;
  gap: 10px;
  margin-bottom: 12px;
  .korean {
    font-size: ${h3};
    font-weight: ${bold};
  }
  .english {
    font-size: ${h5};
    font-weight: ${thin};
  }
`;
export const Row3 = styled.div`
  width: 100%;
  word-break: keep-all;
  font-size: ${h4};
  font-weight: ${medium};
  line-height: ${h3};
`;
export const ContentDiv = styled.div<IString>`
  width: 100%;
  height: 100vh;
  padding: 30px;
  padding-top: 50px;

  background-image: url(${(props) => props.stringvalue});
  background-size: 100% 98%;
  background-position: bottom;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: baseline;
  white-space: pre-line;
`;
export const Index = styled.div`
  font-family: "Pinyon Script", cursive;
  color: ${red};
  font-weight: ${thin};
  font-size: ${h3};
  margin-bottom: 10px;
`;
export const Title = styled.div`
  color: ${red};
  font-weight: ${bold};
  font-size: ${h3};
  margin-bottom: 50px;
  text-align: center;
  line-height: 26px;
`;
export const AlbumCoverImage = styled.div<IImageProps>`
  width: 100%;
  aspect-ratio: 1/1;
  background-image: url(${(props) => props.image});
  background-size: 125% 125%;
  background-position: center;
  background-repeat: no-repeat;
  margin-bottom: 20px;
`;
export const Description = styled.div`
  text-align: center;
  color: white;
  font-weight: ${medium};
  font-size: ${h4};
  line-height: ${h3};
  white-space: pre-line;
`;

export const FloatingButtonDiv = styled.div`
  width: 70px;
  height: 70px;
  padding: 2px 5px;
  border-radius: 10px;
  background-color: #e1321b;
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 3;
  display: flex;
  flex-direction: column;
`;

export const FloatingButton = styled.div<IString>`
  cursor: pointer;
  width: 100%;
  height: 70%;
  background-image: url(${(props) => props.stringvalue});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 1;
`;

export const MenuDiv = styled.div`
  color: white;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  z-index: 1;
  background-color: #1b1b1b;
  opacity: 0.9;
  font-size: ${h3};
  font-weight: ${semibold};
  border-radius: 10px;
`;
export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: baseline;
  gap: 25px;
  padding: ${h4} 0px;
  border-bottom: 1px solid white;
  cursor: pointer;
  &:last-child {
    border-bottom: none;
  }
`;

export const MenuColumn1 = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const MenuColumn2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  white-space: nowrap;
`;

export const PlayerDiv = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  font-size: ${h4};
  padding-left: ${h3};
`;

export const PlayerRow = styled.div<IBoolean>`
  display: flex;
  cursor: pointer;
  color: ${(props) => (props.isboolean ? "red" : "white")};
  z-index: 2;
  gap: 12px;
  padding: 10px;
`;
export const PlayerColumn1 = styled.div`
  display: flex;
  justify-content: baseline;
`;
export const PlayerColumn2 = styled.div`
  display: flex;
  justify-content: baseline;
  width: 100%;
`;
