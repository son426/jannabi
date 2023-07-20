import * as S from "./regularDetailPage3.style";

function RegularDetailPage3() {
  return (
    <>
      <S.IntroDiv>
        <S.IntroBackgroundDiv>
          <S.LpWrapper>
            <S.LpCoverDiv></S.LpCoverDiv>
            <S.LpDiv></S.LpDiv>
          </S.LpWrapper>
        </S.IntroBackgroundDiv>
        <S.IntroBackgroundDiv>
          <S.TextWrapper>
            <S.TitleDiv>
              환상의 나라 : 지오르보 대장과{"\n"}구닥다리 영웅들
            </S.TitleDiv>
            <S.SubtitleDiv>
              THE LAND OF FANTASY :{"\n"}AND THE OLD FASHIONED HEROES
            </S.SubtitleDiv>
            <S.SummaryDiv>
              환상의 나라에 대한 이야기가 있는 앨범입니다.{"\n"}유치찬란
              무지개를 겨눠 함부로 쏘아 올린 화살과,{"\n"}그토록 부르던 별과
              꿈을 향해 신나게 뻗어 보이던 손끝.{"\n"}영원히 깨어나지 못할
              환상의 나라로!
            </S.SummaryDiv>
          </S.TextWrapper>
        </S.IntroBackgroundDiv>
      </S.IntroDiv>
      <S.ContentWrapper>
        <S.ContentDiv>
          <S.ContentImgDiv index={0}></S.ContentImgDiv>
          <S.ContentTextDiv>
            <S.ContentTextRow1>
              <div className="index">Track 1</div>
              <div className="length">01:07</div>
            </S.ContentTextRow1>
            <S.ContentTextRow2>환상의 나라</S.ContentTextRow2>
            <S.ContentTextRow3>
              <div>
                이 곡에서부터 이 앨범의 구상이 시작되었어요.​{"\n"}2집의 마지막
                수록곡 {"<"}꿈과 책과 힘과 벽{">"}에서{"\n"}시작한 앨범이라고도
                볼 수 있는데요,
              </div>
              <div>
                그 곡의 가사에서 나오는...{"\n"}자고나도 안 괜찮아지고{"\n"}
                자고나도 어른이 안 되길래{"\n"}이런 가사를 썼습니다.
              </div>
            </S.ContentTextRow3>
          </S.ContentTextDiv>
        </S.ContentDiv>
        <S.ContentDiv>
          <S.ContentImgDiv index={1}></S.ContentImgDiv>
          <S.ContentTextDiv>
            <S.ContentTextRow1>
              <div className="index">Track 2</div>
              <div className="length">03:15</div>
            </S.ContentTextRow1>
            <S.ContentTextRow2>용맹한 발걸음이여</S.ContentTextRow2>
            <S.ContentTextRow3>
              <div>
                성실'이라고 하는, 저희 잔나비가 생각하는{"\n"}미덕에 대해서 쓴
                곡입니다.{"\n"}성실한 여러분들 주제곡 삼아 아침에 출근길{"\n"}
                힘차게 용맹한 발걸음으로 가시길 바랍니다.
              </div>
            </S.ContentTextRow3>
          </S.ContentTextDiv>
        </S.ContentDiv>
      </S.ContentWrapper>
    </>
  );
}

export default RegularDetailPage3;
