import * as S from "./regularDetailPage2.style";
import * as M from "./mobile.style";
import { Default, Mobile } from "@/components/mediaquery";
import { useRef, useState, useEffect } from "react";
import useScrollAnimation from "@/hooks/useScroll";
import { ILyric, IRegularData, regularData2 } from "@/data/meta/regular2";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import useAudioPlayer from "@/hooks/useAudioPlayer";
import { DownChevronIcon } from "@/data/icon";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { fetchAudios, loadAudios, loadImages } from "@/hooks/tools";
import Loading from "@/components/loading";

function RegularDetailPage2() {
  const [nowIndex, setNowIndex] = useState<number>(0);
  const [selectedLyric, setSelectedLyric] = useState<ILyric>(
    regularData2[0].lyricData[0]
  );
  const [visibleContentMetaIndex, setVisibleContentMetaIndex] =
    useState<number>(-1);
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
  const introContentBgRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();

  const albumData: IRegularData[] = regularData2;
  // const initialTrack: string = albumData[nowIndex].audioFile;
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

  useEffect(() => {
    const fetchAudioFiles = async () => {
      const fetchedAudios = await loadAudios("regular2");
      setAudioFiles(fetchedAudios);
      setAudioFetched(true);
    };

    const fetchImageFiles = async () => {
      const fetchedImages = await loadImages("regular2");
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

  // 스크롤 이벤트
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger as any);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef1.current,
        endTrigger: containerRef1.current,
        start: "center center",
        end: "bottom top",
        markers: false,
        scrub: 1,
        toggleActions: "restart pause reverse none",
        pin: containerRef1.current,
      },
    });

    tl.to(lpRef.current, {
      x: 100,
      duration: 3,
      rotate: 180,
      scrub: 1,
    }).to(
      albumRef.current,
      {
        x: -100,
        duration: 3,
      },
      0 // the 0 here places the second tween at the beginning of the timeline
    );

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef2.current,
        endTrigger: containerRef2.current,
        start: "center center",
        end: "bottom+=700px top",
        markers: false,
        scrub: 1,
        toggleActions: "restart pause reverse none",
        pin: containerRef2.current,
      },
    });
    tl2.to(introContentBgRef.current, {
      width: 0,
      scrub: 1,
    });
  }, [containerRef1, containerRef2, lpRef, albumRef, boxRef1, boxRef2]);

  const handleRowClick = (index: number) => {
    setAudioProgress(0);
    setNowIndex(index);
    if (visibleContentMetaIndex === index) {
      console.log("Set -1");
      setVisibleContentMetaIndex(-1);
    } else {
      console.log("Set", index);
      setVisibleContentMetaIndex(index);
    }
  };
  const handleLyricClick = (lyric: ILyric) => {
    setSelectedLyric(lyric);
    audioRef.current.currentTime = lyric.startTime;
    console.log(lyric);
  };

  useEffect(() => {
    if (audioFetched) changeAudio(audioFiles[nowIndex]);

    return () => {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    };
  }, [nowIndex, audioFetched]);

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
      <Loading isloading={isLoading} loadingtext="정규 2집 앨범관" />
      <Default>
        <S.Wrapper>
          <S.IntroDiv ref={containerRef1}>
            <S.LogoDiv>
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 894 179"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.078125 175.2V3.6H21.6781V155.28H111.678V175.2H0.078125Z"
                  fill="#1B1B1B"
                />
                <path
                  d="M129.369 175.2V3.6H250.569V22.56H150.969V76.8H241.449V95.04H150.969V155.28H253.449V175.2H129.369Z"
                  fill="#1B1B1B"
                />
                <path
                  d="M405.95 175.2L399.71 152.64H399.23C386.75 170.08 368.91 178.8 345.71 178.8C321.71 178.8 302.27 170.56 287.39 154.08C272.51 137.6 265.07 116.24 265.07 90C265.07 63.76 272.27 42.24 286.67 25.44C301.23 8.48 321.55 0 347.63 0C367.15 0 382.91 4.96 394.91 14.88C407.07 24.64 414.59 38.08 417.47 55.2H395.15C392.75 43.52 387.47 34.56 379.31 28.32C371.15 21.92 360.43 18.72 347.15 18.72C327.31 18.72 312.35 25.28 302.27 38.4C292.19 51.52 287.15 68.72 287.15 90C287.15 110.96 292.67 127.92 303.71 140.88C314.75 153.68 328.99 160.08 346.43 160.08C363.23 160.08 376.03 155.12 384.83 145.2C393.79 135.28 398.27 122.64 398.27 107.28V103.2H346.67V84.48H419.87V175.2H405.95Z"
                  fill="#1B1B1B"
                />
                <path
                  d="M446.075 175.2V3.6H567.275V22.56H467.675V76.8H558.155V95.04H467.675V155.28H570.155V175.2H446.075Z"
                  fill="#1B1B1B"
                />
                <path
                  d="M591.772 175.2V3.6H614.572L692.812 122.88L705.292 144.96H705.772V3.6H725.932V175.2H703.852L625.132 55.68L612.412 34.32H611.932V175.2H591.772Z"
                  fill="#1B1B1B"
                />
                <path
                  d="M754.578 175.2V3.6H816.978C842.098 3.6 861.058 11.36 873.858 26.88C886.658 42.4 893.058 63.44 893.058 90C893.058 116.4 886.418 137.2 873.138 152.4C859.858 167.6 840.578 175.2 815.298 175.2H754.578ZM776.178 156.24H814.578C852.178 156.24 870.978 134.16 870.978 90C870.978 44.88 852.738 22.32 816.258 22.32H776.178V156.24Z"
                  fill="#1B1B1B"
                />
              </svg>
            </S.LogoDiv>
            <S.LogoDiv2>
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 118 168"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 168C0.48 157.92 2.16 149.04 5.04 141.36C8.08 133.68 13.12 126.64 20.16 120.24C27.36 113.84 32.96 109.28 36.96 106.56C41.12 103.68 48.32 99.28 58.56 93.36C58.88 93.04 59.12 92.88 59.28 92.88C59.44 92.72 59.68 92.56 60 92.4C60.32 92.24 60.56 92.08 60.72 91.92C61.04 91.76 61.36 91.6 61.68 91.44C74.32 84.08 83.28 77.76 88.56 72.48C93.84 67.04 96.48 59.76 96.48 50.64C96.48 40.56 93.2 32.4 86.64 26.16C80.24 19.92 71.6 16.8 60.72 16.8C49.68 16.8 40.96 20.24 34.56 27.12C28.32 33.84 25.2 44.8 25.2 60H4.08C4.08 40.64 9.28 25.76 19.68 15.36C30.08 5.12 44.32 0 62.4 0C78.88 0 92.16 4.72 102.24 14.16C112.32 23.6 117.36 35.68 117.36 50.4C117.36 56.32 116.48 61.76 114.72 66.72C112.96 71.68 111.12 75.68 109.2 78.72C107.28 81.76 103.76 85.28 98.64 89.28C93.52 93.12 89.68 95.76 87.12 97.2C84.72 98.64 79.92 101.36 72.72 105.36C71.28 106.16 70.16 106.8 69.36 107.28C61.68 111.6 55.28 115.36 50.16 118.56C45.2 121.76 40 126.24 34.56 132C29.12 137.6 25.68 143.2 24.24 148.8H114V168H0Z"
                  fill="#1B1B1B"
                />
              </svg>
            </S.LogoDiv2>
            <S.LpDiv ref={lpRef} img={imageFiles[3]}></S.LpDiv>
            <S.AlbumDiv ref={albumRef} img={imageFiles[1]}></S.AlbumDiv>
            <S.Footer>
              <div className="title">LEGEND</div>
              <div className="jannabi">잔나비</div>
            </S.Footer>
          </S.IntroDiv>
          <S.IntroContentDiv ref={containerRef2}>
            <S.IntroContentBg img={imageFiles[2]} />
            <S.IntroContentBg2 ref={introContentBgRef} />
            <S.IntroContentBox>
              <div ref={boxRef1} className="test">
                <S.Row1>
                  <span>잔나비 정규 2집</span>
                </S.Row1>
                <S.Row2>
                  <p className="korean">전설</p>
                  <p className="english">LEGEND</p>
                </S.Row2>
              </div>
              <div ref={boxRef2} className="test">
                <S.Row3>
                  <div>
                    3년 만에 돌아온 잔나비의 2집이네요. 머나먼 시간이었죠. 그
                    사이 많은 것들이 변했어요. 세상은 더 이상 갈망하지 않고,
                    치열하게 부딪히며 사랑하던 모든 관계 역시 시대답게 편리해진
                    듯해요. 그것도 모르고 언제나 더 뜨겁고자 했던 나와 내
                    친구들은 어디에 몸을 부벼야 할지 몰라 한낱 음악 속에 우리
                    이야기를 눈치 없이 다 담아버렸네요.
                  </div>
                  <div>
                    ‘전설'이라는 쓸데없이 장엄하고 촌스럽기 그지없는 이름과
                    함께요. 투 머치 인포메이션. 그래서 빙빙 돌며 같은 말을
                    반복하기도 할테니 남 이야기 듣듯 무심히 들어주세요. 언젠가는
                    다 사라져 전설로 남을 청춘의 처절했던 시간들에 대한
                    이야기라며. 많은 시간 함께 기다려준 우리 팬분들께 감사
                    드립니다. 우리도 얼마나 많이 기다려왔는지 몰라요.
                  </div>
                </S.Row3>
              </div>
            </S.IntroContentBox>
          </S.IntroContentDiv>
          <S.ContentDiv>
            <S.ContentBg img={imageFiles[0]} />
            <S.ContentBox img={imageFiles[0]}>
              {albumData.map((album, index) => (
                <S.ContentRow>
                  <S.ContentLine onClick={() => handleRowClick(index)}>
                    <S.ContentColumn>Track {album?.index}</S.ContentColumn>
                    <S.ContentColumn>{album?.title}</S.ContentColumn>
                    <S.ContentColumn>{album?.engTitle}</S.ContentColumn>
                    <S.ContentColumn>{album?.playTime}</S.ContentColumn>
                  </S.ContentLine>
                  {index === nowIndex && visibleContentMetaIndex === index && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <S.ContentMeta onClick={toggleAudio}>
                        <S.MetaColumn numbervalue={audioProgress * 100}>
                          <div className="kor">{album?.title}</div>
                          <div className="eng">
                            <span onClick={handleAudioTime} className="engText">
                              {album?.engTitle}
                            </span>
                          </div>
                        </S.MetaColumn>
                        <S.MetaColumn>
                          <S.LyricDiv>
                            {album?.lyricData.map(
                              (lyric: ILyric, index: number) => (
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
                              )
                            )}
                          </S.LyricDiv>
                        </S.MetaColumn>
                      </S.ContentMeta>
                    </motion.div>
                  )}
                </S.ContentRow>
              ))}
            </S.ContentBox>
          </S.ContentDiv>
        </S.Wrapper>
      </Default>
      <Mobile>
        <M.Wrapper>
          <M.IntroDiv>
            <M.LogoDiv>
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 894 179"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.078125 175.2V3.6H21.6781V155.28H111.678V175.2H0.078125Z"
                  fill="#1B1B1B"
                />
                <path
                  d="M129.369 175.2V3.6H250.569V22.56H150.969V76.8H241.449V95.04H150.969V155.28H253.449V175.2H129.369Z"
                  fill="#1B1B1B"
                />
                <path
                  d="M405.95 175.2L399.71 152.64H399.23C386.75 170.08 368.91 178.8 345.71 178.8C321.71 178.8 302.27 170.56 287.39 154.08C272.51 137.6 265.07 116.24 265.07 90C265.07 63.76 272.27 42.24 286.67 25.44C301.23 8.48 321.55 0 347.63 0C367.15 0 382.91 4.96 394.91 14.88C407.07 24.64 414.59 38.08 417.47 55.2H395.15C392.75 43.52 387.47 34.56 379.31 28.32C371.15 21.92 360.43 18.72 347.15 18.72C327.31 18.72 312.35 25.28 302.27 38.4C292.19 51.52 287.15 68.72 287.15 90C287.15 110.96 292.67 127.92 303.71 140.88C314.75 153.68 328.99 160.08 346.43 160.08C363.23 160.08 376.03 155.12 384.83 145.2C393.79 135.28 398.27 122.64 398.27 107.28V103.2H346.67V84.48H419.87V175.2H405.95Z"
                  fill="#1B1B1B"
                />
                <path
                  d="M446.075 175.2V3.6H567.275V22.56H467.675V76.8H558.155V95.04H467.675V155.28H570.155V175.2H446.075Z"
                  fill="#1B1B1B"
                />
                <path
                  d="M591.772 175.2V3.6H614.572L692.812 122.88L705.292 144.96H705.772V3.6H725.932V175.2H703.852L625.132 55.68L612.412 34.32H611.932V175.2H591.772Z"
                  fill="#1B1B1B"
                />
                <path
                  d="M754.578 175.2V3.6H816.978C842.098 3.6 861.058 11.36 873.858 26.88C886.658 42.4 893.058 63.44 893.058 90C893.058 116.4 886.418 137.2 873.138 152.4C859.858 167.6 840.578 175.2 815.298 175.2H754.578ZM776.178 156.24H814.578C852.178 156.24 870.978 134.16 870.978 90C870.978 44.88 852.738 22.32 816.258 22.32H776.178V156.24Z"
                  fill="#1B1B1B"
                />
              </svg>
            </M.LogoDiv>
            <M.LogoDiv2>
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 118 168"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 168C0.48 157.92 2.16 149.04 5.04 141.36C8.08 133.68 13.12 126.64 20.16 120.24C27.36 113.84 32.96 109.28 36.96 106.56C41.12 103.68 48.32 99.28 58.56 93.36C58.88 93.04 59.12 92.88 59.28 92.88C59.44 92.72 59.68 92.56 60 92.4C60.32 92.24 60.56 92.08 60.72 91.92C61.04 91.76 61.36 91.6 61.68 91.44C74.32 84.08 83.28 77.76 88.56 72.48C93.84 67.04 96.48 59.76 96.48 50.64C96.48 40.56 93.2 32.4 86.64 26.16C80.24 19.92 71.6 16.8 60.72 16.8C49.68 16.8 40.96 20.24 34.56 27.12C28.32 33.84 25.2 44.8 25.2 60H4.08C4.08 40.64 9.28 25.76 19.68 15.36C30.08 5.12 44.32 0 62.4 0C78.88 0 92.16 4.72 102.24 14.16C112.32 23.6 117.36 35.68 117.36 50.4C117.36 56.32 116.48 61.76 114.72 66.72C112.96 71.68 111.12 75.68 109.2 78.72C107.28 81.76 103.76 85.28 98.64 89.28C93.52 93.12 89.68 95.76 87.12 97.2C84.72 98.64 79.92 101.36 72.72 105.36C71.28 106.16 70.16 106.8 69.36 107.28C61.68 111.6 55.28 115.36 50.16 118.56C45.2 121.76 40 126.24 34.56 132C29.12 137.6 25.68 143.2 24.24 148.8H114V168H0Z"
                  fill="#1B1B1B"
                />
              </svg>
            </M.LogoDiv2>
            <M.LpDiv img={imageFiles[3]}></M.LpDiv>
            <M.AlbumDiv img={imageFiles[1]}></M.AlbumDiv>
            <M.Footer>
              <div className="title">LEGEND</div>
              <div className="jannabi">잔나비</div>
            </M.Footer>
          </M.IntroDiv>
          <M.IntroContentDiv>
            <M.IntroContentBox>
              <M.Row1>
                <span>잔나비 정규 2집</span>
              </M.Row1>
              <M.Row2>
                <p className="korean">전설</p>
                <p className="english">LEGEND</p>
              </M.Row2>
              <M.Row3>
                <div>
                  3년 만에 돌아온 잔나비의 2집이네요. 머나먼 시간이었죠. 그 사이
                  많은 것들이 변했어요. 세상은 더 이상 갈망하지 않고, 치열하게
                  부딪히며 사랑하던 모든 관계 역시 시대답게 편리해진 듯해요.
                  그것도 모르고 언제나 더 뜨겁고자 했던 나와 내 친구들은 어디에
                  몸을 부벼야 할지 몰라 한낱 음악 속에 우리 이야기를 눈치 없이
                  다 담아버렸네요.
                </div>
                <div>
                  ‘전설'이라는 쓸데없이 장엄하고 촌스럽기 그지없는 이름과
                  함께요. 투 머치 인포메이션. 그래서 빙빙 돌며 같은 말을
                  반복하기도 할테니 남 이야기 듣듯 무심히 들어주세요. 언젠가는
                  다 사라져 전설로 남을 청춘의 처절했던 시간들에 대한
                  이야기라며. 많은 시간 함께 기다려준 우리 팬분들께 감사
                  드립니다. 우리도 얼마나 많이 기다려왔는지 몰라요.
                </div>
              </M.Row3>
            </M.IntroContentBox>
          </M.IntroContentDiv>
          <M.ContentDiv>
            {/* <M.ContentBg img={imageFiles[0]} /> */}
            <M.ContentBox img={imageFiles[0]}>
              <M.ContentTitle>TrackList</M.ContentTitle>
              {albumData.map((album, index) => (
                <M.ContentRow>
                  <M.ContentLine onClick={() => handleRowClick(index)}>
                    <div className="row1">
                      <M.ContentColumn>Track {album?.index}</M.ContentColumn>
                    </div>
                    <div className="row2">
                      <M.ContentColumn>
                        {album?.title} <DownChevronIcon className="icon" />
                      </M.ContentColumn>
                      <M.ContentColumn>{album?.playTime}</M.ContentColumn>
                    </div>
                  </M.ContentLine>
                  {index === nowIndex && visibleContentMetaIndex === index && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <M.ContentMeta onClick={toggleAudio}>
                        <M.MetaColumn numbervalue={audioProgress * 100}>
                          <div className="kor">{album?.title}</div>
                          <div className="eng">
                            <span onClick={handleAudioTime} className="engText">
                              {album?.engTitle}
                            </span>
                          </div>
                        </M.MetaColumn>
                        <M.MetaColumn>
                          <M.LyricDiv>
                            {album?.lyricData.map(
                              (lyric: ILyric, index: number) => (
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
                              )
                            )}
                          </M.LyricDiv>
                        </M.MetaColumn>
                      </M.ContentMeta>
                    </motion.div>
                  )}
                </M.ContentRow>
              ))}
            </M.ContentBox>
          </M.ContentDiv>
        </M.Wrapper>
      </Mobile>
    </>
  );
}

export default RegularDetailPage2;
