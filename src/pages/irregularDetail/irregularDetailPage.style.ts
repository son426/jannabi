import { styled } from "styled-components";

interface IBackgroundProps {
  backgroundcolor: string | undefined;
}

interface IContentProps {
  fontcolor: string | undefined;
}

export const BackgroundDiv = styled.div<IBackgroundProps>`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.backgroundcolor};
  opacity: 0.92;
  position: fixed;
  top: 0;
`;

export const ContentDiv = styled.div<IContentProps>`
  width: 100%;
  height: 100%;
  color: ${(props) => props.fontcolor};
  font-weight: 600;
  img {
    filter: drop-shadow(0 0 5px #000);
    width: 300px;
    height: 300px; // 같은 값
  }
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 1.3em;
  padding: 0 15% 0 15%;
`;

export const ContentColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  white-space: pre-line;
  height: 300px; // 같은 값
  width: calc(100vw - 300px);
`;

export const BackButton = styled.button`
  position: fixed;
  top: 0;
  left: 0;
`;
