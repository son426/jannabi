import { styled } from "styled-components";

interface IString {
  stringvalue: string;
}

export const Background = styled.div<IString>`
  width: 100%;
  height: 100vh;
  background-image: url(${(props) => props.stringvalue});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Pictures = styled.div<IString>`
  width: 100%;
  height: 100vh;
  background-image: url(${(props) => props.stringvalue});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  top: 0;
`;
