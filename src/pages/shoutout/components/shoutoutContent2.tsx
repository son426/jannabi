import { useState, useEffect } from "react";
import { timeForToday } from "../../../hooks/tools";
import * as S from "../shoutoutPage.style";
import { addDoc, CollectionReference, DocumentData } from "firebase/firestore";
import { FiSend } from "../../../assets/icon";
import { IComment } from "../shoutoutPage";

interface IShoutoutProps {
  isSmall: boolean;
  isCommentVisible: boolean;
  commentDataRef: CollectionReference<DocumentData>;
  comments: IComment[];
  fetchComments: () => Promise<void>;
}

function ShoutoutContent2({
  isSmall,
  isCommentVisible,
  commentDataRef,
  comments,
  fetchComments,
}: IShoutoutProps) {
  const [inputData, setInputData] = useState<string>("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      // Firebase에 commentData 추가
      if (inputData.length < 2) {
        alert("두 글자 이상 입력해주세요.");
        return;
      }
      const docRef = await addDoc(commentDataRef, {
        content: inputData,
        date: new Date(),
      });
      console.log("댓글이 성공적으로 추가되었습니다.", docRef.id);
      setInputData("");
      fetchComments();
    } catch (error) {
      console.error("댓글 추가 중 오류가 발생했습니다.", error);
    }
  };

  return (
    <S.Content2>
      <S.BackImageDiv></S.BackImageDiv>
      <S.LogoDiv2 issmall={isSmall}></S.LogoDiv2>
      {isSmall && (
        <S.CommentContainer visible={isCommentVisible}>
          <S.CommentForm onSubmit={handleSubmit}>
            <S.CommentInput
              name="comment"
              type="text"
              placeholder="방명록은 여기에!"
              onChange={(e: any) => {
                setInputData(e.target.value);
              }}
              value={inputData}
            />
            <S.CommentButton type="submit">
              <FiSend />
            </S.CommentButton>
          </S.CommentForm>

          <S.CommentList>
            {comments.map((comment, index) => {
              const time = timeForToday(comment.date);
              return (
                <S.CommentListItem key={index}>
                  <S.CommentContent>{comment.content}</S.CommentContent>
                  <S.CommentDate>{time}</S.CommentDate>
                </S.CommentListItem>
              );
            })}
          </S.CommentList>
        </S.CommentContainer>
      )}
    </S.Content2>
  );
}

export default ShoutoutContent2;
