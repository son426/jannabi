import { Desktop, Mobile } from "../../components/mediaquery";
import * as S from "./regularDetailPage1.style";
import * as M from "./mobile.style";
import { useState, useEffect, useRef } from "react";
import { Title } from "../irregularDetail/irregularDetailPage.style";
import { regularData } from "./data/data";

function RegularDetailPage1() {
  const [scrollHeight, setScrollHeight] = useState<number>(0);
  const [isScrolledMany, setIsScrolledMany] = useState<boolean>(false);
  const [nowIndex, setNowIndex] = useState(0);

  const albumData = regularData;

  return (
    <>
      <Desktop>
        <S.Wrapper>
          <S.IntroDiv isboolean={isScrolledMany}>
            <S.LpDiv></S.LpDiv>
            <S.AlbumDiv></S.AlbumDiv>
            <S.Footer>
              <div className="title">MONKEY HOTEL</div>
              <div className="jannabi">잔나비</div>
            </S.Footer>
          </S.IntroDiv>
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
            {albumData.map((album, index) => (
              <S.Column
                stringvalue={albumData[index].scrollImg}
                isboolean={index === nowIndex}
                onClick={() => {
                  setNowIndex(index);
                }}
              ></S.Column>
            ))}
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
