import { useState, useEffect, useRef } from "react";
import { Default, Desktop, Mobile } from "../../components/mediaquery";
import * as S from "./regularDetailPage3.style";
import * as M from "./mobile.style";
import images from "@/data/images/regular3";
import { PlayIcon } from "@/data/icon";
import { regularData3 } from "@/data/meta/regular3";

function RegularDetailPage3() {
  const [scrollHeight, setScrollHeight] = useState<number>(1);
  const [isScrolledMany, setIsScrolledMany] = useState<boolean>(false);
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [nowIndex, setNowIndex] = useState<number>(0);

  return (
    <>
      <Default>
        <S.Wrapper>
          <S.IntroDiv isboolean={isScrolledMany}>
            <S.LpDiv></S.LpDiv>
            <S.AlbumDiv></S.AlbumDiv>
            <S.Footer>
              <div className="title">THE LAND OF FANTASY</div>
              <div className="jannabi">잔나비</div>
            </S.Footer>
          </S.IntroDiv>
          <S.IntroContentDiv>
            <S.IntroContentBox>
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
              <S.Row3>
                환상의 나라에 대한 이야기가 있는 앨범입니다.{"\n"}유치찬란
                무지개를 겨눠 함부로 쏘아 올린 화살과,{"\n"}그토록 부르던 별과
                꿈을 향해 신나게 뻗어 보이던 손끝.{"\n"}영원히 깨어나지 못할
                환상의 나라로!
              </S.Row3>
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
                    setNowIndex(index);
                  }}
                >
                  <S.CardInfo>
                    <S.CardRow1>
                      <div>Track {album.index}</div>
                      <div>{album.playTime}</div>
                    </S.CardRow1>
                    <S.CardRow2>
                      <S.Column1>
                        <div className="kor">{album.title}</div>
                        <div className="eng">{album.engTitle}</div>
                      </S.Column1>
                      <S.Column2>
                        <PlayIcon className="playicon" />
                      </S.Column2>
                    </S.CardRow2>
                    <S.CardRow3></S.CardRow3>
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
