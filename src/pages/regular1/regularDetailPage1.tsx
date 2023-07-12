import * as S from "./regularDetailPage1.style";
import { SONGDATA, AUDIOFILES } from "../../data/data";
import { useState, useEffect, useRef } from "react";
import { useAudio } from "../../hooks/useAudio";

function RegularDetailPage1() {
  const [isVisible, setIsVisible] = useState(true); // scroll 관련
  const [currentContent, setCurrentContent] = useState<any>();

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentAudioIndex, setCurrentAudioIndex] = useState(0);
  const [audioInstances, setAudioInstances] = useState<HTMLAudioElement[]>([]);

  const contentRef = useRef<HTMLDivElement[]>([]);
  const audioRef = useRef<HTMLAudioElement>(new Audio());

  // scroll view 관련
  const targetCallback = (entries: any, observer: any) => {
    entries.forEach((entry: any) => {
      if (entry.isIntersecting) {
        // 타겟이 관찰될 때 실행코드
        const musicIndex = parseInt(entry.target.dataset.index) - 1;
        setCurrentAudioIndex(musicIndex);
        setCurrentContent(entry.target);
      }
    });
  };

  // index 처리 관련
  useEffect(() => {
    setCurrentContent(contentRef.current[0]);
    const observer = new IntersectionObserver(targetCallback, {
      threshold: 0.75,
    });

    contentRef.current.map((content) => {
      if (content) observer.observe(content);
    });
  }, []);

  // audio 관련
  useEffect(() => {
    const loadedAudioInstances = AUDIOFILES.map((audioFile) => {
      const audio = new Audio(audioFile);
      audio.preload = "auto";
      return audio;
    });

    setAudioInstances(loadedAudioInstances);
  }, []);

  useEffect(() => {
    audioRef.current = audioInstances[currentAudioIndex];
    console.log(audioRef.current);

    if (audioRef.current !== undefined) {
      // stop
      console.log(audioRef.current.src);
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      if (audioRef.current.paused) {
        audioRef.current.muted = true;
        audioRef.current.play();
        audioRef.current.muted = false;
      }

      return () => {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      };
    }
  }, [currentAudioIndex, audioInstances]);

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

      <S.ContentDiv
        ref={(el: HTMLDivElement) => (contentRef.current[0] = el)}
        data-index="1"
      >
        1번 콘텐츠
      </S.ContentDiv>
      <S.ContentDiv
        ref={(el: HTMLDivElement) => (contentRef.current[1] = el)}
        data-index="2"
      >
        2번 콘텐츠
      </S.ContentDiv>
      <S.ContentDiv
        ref={(el: HTMLDivElement) => (contentRef.current[2] = el)}
        data-index="3"
      >
        3번 콘텐츠
      </S.ContentDiv>
      <S.ContentDiv
        ref={(el: HTMLDivElement) => (contentRef.current[3] = el)}
        data-index="4"
      >
        4번 콘텐츠
      </S.ContentDiv>
      <S.ContentDiv
        ref={(el: HTMLDivElement) => (contentRef.current[4] = el)}
        data-index="5"
      >
        5번 콘텐츠
      </S.ContentDiv>
      <S.ContentDiv
        ref={(el: HTMLDivElement) => (contentRef.current[5] = el)}
        data-index="6"
      >
        6번 콘텐츠
      </S.ContentDiv>
      <S.ContentDiv
        ref={(el: HTMLDivElement) => (contentRef.current[6] = el)}
        data-index="7"
      >
        7번 콘텐츠
      </S.ContentDiv>
      <S.ContentDiv
        ref={(el: HTMLDivElement) => (contentRef.current[7] = el)}
        data-index="8"
      >
        8번 콘텐츠
      </S.ContentDiv>
      <S.ContentDiv
        ref={(el: HTMLDivElement) => (contentRef.current[8] = el)}
        data-index="9"
      >
        9번 콘텐츠
      </S.ContentDiv>
      <S.ContentDiv
        ref={(el: HTMLDivElement) => (contentRef.current[9] = el)}
        data-index="10"
      >
        10번 콘텐츠
      </S.ContentDiv>
    </>
  );
}

export default RegularDetailPage1;
