import { styled } from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: #1b1b1b;
`;

export const MarginDiv = styled.div`
  width: 100%;
  height: 20vh;
  border: 1px white solid;
`;

export const Logo = styled.div``;

export const Content1 = styled.div``;

export const Column = styled.div`
  border: 1px solid red;
  position: relative;
  width: 500px;
  height: 50vh;
`;

export const Title = styled.div`
  /* border: 1px solid white; */
  white-space: pre-line;
  font-size: 2.5rem;
  line-height: 3rem;
  font-weight: 600;
  color: white;
`;

export const SubTitle = styled.div`
  /* border: 1px solid white; */
  white-space: pre-line;
  font-size: 1rem;
  font-weight: 100;
  width: 500px;
  color: white;
`;

interface IImageProps {
  img: string;
}

export const Card = styled.div<IImageProps>`
  background-image: url(${(props) => props.img});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 300px;
  height: 500px;
  position: absolute;
  margin-left: 5rem;
`;
