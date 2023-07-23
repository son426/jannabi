import { styled, css } from "styled-components";
import Logo2 from "../assets/logo2.png";
import backImg from "../assets/back.png";

export const Content2 = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  /* border: 1px solid red; */
  font-size: 20px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const BackImageDiv = styled.div`
  background-image: url(${backImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  opacity: 0.2;
`;

interface ISmall {
  issmall: boolean;
}

export const LogoDiv2 = styled.div`
  border: 1px solid white;

  background-image: url(${Logo2});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 30%;

  transition: all 0.5s;

  margin-top: 20%;
  margin-bottom: 10%;
`;

interface IVisible {
  visible: boolean;
}

export const TextDiv = styled.div`
  padding: 2em;
  border: 1px solid white;
`;

export const Title = styled.div`
  /* border: 1px solid white; */
  white-space: pre-line;
  font-size: 1.3em;
  line-height: 1.25em;
  font-weight: 600;
  color: white;
  width: 100%;
`;

export const SubTitle = styled.div`
  /* border: 1px solid white; */
  white-space: pre-line;
  font-size: 0.65em;
  line-height: 1.3em;
  font-weight: 100;
  color: white;
  width: 100%;
  padding: 2em 0em;
`;

export const CommentContainer = styled.div<IVisible>`
  /* border: 1px solid white; */
  width: 100%;
  height: 10%;
  transition: opacity 0.5s;
`;

export const CommentUl = styled.ul`
  list-style: none;
  padding: 0;
  border: 1px solid #434343;
  background-color: red;
  border-radius: 10px;

  height: 100%;
  /* ${({ theme }) =>
    theme &&
    css`
      scrollbar-width: thin;
      scrollbar-color: #2f3542 #434343;

      &::-webkit-scrollbar {
        width: 5px;
      }

      &::-webkit-scrollbar-thumb {
        background-color: #434343;
        border-radius: 10px;
      }

      &::-webkit-scrollbar-thumb:hover {
        background-color: #2f3542;
      }

      &::-webkit-scrollbar-track {
        background-color: transparent;
      }
    `}; */
`;

export const CommentListItem = styled.li`
  &:not(:last-child) {
    border-bottom: 1px dashed rgba(255, 255, 255, 0.1);
  }

  display: flex;
  flex-direction: column;
  padding: 0.8em;
  gap: 4px;
`;

export const CommentContent = styled.div`
  color: white;
  margin: 0;
  padding: 0;
  font-size: 0.6em;
  line-height: 1.4em;
  font-weight: 100;
  display: flex;
  justify-content: baseline;
`;

export const CommentDate = styled.div`
  color: white;
  font-size: 0.2em;
  height: 100%;
  white-space: nowrap;
  display: flex;
  justify-content: end;
`;

export const CommentForm = styled.form`
  display: flex;
  justify-content: space-between;
  gap: 1%;
  width: 80%;
  margin: 0 auto;
  background-color: white;
  padding-bottom: 1em;
`;

export const CommentInput = styled.input`
  width: 90%;
  background-color: #1b1b1b;
  border: 2px solid #434343;
  border-radius: 10px;
  color: #989898;
  padding: 1rem;
`;

export const CommentButton = styled.button`
  width: 10%;
  background-color: #1b1b1b;
  border: 2px solid #434343;
  color: white;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  font-size: 1rem;
  cursor: pointer;
`;
