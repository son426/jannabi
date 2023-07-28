import { Desktop, Mobile } from "../../components/mediaquery";
import * as S from "./regularDetailPage1.style";
import * as M from "./mobile.style";
import { useState, useEffect, useRef } from "react";
import { Title } from "../irregularDetail/irregularDetailPage.style";
import { IRegularData, regularData } from "../../data/meta/regular1";
import { ExitIcon, PauseIcon, PlayIcon } from "../../data/icon";
import { useNavigate } from "react-router-dom";

function RegularDetailPage1() {
  const [scrollHeight, setScrollHeight] = useState<number>(1);
  const [isScrolledMany, setIsScrolledMany] = useState<boolean>(false);
  const [nowIndex, setNowIndex] = useState(0);
  const [titleVisible, setTitleVisible] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(true);

  const audioRef = useRef<HTMLAudioElement>(
    new Audio(regularData[0].audioFile)
  );

  const navigate = useNavigate();

  const albumData: IRegularData[] = regularData;

  const handlePrev = () => {
    setNowIndex((prevIndex) =>
      prevIndex - 1 < 0 ? albumData.length - 1 : prevIndex - 1
    );
  };
  const handleNext = () => {
    setNowIndex((prevIndex) => (prevIndex + 1) % albumData.length);
  };
  const handleClick = (index: number) => {
    if (index !== nowIndex) setTitleVisible(false);
    if (index === nowIndex - 1) handlePrev();
    else if (index === nowIndex + 1) handleNext();
  };
  const handleScroll = () => {
    setScrollHeight(window.scrollY);
  };
  useEffect(() => {
    // Scroll event listener to update scrollHeight state
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const scrollThreshold = 1600;
    console.log(scrollHeight);
    if (scrollHeight >= scrollThreshold) {
      console.log("many!");
      setIsScrolledMany(true);
    } else setIsScrolledMany(false);
  }, [scrollHeight]);

  useEffect(() => {
    // title 없앴다가 다시 보이게
    const timeout = setTimeout(() => {
      setTitleVisible(true);
    }, 500);

    // 오디오 관련
    if (!audioRef.current.paused) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    audioRef.current = new Audio(albumData[nowIndex].audioFile);
    audioRef.current.play();

    return () => {
      clearTimeout(timeout);
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    };
  }, [nowIndex]);

  return (
    <>
      <Desktop>
        <S.Wrapper>
          <S.IntroDiv isboolean={isScrolledMany} numbervalue={scrollHeight}>
            <S.LpDiv numbervalue={scrollHeight}></S.LpDiv>
            <S.AlbumDiv numbervalue={scrollHeight}></S.AlbumDiv>
            <S.Footer>
              <div className="title">MONKEY HOTEL</div>
              <div className="jannabi">잔나비</div>
            </S.Footer>
          </S.IntroDiv>
          <S.MarginDiv></S.MarginDiv>
          <S.IntroContentDiv>
            <S.IntroContentBox>
              <S.Row1>
                <p>잔나비 정규 1집</p>
              </S.Row1>
              <S.Row2>
                <p className="korean">몽키호텔</p>
                <p className="english">MONKEY HOTEL</p>
              </S.Row2>
              <S.Row3>
                환상의 나라에 대한 이야기가 있는 앨범입니다. 유치찬란 무지개를
                겨눠 함부로 쏘아 올린 화살과, 그토록 부르던 별과 꿈을 향해
                신나게 뻗어 보이던 손끝. 영원히 깨어나지 못할 환상의 나라로!
              </S.Row3>
            </S.IntroContentBox>
          </S.IntroContentDiv>
          <S.ContentDiv>
            <S.FloatingButton
              onClick={() => {
                setMenuVisible((prev) => !prev);
              }}
            ></S.FloatingButton>
            {menuVisible && (
              <S.MenuDiv>
                {isAudioPlaying && (
                  <S.Menu>
                    <div>
                      <PauseIcon />
                    </div>
                    <div
                      onClick={() => {
                        audioRef.current.pause();
                        setIsAudioPlaying(false);
                      }}
                    >
                      노래 일시정지
                    </div>
                  </S.Menu>
                )}
                {!isAudioPlaying && (
                  <S.Menu>
                    <div>
                      <PlayIcon />
                    </div>
                    <div
                      onClick={() => {
                        audioRef.current.play();
                        setIsAudioPlaying(true);
                      }}
                    >
                      노래 재생
                    </div>
                  </S.Menu>
                )}
                <S.Menu
                  onClick={() => {
                    navigate("/main");
                  }}
                >
                  <div>
                    <ExitIcon />
                  </div>
                  <div>몽키호텔 나가기</div>
                </S.Menu>
              </S.MenuDiv>
            )}
            <S.CarouselDiv numbervalue={nowIndex}>
              {albumData.map((album, index) => (
                <>
                  <S.Column
                    stringvalue={albumData[index].scrollImg}
                    isboolean={index === nowIndex}
                    onClick={() => {
                      handleClick(index);
                    }}
                  ></S.Column>
                </>
              ))}
            </S.CarouselDiv>
            {titleVisible && (
              <S.ColumnTitle>
                <p className="trackIndex">Track {nowIndex + 1}</p>
                <p className="trackTitle">{albumData[nowIndex].title}</p>
              </S.ColumnTitle>
            )}
            {titleVisible && (
              <S.ColumnDescription>
                {albumData[nowIndex].description}
              </S.ColumnDescription>
            )}
          </S.ContentDiv>
        </S.Wrapper>
      </Desktop>
      <Mobile>
        <M.Wrapper>
          <M.IntroDiv>
            <M.LpDiv></M.LpDiv>
            <M.AlbumDiv></M.AlbumDiv>
            <M.IntroContentDiv>
              <M.Row1>
                <p>잔나비 정규 1집</p>
              </M.Row1>
              <M.Row2>
                <p className="korean">몽키호텔</p>
                <p className="english">MONKEY HOTEL</p>
              </M.Row2>
              <M.Row3>
                환상의 나라에 대한 이야기가 있는 앨범입니다. 유치찬란 무지개를
                겨눠 함부로 쏘아 올린 화살과, 그토록 부르던 별과 꿈을 향해
                신나게 뻗어 보이던 손끝. 영원히 깨어나지 못할 환상의 나라로!
              </M.Row3>
            </M.IntroContentDiv>
            <M.Footer>
              <div className="title">MONKEY HOTEL</div>
              <div className="jannabi">잔나비</div>
            </M.Footer>
          </M.IntroDiv>
          {albumData.map((album, index) => (
            <M.ContentDiv>
              <M.Index>Track {album.index}</M.Index>
              <M.Title>{album.title}</M.Title>
              <M.AlbumCoverImage image={album.coverImg}></M.AlbumCoverImage>
              <M.Description>{album.description}</M.Description>
            </M.ContentDiv>
          ))}
        </M.Wrapper>
      </Mobile>
    </>
  );
}

export default RegularDetailPage1;
