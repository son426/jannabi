import { useNavigate, useParams } from "react-router-dom";
import MainPage from "../main/mainPage";
import * as S from "./irregularDetailPage.style";
import * as M from "./mobile.style";
import { useState, useEffect, useRef } from "react";
import { irregularAlbumData } from "../../data/meta/irregular";
import { motion } from "framer-motion";
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
} from "@/data/icon";
import useAudioPlayer from "@/hooks/useAudioPlayer";

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
  image: string;
  pointColor: string;
  pointColor2?: string;
  fontColor: string;
  songs: songData[];
}

function IrregularDetailPage() {
  const { id } = useParams<string>();
  const index = Number(id) - 1;

  const [albumData, setAlbumData] = useState<IIrregularAlbumData>();
  const [isPlaying, setIsPlaying] = useState(true);
  const [nowIndex, setNowIndex] = useState<number>(0);

  const navigate = useNavigate();

  const initialTrack: string = irregularAlbumData[index].songs[0].audioFile;

  const {
    audioRef,
    toggleAudio,
    handleAudioTimeByY,
    isAudioPlaying,
    setIsAudioPlaying,
    audioProgress,
    setAudioProgress,
  } = useAudioPlayer(initialTrack);

  const togglePlaying = () => {
    // 오디오 처리 로직
    audioRef.current.paused
      ? audioRef.current.play()
      : audioRef.current.pause();
    setIsPlaying((prev) => !prev);
  };

  const resetState = () => {
    setNowIndex(0);
    setIsPlaying(true);
  };

  useEffect(() => {
    // getData
    setAlbumData(irregularAlbumData[index]);
  }, [id]);

  // audio 관련
  // 곡이 바뀔 때
  useEffect(() => {
    // 첫 렌더링때는 실행시키지 말자.
    // 첫 렌더링때는 이벤트리스너만 달자.
    if (nowIndex !== 0) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;

      audioRef.current = new Audio(
        irregularAlbumData[index].songs[nowIndex].audioFile
      );
      audioRef.current.play();
    }

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
  }, [nowIndex, id]);

  // audio 관련
  // 앨범이 바뀔 때
  useEffect(() => {
    audioRef.current = new Audio(irregularAlbumData[index].songs[0].audioFile);
    audioRef.current.play();
  }, [id]);

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

  return (
    <>
      <Default>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
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
                  <LeftArrowIcon />
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
                  <RightArrowIcon />
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
                    onClick={() => {
                      if (!albumData) return;
                      const changedIndex =
                        nowIndex === albumData?.songs.length - 1
                          ? 0
                          : nowIndex + 1;
                      setNowIndex(changedIndex);
                    }}
                    color={albumData?.pointColor}
                  >
                    <NextIcon />
                  </S.Button4>
                  <S.Button5 color={albumData?.pointColor}>
                    <ShuffleIcon />
                  </S.Button5>
                </S.TapeColumn1>
                <S.TapeColumn2>
                  <S.TapeAlbumCover image={albumData?.image} />
                </S.TapeColumn2>
              </S.TapeDiv>
              <S.Footer>발매사 카카오엔터테인먼트</S.Footer>
            </S.TextWrapper>
            <S.ImageWrapper
              onClick={handleAudioTimeByY}
              image={albumData?.image}
            >
              <S.ImageProgress numbervalue={audioProgress * 100} />
            </S.ImageWrapper>
          </S.BackgroundDiv>
        </motion.div>
      </Default>

      <Mobile>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
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
              <M.Subtitle>{albumData?.subtitle}</M.Subtitle>
              <M.Player>
                <M.AlbumCover image={albumData?.image}></M.AlbumCover>
              </M.Player>
              <M.Meta>{albumData?.meta}</M.Meta>
              <M.Description>{albumData?.description}</M.Description>

              <M.Playlist>
                {albumData?.songs?.length === 1 && (
                  <M.PlaylistIsTitle
                    color={albumData?.pointColor}
                    color2={albumData?.pointColor2}
                  >
                    <p>TITLE</p>
                  </M.PlaylistIsTitle>
                )}
                {albumData?.songs?.map((song, index) => {
                  return (
                    <M.PlaylistRow
                      color={albumData?.fontColor}
                      isplaying={index === nowIndex}
                      onClick={() => {
                        setNowIndex(index);
                      }}
                    >
                      <M.SongTitle>
                        {index + 1} | {song?.title}
                      </M.SongTitle>
                      {albumData?.songs?.length !== 1 && song.isTitle && (
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
              <M.ConsoleDiv>
                <M.PrevDiv
                  onClick={() => {
                    resetState();
                    if (index === 0) {
                      navigate(`/irregularDetail/10`);
                    } else {
                      navigate(`/irregularDetail/${index}`);
                    }
                  }}
                ></M.PrevDiv>
                <M.PlayButton
                  onClick={togglePlaying}
                  istrue={isPlaying}
                ></M.PlayButton>
                <M.NextDiv
                  onClick={() => {
                    resetState();
                    if (index === 9) {
                      navigate(`/irregularDetail/1`);
                    } else {
                      navigate(`/irregularDetail/${index + 2}`);
                    }
                  }}
                ></M.NextDiv>
              </M.ConsoleDiv>
            </M.TextWrapper>
          </M.BackgroundDiv>
        </motion.div>
      </Mobile>
    </>
  );
}

{
  /* <S.Player>
                <S.PrevDiv
                  onClick={() => {
                    resetState();
                    if (index === 0) {
                      navigate(`/irregularDetail/10`);
                    } else {
                      navigate(`/irregularDetail/${index}`);
                    }
                  }}
                ></S.PrevDiv>
                <S.AlbumCover image={albumData?.image}>
                  <S.PlayButton
                    onClick={togglePlaying}
                    istrue={isPlaying}
                  ></S.PlayButton>
                </S.AlbumCover>
                <S.NextDiv
                  onClick={() => {
                    resetState();
                    if (index === 9) {
                      navigate(`/irregularDetail/1`);
                    } else {
                      navigate(`/irregularDetail/${index + 2}`);
                    }
                  }}
                ></S.NextDiv>
              </S.Player> */
}
export default IrregularDetailPage;
