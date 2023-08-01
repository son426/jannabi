import { useState, useEffect, useRef } from "react";
import { Default, Desktop, Mobile } from "../../components/mediaquery";
import * as S from "./regularDetailPage3.style";
import * as M from "./mobile.style";
import images from "@/data/images/regular3";
import { DownArrowIcon, PauseIcon, PlayIcon } from "@/data/icon";
import { ILyric, regularData3 } from "@/data/meta/regular3";
import useScrollAnimation from "@/hooks/useScroll";
import useAudioPlayer from "@/hooks/useAudioPlayer";
import { wrapGrid } from "animate-css-grid";
interface ILyricIndex {
  [key: number]: boolean;
}

const initialLyricObject = {
  0: false,
  1: false,
  2: false,
  3: false,
  4: false,
  5: false,
  6: false,
  7: false,
  8: false,
  9: false,
  10: false,
};

function RegularDetailPage3() {
  const [lyricIndex, setLyricIndex] = useState<ILyricIndex>(initialLyricObject);
  const [nowIndex, setNowIndex] = useState<number>(0);
  const [selectedLyric, setSelectedLyric] = useState<ILyric>(
    regularData3[0].lyricData[0]
  );

  const containerRef1 = useRef<HTMLDivElement>(null);
  const containerRef2 = useRef<HTMLDivElement>(null);
  const lpRef = useRef<HTMLDivElement>(null);
  const albumRef = useRef<HTMLDivElement>(null);
  const boxRef1 = useRef<HTMLDivElement>(null);
  const boxRef2 = useRef<HTMLDivElement>(null);
  const flexContainerRef = useRef<HTMLDivElement>(null);

  const cardRefs = useRef<HTMLDivElement[]>([]);

  const albumData = regularData3;
  const initialTrack: string = albumData[nowIndex].audioFile;

  const {
    audioRef,
    toggleAudio,
    handleAudioTime,
    isAudioPlaying,
    setIsAudioPlaying,
    audioProgress,
    setAudioProgress,
  } = useAudioPlayer(initialTrack);

  useScrollAnimation(
    containerRef1,
    containerRef2,
    lpRef,
    albumRef,
    boxRef1,
    boxRef2
  );

  const handleLyricClick = (lyric: ILyric) => {
    setSelectedLyric(lyric);
    audioRef.current.currentTime = lyric.startTime;
    console.log(lyric);
  };

  useEffect(() => {
    if (flexContainerRef.current)
      wrapGrid(flexContainerRef.current, {
        duration: 500,
        easing: "backOut",
      });
  }, []);

  useEffect(() => {
    // 오디오 관련
    setIsAudioPlaying(true);
    if (!audioRef.current.paused) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    audioRef.current = new Audio(albumData[nowIndex].audioFile);
    audioRef.current.play();

    return () => {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    };
  }, [nowIndex]);

  const [test, setTest] = useState<number>(0);

  useEffect(() => {
    const handleTimeUpdate = () => {
      const { currentTime, duration } = audioRef.current;
      const reversedLyrics = albumData[nowIndex]?.lyricData.slice().reverse();
      const foundLyric: ILyric | undefined = reversedLyrics.find(
        (lyric: ILyric) => lyric.startTime <= currentTime
      );
      if (foundLyric && foundLyric.content !== selectedLyric.content) {
        setSelectedLyric(foundLyric);
      }

      setAudioProgress(currentTime / duration);
    };
    audioRef.current.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      audioRef.current.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [nowIndex]);

  return (
    <>
      <Default>
        <S.Wrapper>
          <S.IntroDiv ref={containerRef1}>
            <S.LpDiv ref={lpRef}></S.LpDiv>
            <S.AlbumDiv ref={albumRef}></S.AlbumDiv>
            <S.Footer>
              <div className="title">THE LAND OF FANTASY</div>
              <div className="jannabi">잔나비</div>
            </S.Footer>
          </S.IntroDiv>
          <S.IntroContentDiv ref={containerRef2}>
            <S.IntroBackground></S.IntroBackground>
            <S.IntroContentBox>
              <div ref={boxRef1} className="test">
                <S.Row1>
                  <p>잔나비 정규 3집</p>
                </S.Row1>
                <S.Row2>
                  <p className="korean">
                    환상의 나라 : 지오르보 대장과{"\n"}구닥다리 영웅들
                  </p>
                  <p className="english">
                    THE LAND OF FANTASY :{"\n"}AND THE OLD FASHIONED HEROES
                  </p>
                </S.Row2>
              </div>
              <div ref={boxRef2} className="test">
                <S.Row3>
                  환상의 나라에 대한 이야기가 있는 앨범입니다.{"\n"}유치찬란
                  무지개를 겨눠 함부로 쏘아 올린 화살과,{"\n"}그토록 부르던 별과
                  꿈을 향해 신나게 뻗어 보이던 손끝.{"\n"}영원히 깨어나지 못할
                  환상의 나라로!
                </S.Row3>
              </div>
            </S.IntroContentBox>
          </S.IntroContentDiv>
          <S.ContentDiv>
            <S.MarginDiv></S.MarginDiv>
            <S.CardWrapper ref={flexContainerRef}>
              {regularData3.map((album, index) => (
                <S.CardDiv
                  img={album.coverImg}
                  className={index === nowIndex ? "expanded" : ""}
                  isboolean={index === nowIndex}
                  ref={(el: HTMLDivElement) => (cardRefs.current[index] = el)}
                  onClick={() => {
                    toggleAudio();
                    setNowIndex(index);
                    setTimeout(() => {
                      cardRefs.current[index].scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                      });
                    }, 500);
                  }}
                >
                  {index === nowIndex && (
                    <S.FocusedCardInfo isboolean={index === nowIndex}>
                      <S.CardRow1 isboolean={index === nowIndex}>
                        <div>Track {album.index}</div>
                        <div>{album.playTime}</div>
                      </S.CardRow1>
                      <S.CardRow2 isboolean={index === nowIndex}>
                        <S.Column1>
                          <div className="kor">{album.title}</div>
                          <div className="eng">{album.engTitle}</div>
                        </S.Column1>
                        <S.Column2>
                          {isAudioPlaying && index === nowIndex ? (
                            <PauseIcon className="pauseicon" />
                          ) : (
                            <PlayIcon className="playicon" />
                          )}
                        </S.Column2>
                      </S.CardRow2>
                      <S.CardRow3
                        onClick={handleAudioTime}
                        isboolean={index === nowIndex}
                      >
                        <S.TotalBar isboolean={index === nowIndex}>
                          {index === nowIndex && (
                            <S.ProgressBar
                              numbervalue={audioProgress}
                            ></S.ProgressBar>
                          )}
                        </S.TotalBar>
                      </S.CardRow3>
                      {index === nowIndex && (
                        <S.CardRow4>
                          <S.CardRowColumn1>
                            <div>{album?.description}</div>
                          </S.CardRowColumn1>
                          <S.CardRowColumn2>
                            <div className="row1">전체 가사보기</div>
                            <div className="row2">
                              {album?.lyricData.map(
                                (lyric: ILyric, index: number) => {
                                  return (
                                    <S.LyricRow
                                      key={index}
                                      isboolean={selectedLyric === lyric}
                                      className="lyricRow"
                                      onClick={(e: any) => {
                                        e.stopPropagation();
                                        handleLyricClick(lyric);
                                      }}
                                    >
                                      {lyric.content}
                                    </S.LyricRow>
                                  );
                                }
                              )}
                            </div>
                          </S.CardRowColumn2>
                        </S.CardRow4>
                      )}
                    </S.FocusedCardInfo>
                  )}

                  {index !== nowIndex && (
                    <S.CardInfo isboolean={index === nowIndex}>
                      <S.CardRow1 isboolean={index === nowIndex}>
                        <div>Track {album.index}</div>
                        <div>{album.playTime}</div>
                      </S.CardRow1>
                      <S.CardRow2 isboolean={index === nowIndex}>
                        <S.Column1>
                          <div className="kor">{album.title}</div>
                          <div className="eng">{album.engTitle}</div>
                        </S.Column1>
                        <S.Column2>
                          {isAudioPlaying && index === nowIndex ? (
                            <PauseIcon className="pauseicon" />
                          ) : (
                            <PlayIcon className="playicon" />
                          )}
                        </S.Column2>
                      </S.CardRow2>
                      <S.CardRow3
                        onClick={handleAudioTime}
                        isboolean={index === nowIndex}
                      >
                        <S.TotalBar isboolean={index === nowIndex}></S.TotalBar>
                      </S.CardRow3>
                    </S.CardInfo>
                  )}
                </S.CardDiv>
              ))}
            </S.CardWrapper>
          </S.ContentDiv>
        </S.Wrapper>
      </Default>
      <Mobile>
        <M.Wrapper>
          <M.IntroContentDiv>
            <M.AlbumDiv></M.AlbumDiv>
            <M.IntroContentBox>
              <M.Row1>
                <p>잔나비 정규 3집</p>
              </M.Row1>
              <M.Row2>
                <p className="korean">
                  환상의 나라 : 지오르보 대장과{"\n"}구닥다리 영웅들
                </p>
                <p className="english">
                  THE LAND OF FANTASY :{"\n"}AND THE OLD FASHIONED HEROES
                </p>
              </M.Row2>
              <M.Row3>
                환상의 나라에 대한 이야기가 있는 앨범입니다.{"\n"}유치찬란
                무지개를 겨눠 함부로 쏘아 올린 화살과,{"\n"}그토록 부르던 별과
                꿈을 향해 신나게 뻗어 보이던 손끝.{"\n"}영원히 깨어나지 못할
                환상의 나라로!
              </M.Row3>
            </M.IntroContentBox>
          </M.IntroContentDiv>
          <M.ContentDiv>
            <M.MarginDiv></M.MarginDiv>
            <M.CardWrapper>
              {regularData3.map((album, index) => (
                <M.CardDiv isboolean={index === nowIndex}>
                  <M.CardAlbumCover img={album.coverImg}></M.CardAlbumCover>
                  <M.CardInfo
                    onClick={() => {
                      setNowIndex(index);
                    }}
                  >
                    <M.CardRow1>
                      <div>Track {album.index}</div>
                      <div>{album.playTime}</div>
                    </M.CardRow1>
                    <M.CardRow2>
                      <M.Column1>
                        <div className="kor">{album.title}</div>
                        <div className="eng">{album.engTitle}</div>
                      </M.Column1>
                      <M.Column2>
                        <PlayIcon className="playicon" />
                      </M.Column2>
                    </M.CardRow2>
                    <M.CardRow3></M.CardRow3>
                    <M.CardRow4>{album.description}</M.CardRow4>
                  </M.CardInfo>
                  <M.CardLyrics
                    isboolean={lyricIndex[index]}
                    onClick={() => {
                      setLyricIndex((prev) => {
                        const newValue = !prev[index];
                        return { ...prev, [index]: newValue };
                      });
                    }}
                  >
                    <div className="row1">
                      <div>전체 가사보기</div>
                      <div>
                        <DownArrowIcon className="icon" />
                      </div>
                    </div>
                    <div className="row2">
                      <div>{album.lyrics}</div>
                    </div>
                  </M.CardLyrics>
                  <M.MarginDiv2></M.MarginDiv2>
                </M.CardDiv>
              ))}
            </M.CardWrapper>
          </M.ContentDiv>
        </M.Wrapper>
      </Mobile>
    </>
  );
}

export default RegularDetailPage3;
