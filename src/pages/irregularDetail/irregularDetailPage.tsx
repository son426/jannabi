import { useNavigate, useParams } from "react-router-dom";
import MainPage from "../main/mainPage";
import * as S from "./irregularDetailPage.style";
import * as M from "./mobile.style";
import { useState, useEffect, useRef } from "react";
import { irregularAlbumData } from "../../data/meta/irregular";
import { AnimatePresence, motion } from "framer-motion";
import { Default, Desktop, Mobile } from "../../components/mediaquery";
import {
  NextIcon,
  PrevIcon,
  PlayIcon2,
  ShuffleIcon,
  RepeatIcon,
  UpArrowIcon,
  UpLeftArrowIcon,
  RightArrowIcon,
  LeftArrowIcon,
  PauseIcon,
  FilledHeartIcon,
} from "@/data/icon";
import useAudioPlayer from "@/hooks/useAudioPlayer";
import { imgPreload, loadAudios, loadImages } from "@/hooks/tools";
import irregular from "@/data/images/irregular";
import Loading, { LoadingText, LoadingWrapper } from "@/components/loading";

interface songData {
  title: string;
  audioFile: string;
  isTitle: boolean;
}
interface IIrregularAlbumData {
  id: number;
  title: string;
  subtitle?: string;
  meta: string;
  description: string;
  pointColor: string;
  pointColor2?: string;
  fontColor: string;
  songs: songData[];
}

