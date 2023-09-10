import { useState, useEffect, useRef } from "react";
import { Default, Desktop, Mobile } from "../../components/mediaquery";
import * as S from "./regularDetailPage3.style";
import * as M from "./mobile.style";
import { DownArrowIcon, PauseIcon, PlayIcon } from "@/data/icon";
import { ILyric, regularData3 } from "@/data/meta/regular3";
import useScrollAnimation from "@/hooks/useScroll";
import useAudioPlayer from "@/hooks/useAudioPlayer";
import { wrapGrid } from "animate-css-grid";
import { loadAudios, loadImages } from "@/hooks/tools";
import Loading from "@/components/loading";
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
  const [audioFiles, setAudioFiles] = useState<string[]>([]);
  const [audioFetched, setAudioFetched] = useState<boolean>(false);
  const [imageFiles, setImageFiles] = useState<string[]>([]);
  const [imageFetched, setImageFetched] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const containerRef1 = useRef<HTMLDivElement>(null);
  const containerRef2 = useRef<HTMLDivElement>(null);
  const lpRef = useRef<HTMLDivElement>(null);
  const albumRef = useRef<HTMLDivElement>(null);
  const boxRef1 = useRef<HTMLDivElement>(null);
  const boxRef2 = useRef<HTMLDivElement>(null);
  const flexContainerRef = useRef<HTMLDivElement>(null);

  const cardRefs = useRef<HTMLDivElement[]>([]);

  const albumData = regularData3;
  const initialTrack: string = "";

  const {
    audioRef,
    toggleAudio,
    handleAudioTime,
    isAudioPlaying,
    setIsAudioPlaying,
    audioProgress,
    setAudioProgress,
    changeAudio,
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
    const fetchAudioFiles = async () => {
      const fetchedAudios = await loadAudios("regular3");
      setAudioFiles(fetchedAudios);
      setAudioFetched(true);
    };

    const fetchImageFiles = async () => {
      const fetchedImages = await loadImages("regular3");
      setImageFiles(fetchedImages);
      setImageFetched(true);
    };

    const fetchAllFiles = async () => {
      await fetchAudioFiles();
      await fetchImageFiles();
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    };

    fetchAllFiles();
  }, []);

  // flexbox line break 설정
  useEffect(() => {
    if (flexContainerRef.current)
      wrapGrid(flexContainerRef.current, {
        duration: 500,
        easing: "backOut",
      });
  }, []);

  // 오디오 관련
  // 노래 바뀔때마다
  useEffect(() => {
    if (audioFetched) changeAudio(audioFiles[nowIndex]);

    return () => {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    };
  }, [nowIndex, audioFetched]);

  const [test, setTest] = useState<number>(0);

  // 오디오 관련
  // 매 시간마다 체크해야하는 부분
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
  }, [nowIndex, audioFetched]);

  return (
    <>
      <Loading isloading={isLoading} loadingtext="정규 3집 앨범관" />
      <Default>
        <S.Wrapper>
          <S.IntroDiv img={imageFiles[13]} ref={containerRef1}>
            <S.LpDiv img={imageFiles[16]} ref={lpRef}></S.LpDiv>
            <S.AlbumDiv img={imageFiles[14]} ref={albumRef}></S.AlbumDiv>
            <S.Footer>
              <div className="title">THE LAND OF FANTASY</div>
              <div className="jannabi">잔나비</div>
            </S.Footer>
          </S.IntroDiv>
          <S.IntroContentDiv ref={containerRef2}>
            <S.IntroBackground img={imageFiles[17]}></S.IntroBackground>
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
                  key={index}
                  img={imageFiles[index]}
                  className={index === nowIndex ? "expanded" : ""}
                  isboolean={index === nowIndex}
                  ref={(el: HTMLDivElement) => (cardRefs.current[index] = el)}
                  onClick={() => {
                    toggleAudio();
                    setNowIndex(index);
                    setAudioProgress(0);
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
            <M.AlbumDiv img={imageFiles[14]}></M.AlbumDiv>
            <M.IntroContentBox>
              <M.Row1>
                <span>잔나비 정규 3집</span>
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
                꿈을 향해 신나게{"\n"}뻗어 보이던 손끝.{"\n"}영원히 깨어나지
                못할 환상의 나라로!
              </M.Row3>
            </M.IntroContentBox>
          </M.IntroContentDiv>
          <M.ContentDiv>
            <M.MarginDiv></M.MarginDiv>
            <M.CardWrapper>
              {regularData3.map((album, index) => (
                <M.CardDiv isboolean={index === nowIndex}>
                  <M.CardAlbumCover img={imageFiles[index]}></M.CardAlbumCover>

                  <M.CardInfo
                    onClick={() => {
                      toggleAudio();
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
                        {isAudioPlaying && index === nowIndex ? (
                          <PauseIcon className="pauseicon" />
                        ) : (
                          <PlayIcon className="playicon" />
                        )}
                      </M.Column2>
                    </M.CardRow2>
                    <M.CardRow3>
                      {index === nowIndex && (
                        <M.TotalBar
                          onClick={handleAudioTime}
                          isboolean={index === nowIndex}
                        >
                          <M.ProgressBar
                            numbervalue={audioProgress}
                          ></M.ProgressBar>
                        </M.TotalBar>
                      )}
                      {index !== nowIndex && (
                        <M.TotalBar isboolean={index === nowIndex}>
                          <M.ProgressBar numbervalue={0}></M.ProgressBar>
                        </M.TotalBar>
                      )}
                    </M.CardRow3>
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
                      {index === nowIndex && (
                        <>
                          {album?.lyricData.map(
                            (lyric: ILyric, index: number) => {
                              return (
                                <M.LyricRow
                                  key={index}
                                  isboolean={selectedLyric === lyric}
                                  className="lyricRow"
                                  onClick={(e: any) => {
                                    e.stopPropagation();
                                    handleLyricClick(lyric);
                                  }}
                                >
                                  {lyric.content}
                                </M.LyricRow>
                              );
                            }
                          )}
                        </>
                      )}

                      {index !== nowIndex && (
                        <>
                          {album?.lyricData.map(
                            (lyric: ILyric, index: number) => (
                              <M.LyricRow>{lyric.content}</M.LyricRow>
                            )
                          )}
                        </>
                      )}
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
