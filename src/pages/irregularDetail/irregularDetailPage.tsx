import { useNavigate, useParams } from "react-router-dom";
import MainPage from "../main/mainPage";
import * as S from "./irregularDetailPage.style";
import { useState, useEffect } from "react";
import { irregularAlbumData } from "../../data/data";

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
}

function IrregularDetailPage() {
  const { id } = useParams<string>();
  const index = Number(id) - 1;

  const [albumData, setAlbumData] = useState<IIrregularAlbumData>();
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    // getData
    setAlbumData(irregularAlbumData[0]);
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <>Loading...</>;
  } else {
    return (
      <>
        <S.BackgroundDiv color={albumData?.pointColor}>
          <S.BackButton
            onClick={() => {
              navigate(-1);
            }}
          >
            {"<"}
          </S.BackButton>
          <S.TextWrapper color={albumData?.fontColor}>
            <S.Title>
              <p>{albumData?.title}</p>
            </S.Title>
            <S.Subtitle>{albumData?.subtitle}</S.Subtitle>
            <S.Meta>{albumData?.meta}</S.Meta>

            <S.LineWrapper>
              <S.Line></S.Line>
            </S.LineWrapper>

            <S.Description>{albumData?.description}</S.Description>
            <S.Footer>
              발매사 카카오엔터테인먼트{"\n"}기획사 페포니 뮤직
            </S.Footer>
          </S.TextWrapper>
          <S.ImageWrapper image={albumData?.image}></S.ImageWrapper>
        </S.BackgroundDiv>
      </>
    );
  }
}

export default IrregularDetailPage;
