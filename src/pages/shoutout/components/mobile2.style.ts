import { styled, css } from "styled-components";
import Logo2 from "../assets/logo2.png";
import backImg from "../assets/back.png";

export const ViewDiv = styled.div`
  width: 100%;
  position: relative;
  border: 5px solid white;
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
  height: 150vh;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextDiv = styled.div`
  width: 100%;
  padding: 8%;
  display: flex;
  flex-direction: column;
  gap: 1.5em;
`;

export const Title = styled.div`
  border: 1px solid red;
  white-space: pre-line;
  font-size: 1.6em;
  line-height: 1.25em;
  font-weight: 600;
  color: white;
  width: 100%;
`;

export const SubTitle = styled.div`
  border: 1px solid red;
  white-space: pre-line;
  font-size: 0.9em;
  line-height: 1.3em;
  font-weight: 200;
  color: white;
  width: 100%;
  word-break: keep-all;
`;

interface ISmall {
  issmall: boolean;
}

interface IBoolean {
  booleanvalue: boolean;
}

interface INumberProps {
  scalevalue: number;
}

export const LogoDiv2 = styled.div<INumberProps>`
  border: 1px solid red;
  background-image: url(${Logo2});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 30vh;
  transform: scale(${(props) => props.scalevalue});
  position: sticky;
  top: -30px;
  background-color: black;
`;

interface IVisible {
  visible: boolean;
}

export const CommentDiv = styled.div`
  border: 1px solid red;
  width: 100%;
  height: 30%;
  color: white;
  overflow: hidden;
`;
export const CommentUl = styled.ul``;
export const CommentLi = styled.li`
  display: flex;
  flex-direction: column;
`;
export const CommentRow1 = styled.div``;
export const CommentRow2 = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const CommentContent = styled.div``;
export const CommentName = styled.div``;
export const CommentDate = styled.div``;

export const CommentForm = styled.form`
  width: 100%;
  border: 1px solid red;
  height: 60px;
  display: flex;
  justify-items: space-between;
  gap: 10px;
  color: white;
`;
export const CommentInput = styled.input`
  width: 88%;
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
  width: 12%;
  padding: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  font-size: 1rem;
  cursor: pointer;
`;

// export const CommentContainer = styled.div<IVisible>`
//   position: absolute;
//   top: 30%;
//   left: 50%;
//   transform: translate(-50%);
//   opacity: ${(props) => (props.visible ? "1" : "0")};
//   transition: opacity 0.5s;
//   width: 50%;
//   /* border: 1px solid red; */
// `;

// export const CommentList = styled.ul`
//   list-style: none;
//   padding: 0;
//   background-color: #1b1b1b;
//   border: 1px solid #434343;
//   opacity: 0.8;
//   border-radius: 10px;
//   max-height: 50vh;
//   overflow: auto;

//   ${({ theme }) =>
//     theme &&
//     css`
//       scrollbar-width: thin;
//       scrollbar-color: #2f3542 #434343;

//       &::-webkit-scrollbar {
//         width: 5px;
//       }

//       &::-webkit-scrollbar-thumb {
//         background-color: #434343;
//         border-radius: 10px;
//       }

//       &::-webkit-scrollbar-thumb:hover {
//         background-color: #2f3542;
//       }

//       &::-webkit-scrollbar-track {
//         background-color: transparent;
//       }
//     `};
// `;

// export const CommentListItem = styled.li`
//   padding: 1rem;
//   position: relative;

//   &:not(:last-child) {
//     border-bottom: 1px dashed rgba(255, 255, 255, 0.1);
//   }
// `;

// export const CommentContent = styled.p`
//   color: white;
//   margin: 0;
//   padding: 0;
//   font-size: 0.45em;
// `;

// export const CommentDate = styled.p`
//   color: white;
//   margin: 0;
//   padding: 0;
//   font-size: 0.2em;
//   position: absolute;
//   bottom: 10%;
//   right: 1%;
// `;
