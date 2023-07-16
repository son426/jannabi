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
      <MainPage />
      <S.BackgroundDiv
        onClick={() => {
          navigate(-1);
        }}
        backgroundcolor={albumData?.backgroundColor}
      >
        <S.ContentDiv fontcolor={albumData?.fontColor}>
          <S.BackButton
            onClick={() => {
              navigate(-1);
            }}
          >
            뒤로 가기
          </S.BackButton>
          <S.ContentColumnDiv>
            <img src={albumData?.img} />
          </S.ContentColumnDiv>
          <S.ContentColumnDiv>
            <div>{albumData?.title}</div>
            <div>{albumData?.lyrics}</div>
            <div>{albumData?.id}번 비정규앨범</div>
          </S.ContentColumnDiv>
        </S.ContentDiv>
      </S.BackgroundDiv>
    </>
  );
}

export default IrregularDetailPage;
