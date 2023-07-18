import * as S from "./shoutoutPage.style";
import choi from "./choi.png";
import kim from "./kim.png";
import { useState, useEffect } from "react";
import {
  getDocs,
  collection,
  addDoc,
  query,
  orderBy,
} from "firebase/firestore";
import { db } from "../../config/firebase-config";
import { timeForToday } from "../../hooks/tools";
import { FiSend } from "../../assets/icon";

interface IComment {
  content: string;
  date: Date;
  id: string;
}

function ShoutoutPage() {
  const [isSmall, setIsSmall] = useState<boolean>(false);
  const [comments, setComments] = useState<IComment[]>([]);
  const [isCommentVisible, setIsCommentVisible] = useState<boolean>(false);
  const [inputData, setInputData] = useState<string>("");

  const commentDataRef = collection(db, "comment");

  const fetchComments = async () => {
    try {
      const data = await getDocs(
        query(commentDataRef, orderBy("date", "desc"))
      );
      const filteredData = data.docs.map((doc) => {
        const commentData = doc.data();
        return {
          ...commentData,
          date: commentData.date.toDate(),
          id: doc.id,
        };
      });
      console.log(filteredData);
      setComments(filteredData as IComment[]);
    } catch (error) {
      console.error("댓글을 가져오는 중 오류가 발생했습니다.", error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollThreshold = 600;
    if (scrollTop > scrollThreshold) {
      setIsSmall(true);
    } else {
      setIsSmall(false);
    }
  };

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
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isSmall) {
      const timeout = setTimeout(() => {
        setIsCommentVisible(true);
      }, 300);

      return () => {
        clearTimeout(timeout);
      };
    } else {
      setIsCommentVisible(false);
    }
  }, [isSmall]);

  return (
    <>
      <S.Wrapper>
        <S.Content1>
          <S.LogoDiv></S.LogoDiv>
          <S.MarginDiv></S.MarginDiv>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <S.Column>
              <S.Title>
                힙한 거, 쿨한 거 싫어요.{"\n"}그래서 가장 뜨거울{"\n"}우리들의
                여름밤.
              </S.Title>
              <S.SubTitle>
                잔나비는 2014년 데뷔한 대한민국의 록 밴드이다. 잔나비란
                원숭이라는 뜻의 순우리말로, 멤버 전원이 1992년생 원숭이띠라서
                붙여진 이름이다. 최정훈(보컬)과 김도형(기타)으로 구성된 2인조
                밴드이다.
              </S.SubTitle>
              <S.CheckBox>
                <div>보컬리스트 최정훈</div>
                <div>기타리스트 김도형</div>
              </S.CheckBox>
            </S.Column>
            <S.Column>
              <S.Card
                img={kim}
                style={{ transform: "rotateZ(-10deg)" }}
              ></S.Card>
              <S.Card
                img={choi}
                style={{ transform: "rotateZ(10deg)" }}
              ></S.Card>
            </S.Column>
          </div>
        </S.Content1>
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
      </S.Wrapper>
    </>
  );
}

export default ShoutoutPage;
