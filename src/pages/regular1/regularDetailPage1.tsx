import * as S from "./regularDetailPage1.style";
import { SONGDATA, AUDIOFILES } from "../../data/data";
import { useState, useEffect, useRef } from "react";

function RegularDetailPage1() {
  const [isVisible, setIsVisible] = useState(true); // scroll 관련
  const [currentContent, setCurrentContent] = useState<any>();
  const [myAudio, setMyAudio] = useState(new Audio()); // audio 관련
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentAudioIndex, setCurrentAudioIndex] = useState(0);

  const contentRef = useRef<HTMLDivElement[]>([]);

  // scroll view 관련
  const targetCallback = (entries: any, observer: any) => {
    entries.forEach((entry: any) => {
      if (entry.isIntersecting) {
        // 타겟이 관찰될 때 실행코드
        console.log(entry.target);
        setCurrentContent(entry.target);
      }
    });
  };

  // audio 관련
  const playAudio = () => {
    myAudio.play();
    setIsPlaying(true);
  };

  const playNextAudio = () => {
    const nextIndex = (currentAudioIndex + 1) % AUDIOFILES.length;
    setCurrentAudioIndex(nextIndex);
    // audio
    myAudio.src = AUDIOFILES[nextIndex];
    myAudio.play();
    setIsPlaying(true);
  };

  useEffect(() => {
    setCurrentContent(contentRef.current[0]);
    const observer = new IntersectionObserver(targetCallback, {
      threshold: 0.75,
    });

    contentRef.current.map((content) => {
      if (content) observer.observe(content);
    });

    setMyAudio(new Audio(AUDIOFILES[0]));
  }, []);

  return (
    <>
      <S.BackgroundDiv />
      <S.Index isOn={isVisible}>
        <S.IndexTop>
          {SONGDATA.slice(0, 5).map((data, index) => (
            <S.IndexMenu
              key={index}
              onClick={() => {
                contentRef.current[index].scrollIntoView({
                  behavior: "smooth",
                });
                setCurrentContent(contentRef.current[index]);
              }}
              selected={contentRef.current[index] === currentContent}
            >
              <p>{data.index}.</p>
              <p>{data.title}</p>
            </S.IndexMenu>
          ))}
        </S.IndexTop>
        <S.IndexBottom>
          {SONGDATA.slice(5).map((data, index) => (
            <S.IndexMenu
              key={index}
              onClick={() => {
                contentRef.current[index + 5].scrollIntoView({
                  behavior: "smooth",
                });
                setCurrentContent(contentRef.current[index + 5]);
              }}
              selected={contentRef.current[index + 5] === currentContent}
            >
              <p>{data.index}.</p>
              <p>{data.title}</p>
            </S.IndexMenu>
          ))}
        </S.IndexBottom>
      </S.Index>
      <div style={{ marginTop: "10vh" }}></div>
      {/* margin 용도 div */}

      <S.ContentDiv ref={(el: HTMLDivElement) => (contentRef.current[0] = el)}>
        1번 콘텐츠
      </S.ContentDiv>
      <S.ContentDiv ref={(el: HTMLDivElement) => (contentRef.current[1] = el)}>
        2번 콘텐츠
      </S.ContentDiv>
      <S.ContentDiv ref={(el: HTMLDivElement) => (contentRef.current[2] = el)}>
        3번 콘텐츠
      </S.ContentDiv>
      <S.ContentDiv ref={(el: HTMLDivElement) => (contentRef.current[3] = el)}>
        4번 콘텐츠
      </S.ContentDiv>
      <S.ContentDiv ref={(el: HTMLDivElement) => (contentRef.current[4] = el)}>
        5번 콘텐츠
      </S.ContentDiv>
      <S.ContentDiv ref={(el: HTMLDivElement) => (contentRef.current[5] = el)}>
        6번 콘텐츠
      </S.ContentDiv>
      <S.ContentDiv ref={(el: HTMLDivElement) => (contentRef.current[6] = el)}>
        7번 콘텐츠
      </S.ContentDiv>
      <S.ContentDiv ref={(el: HTMLDivElement) => (contentRef.current[7] = el)}>
        8번 콘텐츠
      </S.ContentDiv>
      <S.ContentDiv ref={(el: HTMLDivElement) => (contentRef.current[8] = el)}>
        9번 콘텐츠
      </S.ContentDiv>
      <S.ContentDiv ref={(el: HTMLDivElement) => (contentRef.current[9] = el)}>
        10번 콘텐츠
      </S.ContentDiv>
    </>
  );
}

export default RegularDetailPage1;
