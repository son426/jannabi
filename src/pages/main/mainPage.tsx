import { Link, useLocation, useNavigate } from "react-router-dom";
import * as S from "./mainPage.style";
import images from "./image/index";
import Intro from "./intro";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { isIntroAtom } from "../../constants/atom";

function MainPage() {
  const location = useLocation();

  const [isIntro] = useRecoilState(isIntroAtom);

  return (
    <>
      {isIntro && <Intro />}
      <S.BackgroundDiv>
        <S.ShelfDiv>
          <S.Shelf>
            <S.RegularRow>
              <S.RegularDiv to="/regulardetail/1">
                <S.RegularCoverDiv img={images.regular1}></S.RegularCoverDiv>
                <S.LpDiv></S.LpDiv>
              </S.RegularDiv>
              <S.RegularDiv to="/regulardetail/2">
                <S.RegularCoverDiv img={images.regular2}></S.RegularCoverDiv>
                <S.LpDiv></S.LpDiv>
              </S.RegularDiv>
              <S.RegularDiv to="/regulardetail/3">
                <S.RegularCoverDiv img={images.regular3}></S.RegularCoverDiv>
                <S.LpDiv></S.LpDiv>
              </S.RegularDiv>
            </S.RegularRow>
            <S.IrregularRow1>
              <S.Irr1 img={images.irregular1} to="/irregularDetail/2"></S.Irr1>
              <S.Irr2 img={images.irregular2} to="/irregularDetail/1"></S.Irr2>
              <S.Irr3 img={images.irregular3} to="/irregularDetail/2"></S.Irr3>
              <S.Irr4 img={images.irregular4} to="/irregularDetail/2"></S.Irr4>
              <S.Irr5 img={images.irregular5} to="/irregularDetail/2"></S.Irr5>
              <S.Irr6 img={images.irregular6} to="/irregularDetail/2"></S.Irr6>
              <S.Irr7 img={images.irregular7} to="/irregularDetail/2"></S.Irr7>
              <S.Irr8 img={images.irregular8} to="/irregularDetail/2"></S.Irr8>
            </S.IrregularRow1>
            <S.IrregularRow2>
              <S.Irr9 img={images.irregular9} to="/irregularDetail/2"></S.Irr9>
              <S.Irr10
                img={images.irregular10}
                to="/irregularDetail/2"
              ></S.Irr10>
              <S.Irr11
                img={images.irregular11}
                to="/irregularDetail/2"
              ></S.Irr11>
              <S.Irr12
                img={images.irregular12}
                to="/irregularDetail/2"
              ></S.Irr12>
              <S.Irr13
                img={images.irregular13}
                to="/irregularDetail/2"
              ></S.Irr13>
              <S.Irr14
                img={images.irregular14}
                to="/irregularDetail/2"
              ></S.Irr14>
              <S.Irr15
                img={images.irregular15}
                to="/irregularDetail/2"
              ></S.Irr15>
              <S.Irr16
                img={images.irregular16}
                to="/irregularDetail/2"
              ></S.Irr16>
            </S.IrregularRow2>
          </S.Shelf>
        </S.ShelfDiv>
      </S.BackgroundDiv>

      <Link
        to="/shoutout"
        style={{ fontWeight: 600, color: "red", fontSize: "30px" }}
      >
        샤라웃 페이지 버튼
      </Link>
      <Link
        to="/regulardetail/1"
        style={{
          fontWeight: 600,
          color: "red",
          fontSize: "30px",
          marginLeft: "50px",
        }}
      >
        정규 1집 버튼
      </Link>
    </>
  );
}

export default MainPage;
