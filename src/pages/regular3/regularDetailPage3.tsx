import { useState, useEffect, useRef } from "react";
import { Default, Desktop, Mobile } from "../../components/mediaquery";
import * as S from "./regularDetailPage3.style";
import * as M from "./mobile.style";
import images from "@/data/images/regular3";
import { PauseIcon, PlayIcon } from "@/data/icon";
import { regularData3 } from "@/data/meta/regular3";
import useScrollAnimation from "@/hooks/useScroll";
import useAudioPlayer from "@/hooks/useAudioPlayer";

function RegularDetailPage3() {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [nowIndex, setNowIndex] = useState<number>(0);

  const containerRef1 = useRef<HTMLDivElement>(null);
  const containerRef2 = useRef<HTMLDivElement>(null);
  const lpRef = useRef<HTMLDivElement>(null);
  const albumRef = useRef<HTMLDivElement>(null);
  const boxRef1 = useRef<HTMLDivElement>(null);
  const boxRef2 = useRef<HTMLDivElement>(null);

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
            <S.CardWrapper>
              {regularData3.map((album, index) => (
                <S.CardDiv
                  img={album.coverImg}
                  isboolean={index === nowIndex}
                  onClick={() => {
                    toggleAudio();
                    setNowIndex(index);
                  }}
                >
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
                    <S.CardRow3 onClick={handleAudioTime}>
                      <S.TotalBar>
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
                          <div>
                            ​제목을 짓게 된 것은 영화 코미디의 왕을 보고, 이
                            노래를 코미디에서 로맨스 장르로 바꿔서 보면 재밌을
                            수 있겠다 싶어서 이렇게 지어봤구요, 마음처럼 쉽게
                            타오르지 않는 사랑에 대해서 써 봤어요.{"\n"}
                            {"\n"}제 주변도 그렇고 많은 사람들이 연애에 대해서
                            뜨겁게 타오르고 싶은데 마음처럼 안 되는 사람들이
                            많더라구요, 표현도 잘 안 되고.{"\n"}
                            {"\n"}'비가내리고 음악이 흐르는' 로맨틱한 상황이
                            만들어졌음에도 불구하고 망설이고 있는 나 자신에
                            조금, 한탄하면서, 그리고 사랑이 빨리 불타오르길 하고
                            결심하는 그런 내용입니다.
                          </div>
                          <div>
                            이 노래는 마지막에 엄청 빨라지고 정신없어지는데,
                            그만큼 사랑이 빨리 불타올랐으면 좋겠다 하는, 그런
                            이미지를 그렸어요.{"\n"}
                            {"\n"}그리고 우리 하모나이즈와 함께 하는 목소리가
                            지니처럼, 요정들처럼 들렸으면 했어요. 그래서
                            마지막에는 요정들이 돌면서 노래하는 걸
                            표현해봤습니다. 이어폰으로 들으시면 소리가 돌면서
                            들릴 거에요.
                          </div>
                        </S.CardRowColumn1>
                        <S.CardRowColumn2>
                          <div className="col1">전체 가사보기</div>
                          <div className="col2">
                            헐리웃 러버! 이 연애는 이해할 수가 없어 꽉 막힌 내게
                            그런 감각을 바래? 헐리웃 러버! 그 말투도 조금
                            작위적인걸 어설픈 도취 취한 거야 분명해 나의 이름은
                            레이첼 오 라이언 유아 마이 스윗 헐트 사랑해요 뜨겁게
                            당신만을 때마침 비가 내리고 낯익은 음악이 흐르고
                            다들 춤을 추는데 마주보며 멋쩍게 웃던 우리 는사실은
                            그래 좀 미안해 너를 사랑하지만 늘 피곤한 내겐 그런
                            불꽃은 없어 뚜뚜뚜뚜 뚜뚜루- 뚜뚜뚜뚜 뚜뚜루-
                            뚜루두루 뚜루두루 뚜루뚜- 나의 이름은 리차드 오
                            줄리아 유아 마이 스윗헐트 사랑해요 뜨겁게 당신만을
                            때마침 비가 내리고 낯익은 음악이 흐르고 다들 춤을
                            추는데 마주보며 멋쩍게 웃던 우리는 우 사랑의
                            정열이여 한번쯤 타올라주어 이 내 머뭇거림 위로-
                            멈추지 않을 작은 하나 그 춤을 그 품에 잠겨 영원히 발
                            맞추게 뚜뚜뚜뚜 뚜뚜루- 뚜뚜뚜뚜 뚜뚜루- 뚜루두루
                            뚜루두루 뚜루뚜- 뚜두두두
                          </div>
                        </S.CardRowColumn2>
                      </S.CardRow4>
                    )}
                  </S.CardInfo>
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
                <M.CardDiv
                  img={album.coverImg}
                  isboolean={index === nowIndex}
                  onClick={() => {
                    setNowIndex(index);
                  }}
                >
                  <M.CardInfo>
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
                  </M.CardInfo>
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
