import styled from "styled-components";
import backImg from "./background.png";
import shelfImg from "./group.png";

export const Img = styled.img``;

export const BackgroundDiv = styled.div`
  background-image: url(${backImg});
  width: 100%;
  height: 1020vh;
  position: absolute;
  top: 0;
  z-index: -1;
`;

// 외않됨?
export const Bookshelf = styled.div`
  background-image: url(${shelfImg});
`;

export const ContentDiv = styled.div``;

export const ContentDivRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.5em;
  color: white;
  gap: 0.3em;
  h1 {
    font-size: 1.8em;
    font-weight: 600;
  }
  margin: 1em;
`;
