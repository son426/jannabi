import * as S from "./shoutoutPage.style";
import { useState, useEffect, useRef } from "react";
import { getDocs, collection, query, orderBy } from "firebase/firestore";
import { db } from "../../config/firebase-config";
import ShoutoutContent1 from "./components/shoutoutContent1";
import ShoutoutContent2 from "./components/shoutoutContent2";
import { useAudio } from "../../hooks/useAudio";
import { AUDIOFILES } from "../../data/data";

export interface IComment {
  content: string;
  date: Date;
  id: string;
}

function ShoutoutPage() {
  const [isSmall, setIsSmall] = useState<boolean>(false);
  const [comments, setComments] = useState<IComment[]>([]);
  const [isCommentVisible, setIsCommentVisible] = useState<boolean>(false);
  const [isEnded, setIsEnded] = useState(false);

  const commentDataRef = collection(db, "comment");
  const audioRef = useRef<HTMLAudioElement>(new Audio());

  const handleAudioEnd = () => {
    window.location.href = "/secretend";
  };

  // audio 재생
  useEffect(() => {
    if (!audioRef.current.paused) return;

    const audioElement = audioRef.current;

    audioElement.src = AUDIOFILES[8];
    audioElement.load();
    audioElement.play();

    audioElement.addEventListener("ended", handleAudioEnd);

    return () => {
      audioElement.pause();
      audioElement.currentTime = 0;
      audioElement.removeEventListener("ended", handleAudioEnd);
    };
  }, []);

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
      setComments(filteredData as IComment[]);
    } catch (error) {
      console.error("댓글을 가져오는 중 오류가 발생했습니다.", error);
    }
  };

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollThreshold = 600;
    if (scrollTop > scrollThreshold) {
      setIsSmall(true);
    } else {
      setIsSmall(false);
    }
  };

  useEffect(() => {
    fetchComments();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isSmall) {
      const timeout = setTimeout(() => {
        setIsCommentVisible(true);
      }, 200);

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
        <ShoutoutContent1 />
        <ShoutoutContent2
          isSmall={isSmall}
          isCommentVisible={isCommentVisible}
          commentDataRef={commentDataRef}
          fetchComments={fetchComments}
          comments={comments}
        />
      </S.Wrapper>
    </>
  );
}

export default ShoutoutPage;
