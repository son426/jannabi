import { useNavigate, useParams } from "react-router-dom";
import MainPage from "../main/mainPage";
import * as S from "./irregularDetailPage.style";
import * as M from "./mobile.style";
import { useState, useEffect, useRef } from "react";
import { irregularAlbumData } from "../../data/data";
import { motion } from "framer-motion";
import { Default, Desktop, Mobile } from "../../components/mediaquery";

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
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();
  const [isPlayingIndex, setIsPlayingIndex] = useState<number>(0);

  const audioRef = useRef<HTMLAudioElement>(
    new Audio(irregularAlbumData[index].songs[0].audioFile)
  );

  const audioFilesArray = irregularAlbumData[index].songs.map(
    (song) => song.audioFile
  );

  useEffect(() => {
    // getData
    setAlbumData(irregularAlbumData[index]);
    setIsLoading(false);
  }, [id]);

  // audio 관련
  useEffect(() => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;

    audioRef.current = new Audio(
      irregularAlbumData[index].songs[isPlayingIndex].audioFile
    );
    audioRef.current.play();

    return () => {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    };
  }, [isPlayingIndex, id]);

  if (isLoading) {
    return <>Loading...</>;
  } else {
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
                onClick={() => {
                  navigate("/main");
                }}
              >
                <div className="arrow">→</div>
              </S.BackButton>
              <S.TextWrapper color={albumData?.fontColor}>
                <S.Title>
                  <p>{albumData?.title}</p>
                </S.Title>
                <S.Subtitle>{albumData?.subtitle}</S.Subtitle>
                <S.Player>
                  {/* <S.PrevDiv to={`/irregularDetail/${index - 1}`}></S.PrevDiv> */}
                  <S.PrevDiv
                    onClick={() => {
                      if (index === 0) {
                        navigate(`/irregularDetail/10`);
                      } else {
                        navigate(`/irregularDetail/${index}`);
                      }
                    }}
                  ></S.PrevDiv>
                  <S.AlbumCover image={albumData?.image}>
                    <S.PlayButton></S.PlayButton>
                  </S.AlbumCover>
                  <S.NextDiv
                    onClick={() => {
                      if (index === 9) {
                        navigate(`/irregularDetail/1`);
                      } else {
                        navigate(`/irregularDetail/${index + 2}`);
                      }
                    }}
                  ></S.NextDiv>
                </S.Player>
                <S.Meta>{albumData?.meta}</S.Meta>
                <S.Description>{albumData?.description}</S.Description>

                <S.Playlist>
                  {albumData?.songs?.length === 1 && (
                    <S.PlaylistIsTitle
                      color={albumData?.pointColor}
                      color2={albumData?.pointColor2}
                    >
                      <p>TITLE</p>
                    </S.PlaylistIsTitle>
                  )}
                  {albumData?.songs?.map((song, index) => {
                    return (
                      <S.PlaylistRow
                        color={albumData?.fontColor}
                        isplaying={index === isPlayingIndex}
                        onClick={() => {
                          setIsPlayingIndex(index);
                        }}
                      >
                        <S.SongTitle>
                          {index + 1} | {song?.title}
                        </S.SongTitle>
                        {albumData?.songs?.length !== 1 && song.isTitle && (
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
                <S.Footer>
                  발매사 카카오엔터테인먼트{"\n"}기획사 페포니 뮤직
                </S.Footer>
              </S.TextWrapper>
              <S.ImageWrapper image={albumData?.image}></S.ImageWrapper>
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
                <div className="arrow">→</div>
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
                        isplaying={index === isPlayingIndex}
                        onClick={() => {
                          setIsPlayingIndex(index);
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
                      if (index === 0) {
                        navigate(`/irregularDetail/10`);
                      } else {
                        navigate(`/irregularDetail/${index}`);
                      }
                    }}
                  ></M.PrevDiv>
                  <M.PlayButton></M.PlayButton>
                  <M.NextDiv
                    onClick={() => {
                      if (index === 9) {
                        navigate(`/irregularDetail/1`);
                      } else {
                        navigate(`/irregularDetail/${index + 2}`);
                      }
                    }}
                  ></M.NextDiv>
                </M.ConsoleDiv>

                <M.Footer>
                  발매사 카카오엔터테인먼트{"\n"}기획사 페포니 뮤직
                </M.Footer>
              </M.TextWrapper>
            </M.BackgroundDiv>
          </motion.div>
        </Mobile>
      </>
    );
  }
}

export default IrregularDetailPage;
