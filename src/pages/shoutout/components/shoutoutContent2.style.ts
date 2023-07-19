import { styled, css } from "styled-components";
import Logo2 from "../assets/logo2.png";
import backImg from "../assets/back.png";

export const Content2 = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  /* border: 1px solid red; */
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

export const LogoDiv2 = styled.div<ISmall>`
  background-image: url(${Logo2});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: ${(props) => (props.issmall ? "15rem" : "30rem")};
  height: ${(props) => (props.issmall ? "15rem" : "30rem")};
  position: absolute;
  top: ${(props) => (props.issmall ? "15%" : "50%")};
  left: 50%;
  transform: translate(-50%, -50%);

  transition: all 0.5s;
`;

interface IVisible {
  visible: boolean;
}

export const CommentContainer = styled.div<IVisible>`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%);
  opacity: ${(props) => (props.visible ? "1" : "0")};
  transition: opacity 0.5s;
  width: 50%;
  /* border: 1px solid red; */
`;

export const CommentForm = styled.form`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  gap: 1%;
`;

export const CommentInput = styled.input`
  width: 90%;
  background-color: #1b1b1b;
  border: 1px solid #434343;
  border-radius: 10px;
  color: white;
  padding: 1rem;
`;

export const CommentButton = styled.button`
  width: 10%;
  background-color: #1b1b1b;
  border: 1px solid #434343;
  color: white;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  font-size: 1rem;
  cursor: pointer;
`;

export const CommentList = styled.ul`
  list-style: none;
  padding: 0;
  background-color: #1b1b1b;
  border: 1px solid #434343;
  opacity: 0.8;
  border-radius: 10px;
  max-height: 50vh;
  overflow: auto;

  ${({ theme }) =>
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
    `};
`;

export const CommentListItem = styled.li`
  padding: 1rem;
  position: relative;

  &:not(:last-child) {
    border-bottom: 1px dashed rgba(255, 255, 255, 0.1);
  }
`;

export const CommentContent = styled.p`
  color: white;
  margin: 0;
  padding: 0;
  font-size: 0.8rem;
  font-weight: bold;
`;

export const CommentDate = styled.p`
  color: white;
  margin: 0;
  padding: 0;
  font-size: 0.6rem;
  position: absolute;
  bottom: 10%;
  right: 1%;
`;
