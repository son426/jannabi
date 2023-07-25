import { styled, css } from "styled-components";
import Logo2 from "../assets/logo2.png";
import backImg from "../assets/back.png";

interface ISmall {
  issmall: boolean;
}

interface IBoolean {
  booleanvalue: boolean;
}

interface INumberProps {
  scalevalue: number;
}

interface IVisible {
  visible: boolean;
}

export const ViewDiv = styled.div`
  width: 100%;
  height: auto;
  position: relative;
`;

export const BackImageDiv = styled.div`
  background-image: url(${backImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0.2;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
`;

export const Content2 = styled.div`
  width: 100%;

  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 40%;
  font-size: 10px;
`;

export const TextDiv = styled.div`
  width: 100%;
  padding: 8%;
  display: flex;
  flex-direction: column;
  gap: 1.5em;
`;

export const Title = styled.div`
  white-space: pre-line;
  font-size: 2.4em;
  line-height: 1.25em;
  font-weight: 600;
  color: white;
  width: 100%;
`;

export const SubTitle = styled.div`
  white-space: pre-line;
  font-size: 1.4em;
  line-height: 1.3em;
  font-weight: 200;
  color: white;
  width: 100%;
  word-break: keep-all;
`;

export const LogoDiv2 = styled.div<INumberProps>`
  background-image: url(${Logo2});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin-top: 25vh;
  width: 100%;
  height: 30vh;
  transform: scale(${(props) => props.scalevalue});
  position: sticky;
  position: -webkit-sticky; /* 사파리 브라우저 지원 */
  top: -30px;
  transition: scale 1s linear forwards;
`;

export const CommentForm = styled.form<IVisible>`
  width: calc(100% - 3.2em);

  height: 60px;
  display: flex;
  justify-items: space-between;
  gap: 10px;
  color: white;
  position: fixed;
  bottom: 5%;
  opacity: ${(props) => (props.visible ? "1" : "0")};
  transition: opacity 0.5s linear;
  background-color: black;
`;

export const CommentDiv = styled.div`
  width: 100%;
  color: white;
  padding: 1.6em;
`;
export const CommentUl = styled.ul``;
export const CommentLi = styled.li`
  display: flex;
  flex-direction: column;
  padding: 1.2em;
  gap: 8px;
  font-weight: 300;
`;
export const CommentRow1 = styled.div``;
export const CommentRow2 = styled.div`
  display: flex;
  justify-content: space-between;
  color: #dfdfdf;
`;
export const CommentContent = styled.div`
  font-size: 1.6em;
`;
export const CommentName = styled.div`
  font-size: 1.2em;
`;
export const CommentDate = styled.div`
  font-size: 1.2em;
`;

export const CommentInput = styled.input`
  flex: 1;
  background-color: #1b1b1b;
  border: 1px solid #434343;
  border-radius: 10px;
  color: white;
  padding: 1rem;
`;
export const CommentButton = styled.button`
  background-color: #1b1b1b;
  border: 1px solid #434343;
  color: white;
  aspect-ratio: 1/1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  font-size: 1rem;
  cursor: pointer;
`;
