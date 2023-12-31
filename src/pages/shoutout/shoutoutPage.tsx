import * as S from "./shoutoutPage.style";
import { useState, useEffect, useRef } from "react";
import { getDocs, collection, query, orderBy } from "firebase/firestore";
import { db } from "../../config/firebase-config";
import ShoutoutContent1 from "./components/shoutoutContent1";
import ShoutoutContent2 from "./components/shoutoutContent2";
import { Mobile, Default } from "../../components/mediaquery";
import { useNavigate } from "react-router-dom";
import { useAudio } from "../../hooks/useAudio";
import { loadImages } from "@/hooks/tools";
import Loading from "@/components/loading";

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
  const [scrollHeight, setScrollHeight] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [imageFiles, setImageFiles] = useState<string[]>([]);
  const [imageFetched, setImageFetched] = useState<boolean>(false);

  const commentDataRef = collection(db, "comment");

  const { audioPlay, audioStop, audioRef } = useAudio(
    "https://firebasestorage.googleapis.com/v0/b/jannabi-faniste.appspot.com/o/audio%2Fregular1%2F08.mp3?alt=media&token=bd6ffce1-bb48-46e7-b54f-31aed47dcb9d"
  );

  const navigate = useNavigate();

  const handleAudioEnd = () => {
    alert("끝");
  };

  useEffect(() => {
    const fetchImageFiles = async () => {
      const fetchedImages = await loadImages("shoutout");
      console.log(fetchedImages);
      setImageFiles(fetchedImages);
      setImageFetched(true);
    };

    const fetchAllFiles = async () => {
      await fetchImageFiles();
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    };

    fetchAllFiles();
  }, []);

  // audio 재생
  useEffect(() => {
    if (!audioRef.current.paused) return;
    const audioElement = audioRef.current;

    audioPlay();
    audioElement.addEventListener("ended", handleAudioEnd);

    return () => {
      audioStop();
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
    setScrollHeight(scrollTop);
    const scrollThreshold = 500;
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
      <Loading isloading={isLoading} loadingtext="앵콜관" />
      <Default>
        <S.Wrapper>
          <ShoutoutContent1
            img_kim={imageFiles[2]}
            img_choi={imageFiles[1]}
            img_logo1={imageFiles[3]}
          />
          <ShoutoutContent2
            img_back={imageFiles[0]}
            img_logo2={imageFiles[4]}
            isSmall={isSmall}
            isCommentVisible={isCommentVisible}
            commentDataRef={commentDataRef}
            fetchComments={fetchComments}
            comments={comments}
          />
        </S.Wrapper>
      </Default>
      <Mobile>
        <S.Wrapper>
          <ShoutoutContent1
            img_kim={imageFiles[2]}
            img_choi={imageFiles[1]}
            img_logo1={imageFiles[3]}
          />
          <ShoutoutContent2
            img_back={imageFiles[0]}
            img_logo2={imageFiles[4]}
            isSmall={isSmall}
            isCommentVisible={isCommentVisible}
            commentDataRef={commentDataRef}
            fetchComments={fetchComments}
            comments={comments}
          />
        </S.Wrapper>
      </Mobile>
    </>
  );
}

export default ShoutoutPage;
