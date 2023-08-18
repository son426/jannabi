import { Default, Desktop, Mobile } from "../../components/mediaquery";
import * as S from "./regularDetailPage1.style";
import * as M from "./mobile.style";
import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { Title } from "../irregularDetail/irregularDetailPage.style";
import { IRegularData, regularData } from "../../data/meta/regular1";
import { ExitIcon, ListIcon, PauseIcon, PlayIcon } from "../../data/icon";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import useScrollAnimation from "@/hooks/useScroll";
import Regular1Menu from "@/components/regular1PlayList";
import Draggable, { DraggableData } from "react-draggable";
import { useMediaQuery } from "react-responsive";
import Soundwave from "@/components/soundwave";
import useAudioPlayer from "@/hooks/useAudioPlayer";
import { loadAudios } from "@/hooks/tools";

interface IButtonPosition {
  x: number;
  y: number;
}

function RegularDetailPage1() {
  const [nowIndex, setNowIndex] = useState<number>(0);
  const [titleVisible, setTitleVisible] = useState<boolean>(false);
  const [menuVisible, setMenuVisible] = useState<boolean>(false);
  const [isButtonDragging, setIsButtonDragging] = useState<boolean>(false);
  const [buttonPosition, setButtonPosition] = useState<IButtonPosition>({
    x: 0,
    y: 0,
  });

  const [audioFiles, setAudioFiles] = useState<string[]>([]);
  const [audioFetched, setAudioFetched] = useState<boolean>(false);
  const [imageFiles, setImageFiles] = useState<string[]>([]);
  const [imageFetched, setImageFetched] = useState<boolean>(false);

  const containerRef1 = useRef<HTMLDivElement>(null);
  const containerRef2 = useRef<HTMLDivElement>(null);
  const lpRef = useRef<HTMLDivElement>(null);
  const albumRef = useRef<HTMLDivElement>(null);
  const boxRef1 = useRef<HTMLDivElement>(null);
  const boxRef2 = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement[]>([]);

  const navigate = useNavigate();

  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  useScrollAnimation(
    containerRef1,
    containerRef2,
    lpRef,
    albumRef,
    boxRef1,
    boxRef2
  );

  const {
    audioRef,
    toggleAudio,
    isAudioPlaying,
    setIsAudioPlaying,
    changeAudio,
  } = useAudioPlayer("");

  useEffect(() => {
    const fetchAudioFiles = async () => {
      const fetchedAudios = await loadAudios("regular1");
      setAudioFiles(fetchedAudios);
      setAudioFetched(true);
    };

    fetchAudioFiles();
  }, []);

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
  const handleExit = () => {
    navigate("/main");
  };
  const handleTrackClick = (index: number) => {
    setNowIndex(index);
  };
  const handleDrag = (data: DraggableData) => {
    setButtonPosition({ x: data.x, y: data.y });
    setIsButtonDragging(true);
  };
  const handleButtonClick = () => {
    if (!isButtonDragging) {
      setMenuVisible((prev) => !prev);
    }
    setIsButtonDragging(false);
  };

  useEffect(() => {
    // title 없앴다가 다시 보이게
    const timeout = setTimeout(() => {
      setTitleVisible(true);
    }, 500);

    // 오디오 관련
    if (audioFetched) changeAudio(audioFiles[nowIndex]);

    // 스크롤 관련
    if (isMobile && nowIndex > 0)
      contentRef.current[nowIndex].scrollIntoView({
        behavior: "smooth",
      });

    return () => {
      clearTimeout(timeout);
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    };
  }, [nowIndex, audioFetched]);

  return (
    <>
      <Default>
        <S.Wrapper>
          <S.IntroDiv ref={containerRef1}>
            <S.LpDiv ref={lpRef}></S.LpDiv>
            <S.AlbumDiv ref={albumRef}></S.AlbumDiv>
            <S.Footer>
              <div className="title">MONKEY HOTEL</div>
              <div className="jannabi">잔나비</div>
            </S.Footer>
          </S.IntroDiv>
          <S.IntroContentDiv ref={containerRef2}>
            <S.IntroContentBg />
            <S.IntroContentBox>
              <div ref={boxRef1} className="test">
                <S.Row1>
                  <span>잔나비 정규 1집</span>
                </S.Row1>
                <S.Row2>
                  <p className="korean">몽키호텔</p>
                  <p className="english">MONKEY HOTEL</p>
                </S.Row2>
              </div>
              <div ref={boxRef2} className="test">
                <S.Row3>
                  <div>
                    듣는 재미를 더해드리기 위해 고민을 하던 중에 스토리가
                    이어지는 시리즈 앨범이 나오면 어떨까? 라는 생각을 했어요.
                    이번 앨범은 몽키호텔 시리즈의 첫 시작이 되겠습니다.잘 만든
                    드라마들을 보면 초반부에는 스토리 전개보다는 인물들의
                    캐릭터와 관계들을 먼저 쭈욱 보여주더라구요. 그것처럼
                    [몽키호텔1] 도 시작인 만큼 서두르지 않고 각 곡마다 인물들의
                    인격을 부여해봤어요.
                  </div>
                  <div>
                    각 장면과 함께 소소한 관계들을 그려주는 10장의 삽화도 앨범
                    책자에 함께 담았구요.작업하는 동안엔 정말 우리가 몽키호텔의
                    원숭이들인 양 역할놀이 하듯 지냈고, 그 덕분에 유치 혹은
                    촌스럽다는 강박에 그 동안 쓰지 못했던 표현들을 거리낌 없이
                    쏟아낼 수 있었고, 또 그런 덕분에 트랜드와는 한 발짝 더
                    멀어질 수 있게 되었고, 결국엔 우리 잔나비만의 색을 찾아낸 것
                    같아 뿌듯한 마음입니다.
                  </div>
                </S.Row3>
              </div>
            </S.IntroContentBox>
          </S.IntroContentDiv>
          <S.ContentDiv>
            <Draggable onDrag={(e, data) => handleDrag(data)}>
              <S.FloatingButton onClick={handleButtonClick}>
                <S.FloatingButtonImg />
                <Soundwave width={3.73} stop={!isAudioPlaying} maxheight={30} />
              </S.FloatingButton>
            </Draggable>
            {menuVisible && (
              <Regular1Menu
                isAudioPlaying={isAudioPlaying}
                toggleAudio={toggleAudio}
                onExit={handleExit}
                albumData={albumData}
                nowIndex={nowIndex}
                onTrackClick={handleTrackClick}
              />
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
      </Default>
      <Mobile>
        <M.Wrapper
          onClick={() => {
            if (menuVisible) setMenuVisible(false);
          }}
        >
          <Draggable onDrag={(e, data) => handleDrag(data)}>
            <M.FloatingButtonDiv>
              <M.FloatingButton
                onClick={(e: React.MouseEvent) => {
                  e.stopPropagation();
                  handleButtonClick();
                }}
              ></M.FloatingButton>
              <Soundwave width={3} maxheight={20} stop={!isAudioPlaying} />
            </M.FloatingButtonDiv>
          </Draggable>
          {menuVisible && (
            <Regular1Menu
              isAudioPlaying={isAudioPlaying}
              toggleAudio={toggleAudio}
              onExit={handleExit}
              albumData={albumData}
              nowIndex={nowIndex}
              onTrackClick={handleTrackClick}
            />
          )}
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
            <M.ContentDiv
              ref={(el: HTMLDivElement) => (contentRef.current[index] = el)}
            >
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
