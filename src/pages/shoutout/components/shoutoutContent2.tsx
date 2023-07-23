import * as S from "./shoutoutContent2.style";
import * as M from "./mobile2.style";
import { useState, useEffect } from "react";
import { timeForToday } from "../../../hooks/tools";
import { addDoc, CollectionReference, DocumentData } from "firebase/firestore";
import { FiSend } from "../../../assets/icon";
import { IComment } from "../shoutoutPage";
import { Default, Mobile } from "../../../components/mediaquery";

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
  const [scale, setScale] = useState<number>(100);

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

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollThreshold = 700;
      const scale = Math.min(1, 1 - (scrollTop - scrollThreshold) / 300);
      if (scale <= 0.5) return setScale(0.5);
      setScale(scale);
      console.log(scale);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scale]);

  return (
    <>
      <Default>
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
      </Default>
      <Mobile>
        <M.ViewDiv>
          {/* <M.BackImageDiv></M.BackImageDiv> */}
          <M.Content2>
            <M.TextDiv>
              <M.Title>
                힙한 거, 쿨한 거 싫어요.{"\n"}그래서 가장 뜨거울{"\n"}우리들의
                여름밤.
              </M.Title>
              <M.SubTitle>
                잔나비는 2014년 데뷔한 대한민국의 록 밴드이다. 잔나비란
                원숭이라는 뜻의 순우리말로, 멤버 전원이 1992년생 원숭이띠라서
                붙여진 이름이다. 최정훈(보컬)과 김도형(기타)으로 구성된 2인조
                밴드이다.
              </M.SubTitle>
            </M.TextDiv>
            <M.LogoDiv2 scalevalue={scale}></M.LogoDiv2>
            <M.CommentDiv>
              <M.CommentUl>
                {comments.map((comment, index) => {
                  const time = timeForToday(comment.date);
                  return (
                    <M.CommentLi key={index}>
                      <M.CommentRow1>
                        <M.CommentContent>{comment.content}</M.CommentContent>
                      </M.CommentRow1>
                      <M.CommentRow2>
                        <M.CommentName>기쁨의 잔나비</M.CommentName>
                        <M.CommentDate>{time}</M.CommentDate>
                      </M.CommentRow2>
                    </M.CommentLi>
                  );
                })}
              </M.CommentUl>
            </M.CommentDiv>
            <M.CommentForm onSubmit={handleSubmit}>
              <M.CommentInput
                name="comment"
                type="text"
                placeholder="방명록은 여기에!"
                onChange={(e: any) => {
                  setInputData(e.target.value);
                }}
                value={inputData}
              />
              <M.CommentButton type="submit">
                <FiSend />
              </M.CommentButton>
            </M.CommentForm>
          </M.Content2>
        </M.ViewDiv>
      </Mobile>
    </>
  );
}

export default ShoutoutContent2;
