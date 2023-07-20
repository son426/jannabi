import { useNavigate, useParams } from "react-router-dom";
import MainPage from "../main/mainPage";
import * as S from "./irregularDetailPage.style";
import { useState, useEffect } from "react";
import { irregularAlbumData } from "../../data/data";

interface IIrregularAlbumData {
  id: number;
  title: string;
  lyrics: string;
  fontColor: string;
  backgroundColor: string;
  img: string;
}

function IrregularDetailPage() {
  const { id } = useParams<string>();
  const index = Number(id) - 1;

  const [albumData, setAlbumData] = useState<IIrregularAlbumData>();

  const navigate = useNavigate();

  useEffect(() => {
    // getData
    setAlbumData(irregularAlbumData[index]);
  }, []);

  return (
    <>
      <S.BackgroundDiv>
        <S.BackButton
          onClick={() => {
            navigate(-1);
          }}
        >
          {"<"}
        </S.BackButton>
        <S.TextWrapper>
          <S.Title>SHE</S.Title>
          <S.Subtitle>2017.9.9 | 인디뮤직 | 1곡, 3분 14초</S.Subtitle>
          <S.Description>
            'She'는 잔나비가 네이버 '히든트랙 넘버V-1월의 주인공'으로 선정돼
            {"\n"}
            윤종신과 '잠금해제 라이브'라는 주제로 함께 한 V앱 생방송에서 선보인
            곡이다.{"\n"}
            {"\n"}
            {"\n"} 네이버 뮤지션리그에 공개한 후 팬들의 열렬한 성원에 힘입어
            정식 음원으로 발표하게 됐다.{"\n"} 유려한 멜로디 라인과 투박한
            편곡의 조화, 잔나비의 전매특허인 드라마틱한 구성이 돋보이는 'She'는
            {"\n"}
            아름다운 동화 한 편을 읽은 듯 쉽고 간결한 노랫말로 깊은 여운을
            남기는 곡이다.{"\n"}
            {"\n"}
            {"\n"}“우리가 사랑하는 혹은 우리를 사랑해주는 모든 '그녀'를 위한
            노래가 되었으면 좋겠습니다.”
          </S.Description>
          <S.Footer>발매사 카카오엔터테인먼트{"\n"}기획사 페포니 뮤직</S.Footer>
        </S.TextWrapper>
        <S.ImageWrapper>
          <S.ImageDiv1></S.ImageDiv1>
          <S.ImageDiv2></S.ImageDiv2>
          <S.ImageDiv3></S.ImageDiv3>
          <S.ImageDiv4></S.ImageDiv4>
        </S.ImageWrapper>
      </S.BackgroundDiv>
    </>
  );
}

export default IrregularDetailPage;