function IrregularDetailPage() {
  const { id } = useParams<string>();
  const index = Number(id) - 1;

  const [totalAlbumData, setTotalAlbumData] =
    useState<IIrregularAlbumData[]>(irregularAlbumData);
  const [albumData, setAlbumData] = useState<IIrregularAlbumData>();
  const [isPlaying, setIsPlaying] = useState(true);
  const [nowIndex, setNowIndex] = useState<number>(0);
  const [isShuffleMode, setIsShuffleMode] = useState<boolean>(false);
  const [showHeart, setShowHeart] = useState(false);
  const [transitionWidth, setTransitionWidth] = useState<number>(-1);
  const [movingOn, setMovingOn] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const songTitleRefs = useRef<Array<HTMLParagraphElement | null>>([]);
  const songTitleBoxRef = useRef<HTMLDivElement>(null);

  const [audioFiles, setAudioFiles] = useState<string[]>([]);
  const [audioFetched, setAudioFetched] = useState<boolean>(false);
  const [imageFiles, setImageFiles] = useState<string[]>([]);
  const [imageFetched, setImageFetched] = useState<boolean>(false);

  useEffect(() => {
    const fetchImageFiles = async () => {
      const fetchedImages = await loadImages("irregular");
      setImageFiles(fetchedImages);
      setImageFetched(true);
      imgPreload(fetchedImages);
    };

    const fetchAudioFiles = async () => {
      const fetchedAudios = await loadAudios("irregular");
      let insertIndex = 0;
      const updatedAlbumData = irregularAlbumData.map(
        (eachAlbum: IIrregularAlbumData, index: number) => {
          const updatedSongs = eachAlbum.songs.map((song, index: number) => {
            return {
              ...song,
              audioFile: `${fetchedAudios[insertIndex++]}`,
            };
          });
          return {
            ...eachAlbum,
            songs: updatedSongs,
          };
        }
      );
      setTotalAlbumData(updatedAlbumData);
      setAudioFetched(true);
    };

    const fetchAllFiles = async () => {
      if (!imageFetched) await fetchImageFiles();
      if (!audioFetched) await fetchAudioFiles();
      setIsLoading(false);
    };
    fetchAllFiles();
  }, []);

  const navigate = useNavigate();

  const {
    audioRef,
    toggleAudio,
    handleAudioTimeByY,
    isAudioPlaying,
    setIsAudioPlaying,
    audioProgress,
    setAudioProgress,
    changeAudio,
  } = useAudioPlayer("");

  const handleTapeAlbumCoverClick = () => setShowHeart((prev) => !prev);

  const getRandomIndex = (maxIndex: number, excludeIndex: number) => {
    let randomIndex = Math.floor(Math.random() * maxIndex);
    while (randomIndex === excludeIndex) {
      randomIndex = Math.floor(Math.random() * maxIndex);
    }
    return randomIndex;
  };
  const togglePlaying = () => {
    // 오디오 처리 로직
    audioRef.current.paused
      ? audioRef.current.play()
      : audioRef.current.pause();
    setIsPlaying((prev) => !prev);
  };
  const toggleShuffleMode = () => setIsShuffleMode((prev) => !prev);
  const handleNextMusic = () => {
    if (!albumData) return;
    if (isShuffleMode) {
      const changedIndex = getRandomIndex(albumData.songs.length - 1, nowIndex);
      setNowIndex(changedIndex);
    } else {
      const changedIndex =
        nowIndex === albumData?.songs.length - 1 ? 0 : nowIndex + 1;
      setNowIndex(changedIndex);
    }
  };

  const resetState = () => {
    setNowIndex(0);
    setIsPlaying(true);
    setMovingOn(false);
    setAudioProgress(0);
    setTransitionWidth(-1);
  };

  // audio 관련
  useEffect(() => {
    audioRef.current.addEventListener("ended", () => {
      setNowIndex((prev) => prev + 1);
    });

    return () => {
      console.log("cleanup!");
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current.removeEventListener("ended", () => {
        setNowIndex((prev) => prev + 1);
      });
    };
  }, [nowIndex, id, audioFetched]);

  // audio 관련
  // 앨범이 바뀔 때 (index 변경)
  useEffect(() => {
    if (audioFetched) {
      changeAudio(totalAlbumData[index].songs[0].audioFile);
      setAlbumData(totalAlbumData[index]);
    }
  }, [id, audioFetched]);

  // audio 관련
  // nowIndex 바뀔 때 (nowIndex 변경)
  useEffect(() => {
    if (audioFetched) {
      changeAudio(totalAlbumData[index].songs[nowIndex].audioFile);
    }
  }, [nowIndex]);

  // audioProgress 트래킹
  useEffect(() => {
    const handleTimeUpdate = () => {
      const { currentTime, duration } = audioRef.current;
      setAudioProgress(currentTime / duration);
    };

    audioRef.current.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      audioRef.current.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [nowIndex]);

  // 물결차는거
  useEffect(() => {
    if (id !== "1") return;
    const songTitleWidth = songTitleRefs.current[nowIndex]?.offsetWidth;
    const boxWidth = songTitleBoxRef.current?.offsetWidth;

    if (songTitleWidth && boxWidth) {
      const movingWidth = songTitleWidth - boxWidth;
      if (movingWidth > 0) {
        setMovingOn(true);
        setTransitionWidth(songTitleWidth / 1.3);
      } else {
        setMovingOn(false);
      }
    }
  }, [nowIndex, id]);

  return (
    <>
      <Loading isloading={isLoading} loadingtext="비정규앨범관" />
      <>
        <Default>
          <S.BackgroundDiv color={albumData?.pointColor}>
            <S.BackButton
              color={albumData?.pointColor}
              color2={albumData?.pointColor2}
              onClick={() => navigate("/main")}
            >
              <div className="arrow">
                <UpArrowIcon />
              </div>
            </S.BackButton>
            <S.TextWrapper color={albumData?.fontColor}>
              <S.PrevButton
                color={albumData?.pointColor}
                color2={albumData?.pointColor2}
                onClick={() => {
                  resetState();
                  if (index === 0) {
                    navigate(`/irregularDetail/10`);
                  } else {
                    navigate(`/irregularDetail/${index}`);
                  }
                }}
              >
                <div className="arrow">
                  {" "}
                  <svg
                    width="100"
                    height="100"
                    viewBox="0 0 50 100"
                    fill="none"
                    transform="rotate(-135)"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M51.9925 0.999686L5.94975 47.0424C3.21608 49.7761 3.21608 54.2083 5.94975 56.9419L51.9925 102.985V0.999686Z"
                      fill={albumData?.pointColor2}
                    />
                    <path
                      d="M29.7778 38.1273L26.5208 41.3227L35.1487 50.0082L14.7895 49.9404L14.7737 54.6694L35.1329 54.7373L26.4476 63.325L29.6831 66.542L43.9577 52.4021L29.7778 38.1273Z"
                      fill={albumData?.pointColor}
                    />
                  </svg>
                </div>
              </S.PrevButton>
              <S.NextButton
                color={albumData?.pointColor}
                color2={albumData?.pointColor2}
                onClick={() => {
                  resetState();
                  if (index === 9) {
                    navigate(`/irregularDetail/1`);
                  } else {
                    navigate(`/irregularDetail/${index + 2}`);
                  }
                }}
              >
                <div className="arrow">
                  <svg
                    width="100"
                    height="100"
                    viewBox="0 0 50 100"
                    fill="none"
                    transform="rotate(45)"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M51.9925 0.999686L5.94975 47.0424C3.21608 49.7761 3.21608 54.2083 5.94975 56.9419L51.9925 102.985V0.999686Z"
                      fill={albumData?.pointColor2}
                    />
                    <path
                      d="M29.7778 38.1273L26.5208 41.3227L35.1487 50.0082L14.7895 49.9404L14.7737 54.6694L35.1329 54.7373L26.4476 63.325L29.6831 66.542L43.9577 52.4021L29.7778 38.1273Z"
                      fill={albumData?.pointColor}
                    />
                  </svg>

                  {/* <RightArrowIcon /> */}
                </div>
              </S.NextButton>
              <S.Title>
                <p>{albumData?.title}</p>
              </S.Title>
              <S.Subtitle>{albumData?.subtitle}</S.Subtitle>
              <S.Meta color={albumData?.pointColor2}>{albumData?.meta}</S.Meta>
              <S.Description color={albumData?.pointColor2}>
                {albumData?.description}
              </S.Description>
              <S.Playlist color={albumData?.pointColor}>
                {albumData?.songs?.map((song, index) => {
                  return (
                    <S.PlaylistRow
                      color={albumData?.fontColor}
                      isplaying={index === nowIndex}
                      onClick={() => {
                        setNowIndex(index);
                      }}
                    >
                      <S.SongTitle>
                        {index + 1} | {song?.title}
                      </S.SongTitle>
                      {song.isTitle && (
                        <S.PlaylistIsTitle
                          color={albumData?.pointColor}
                          color2={albumData?.pointColor2}
                        >
                          <p>TITLE</p>
                        </S.PlaylistIsTitle>
                      )}
                    </S.PlaylistRow>
                  );
                })}
              </S.Playlist>
              <S.TapeDiv color={albumData?.pointColor2}>
                <S.TapeColumn1>
                  <S.Button1 color={albumData?.pointColor}>
                    <RepeatIcon />
                  </S.Button1>
                  <S.Button2
                    onClick={() => {
                      if (!albumData) return;
                      const changedIndex =
                        nowIndex === 0
                          ? albumData?.songs.length - 1
                          : nowIndex - 1;
                      setNowIndex(changedIndex);
                    }}
                    color={albumData?.pointColor}
                  >
                    <PrevIcon />
                  </S.Button2>
                  <S.Button3
                    onClick={togglePlaying}
                    color={albumData?.pointColor}
                  >
                    {isPlaying && <PauseIcon />}
                    {!isPlaying && <PlayIcon2 />}
                  </S.Button3>
                  <S.Button4
                    onClick={handleNextMusic}
                    color={albumData?.pointColor}
                  >
                    <NextIcon />
                  </S.Button4>
                  <S.Button5
                    onClick={toggleShuffleMode}
                    color={albumData?.pointColor}
                    isboolean={isShuffleMode}
                  >
                    <ShuffleIcon />
                  </S.Button5>
                </S.TapeColumn1>
                <S.TapeColumn2>
                  <S.TapeAlbumCover
                    onClick={handleTapeAlbumCoverClick}
                    image={imageFiles[index]}
                  >
                    {showHeart && (
                      <motion.div
                        initial={{ opacity: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 1 }}
                        animate={{
                          opacity: [0, 1, 1, 0],
                          scale: [1, 1.5, 1.5, 1],
                          rotate: [180, 0, 0, 0],
                          y: [0, 0, 0, -20],
                        }}
                        transition={{
                          duration: 1,
                          times: [0, 0.2, 0.5, 1],
                        }}
                      >
                        <FilledHeartIcon className="icon" />
                      </motion.div>
                    )}
                  </S.TapeAlbumCover>
                </S.TapeColumn2>
              </S.TapeDiv>
              <S.Footer>발매사 카카오엔터테인먼트</S.Footer>
            </S.TextWrapper>
            <S.ImageWrapper
              onClick={handleAudioTimeByY}
              image={imageFiles[index]}
            >
              <S.ImageProgress numbervalue={audioProgress * 100} />
              <S.Footer style={{ color: "white" }}>기획사 페포니뮤직</S.Footer>
            </S.ImageWrapper>
          </S.BackgroundDiv>
        </Default>
        <Mobile>
          <M.BackgroundDiv color={albumData?.pointColor}>
            <M.BackButton
              color={albumData?.pointColor}
              color2={albumData?.pointColor2}
              onClick={() => {
                navigate("/main");
              }}
            >
              <div className="arrow">
                <UpArrowIcon />
              </div>
            </M.BackButton>

            <M.TextWrapper color={albumData?.fontColor}>
              <M.Title>
                <p>{albumData?.title}</p>
              </M.Title>
              {albumData?.subtitle && (
                <M.Subtitle>{albumData?.subtitle}</M.Subtitle>
              )}
              <M.Meta>{albumData?.meta}</M.Meta>
              <M.Description>{albumData?.description}</M.Description>

              <M.Playlist ref={songTitleBoxRef}>
                {albumData?.songs?.map((song, index) => {
                  return (
                    <M.PlaylistRow
                      color={albumData?.fontColor}
                      isplaying={index === nowIndex}
                      onClick={() => {
                        setNowIndex(index);
                      }}
                    >
                      <M.SongTitle
                        isboolean={index === nowIndex && movingOn}
                        numbervalue={transitionWidth}
                      >
                        <p
                          ref={(el: HTMLParagraphElement) =>
                            (songTitleRefs.current[index] = el)
                          }
                        >
                          {index + 1} | {song?.title}
                        </p>
                      </M.SongTitle>
                      {song.isTitle && (
                        <M.PlaylistIsTitle
                          color={albumData?.pointColor}
                          color2={albumData?.pointColor2}
                        >
                          <p>TITLE</p>
                        </M.PlaylistIsTitle>
                      )}
                    </M.PlaylistRow>
                  );
                })}
              </M.Playlist>
              <M.ConsoleDiv color={albumData?.pointColor2}>
                <M.ConsoleRow1>
                  <M.ButtonWrapper color={albumData?.pointColor}>
                    <div
                      onClick={() => {
                        resetState();
                        if (index === 0) {
                          navigate(`/irregularDetail/10`);
                        } else {
                          navigate(`/irregularDetail/${index}`);
                        }
                      }}
                    >
                      <LeftArrowIcon />
                    </div>
                    <div
                      onClick={() => {
                        resetState();
                        if (index === 9) {
                          navigate(`/irregularDetail/1`);
                        } else {
                          navigate(`/irregularDetail/${index + 2}`);
                        }
                      }}
                    >
                      <RightArrowIcon />
                    </div>
                  </M.ButtonWrapper>
                  <M.TapeAlbumCover
                    onClick={handleTapeAlbumCoverClick}
                    image={imageFiles[index]}
                  >
                    {showHeart && (
                      <motion.div
                        initial={{ opacity: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 1 }}
                        animate={{
                          opacity: [0, 1, 1, 0],
                          scale: [1, 1.5, 1.5, 1],
                          rotate: [180, 0, 0, 0],
                          y: [0, 0, 0, -20],
                        }}
                        transition={{
                          duration: 1,
                          times: [0, 0.2, 0.5, 1],
                        }}
                      >
                        <FilledHeartIcon className="icon" />
                      </motion.div>
                    )}
                  </M.TapeAlbumCover>
                </M.ConsoleRow1>
                <M.ConsoleRow2>
                  <M.Button1 color={albumData?.pointColor}>
                    <RepeatIcon />
                  </M.Button1>
                  <M.Button2
                    onClick={() => {
                      if (!albumData) return;
                      const changedIndex =
                        nowIndex === 0
                          ? albumData?.songs.length - 1
                          : nowIndex - 1;
                      setNowIndex(changedIndex);
                    }}
                    color={albumData?.pointColor}
                  >
                    <PrevIcon />
                  </M.Button2>
                  <M.Button3
                    onClick={togglePlaying}
                    color={albumData?.pointColor}
                  >
                    {isPlaying && <PauseIcon />}
                    {!isPlaying && <PlayIcon2 />}
                  </M.Button3>
                  <M.Button4
                    onClick={handleNextMusic}
                    color={albumData?.pointColor}
                  >
                    <NextIcon />
                  </M.Button4>
                  <M.Button5
                    onClick={toggleShuffleMode}
                    color={albumData?.pointColor}
                    isboolean={isShuffleMode}
                  >
                    <ShuffleIcon />
                  </M.Button5>
                </M.ConsoleRow2>
              </M.ConsoleDiv>
            </M.TextWrapper>
          </M.BackgroundDiv>
        </Mobile>
      </>
    </>
  );
}
export default IrregularDetailPage;
