import { Link, useLocation, useNavigate } from "react-router-dom";
import * as S from "./mainPage.style";
import * as M from "./mobile.style";
import Intro from "./intro";
import { useRecoilState } from "recoil";
import { isIntroAtom } from "../../constants/atom";
import { Desktop, Mobile, Tablet } from "../../components/mediaquery";
import images from "@/data/images/main";

function MainPage() {
  const [isIntro] = useRecoilState(isIntroAtom);

  return (
    <>
      <Desktop>
        <>
          {isIntro && <Intro />}

          <S.BackgroundDiv img={images.background}>
            <S.ShelfDiv>
              <S.Shelf img={images.shelf}>
                <S.RegularRow>
                  <S.RegularDiv
                    to="/regulardetail/1"
                    hoveredImg={images.regular1_2}
                  >
                    <S.RegularCoverDiv
                      img={images.regular1}
                    ></S.RegularCoverDiv>
                    <S.LpDiv img={images.lp}></S.LpDiv>
                  </S.RegularDiv>
                  <S.RegularDiv
                    to="/regulardetail/2"
                    hoveredImg={images.regular2_2}
                  >
                    <S.RegularCoverDiv
                      img={images.regular2}
                    ></S.RegularCoverDiv>
                    <S.LpDiv></S.LpDiv>
                  </S.RegularDiv>
                  <S.RegularDiv
                    to="/regulardetail/3"
                    hoveredImg={images.regular3_2}
                  >
                    <S.RegularCoverDiv
                      img={images.regular3}
                    ></S.RegularCoverDiv>
                    <S.LpDiv></S.LpDiv>
                  </S.RegularDiv>
                </S.RegularRow>
                <S.IrregularRow1>
                  <S.Irr4
                    img={images.irregular4}
                    hoveredImg={images.irregular4_2}
                    to="/irregularDetail/2"
                  ></S.Irr4>
                  <S.Irr1
                    img={images.irregular1}
                    hoveredImg={images.irregular1_2}
                    to="/irregularDetail/1"
                  ></S.Irr1>
                  <S.Irr2 img={images.irregular2} to="/main"></S.Irr2>
                  <S.Irr3 img={images.irregular3} to="/main"></S.Irr3>
                  <S.Irr8
                    img={images.irregular8}
                    hoveredImg={images.irregular8_2}
                    to="/irregularDetail/5"
                  ></S.Irr8>
                  <S.Irr6
                    img={images.irregular6}
                    hoveredImg={images.irregular6_2}
                    to="/irregularDetail/4"
                  ></S.Irr6>
                  <S.Irr5
                    img={images.irregular5}
                    hoveredImg={images.irregular5_2}
                    to="/irregularDetail/3"
                  ></S.Irr5>
                  <S.Irr7 img={images.irregular7} to="/main"></S.Irr7>
                </S.IrregularRow1>
                <S.IrregularRow2>
                  <S.Irr9
                    img={images.irregular9}
                    hoveredImg={images.irregular9_2}
                    to="/irregularDetail/6"
                  ></S.Irr9>
                  <S.Irr10 img={images.irregular10} to="/main"></S.Irr10>
                  <S.Irr16
                    img={images.irregular16}
                    hoveredImg={images.irregular16_2}
                    to="/irregularDetail/10"
                  ></S.Irr16>
                  <S.Irr15
                    img={images.irregular15}
                    hoveredImg={images.irregular15_2}
                    to="/irregularDetail/9"
                  ></S.Irr15>
                  <S.Irr14
                    img={images.irregular14}
                    hoveredImg={images.irregular14_2}
                    to="/irregularDetail/8"
                  ></S.Irr14>
                  <S.Irr11
                    img={images.irregular11}
                    hoveredImg={images.irregular11_2}
                    to="/irregularDetail/7"
                  ></S.Irr11>
                  <S.Irr12 img={images.irregular12} to="/main"></S.Irr12>
                  <S.Irr13 img={images.irregular13} to="/main"></S.Irr13>
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
        </>
      </Desktop>
      <Mobile>
        <>
          {isIntro && <Intro />}
          <M.BackgroundDiv img={images.background}>
            <M.ShelfDiv img={images.shelf}>
              <M.RegularRow>
                <M.RegularDiv
                  to="/regularDetail/1"
                  hoveredImg={images.regular1_2}
                >
                  <M.LpDiv img={images.lp}></M.LpDiv>
                  <M.RegularCoverDiv img={images.regular1}></M.RegularCoverDiv>
                </M.RegularDiv>
                <M.RegularDiv
                  to="/regularDetail/2"
                  hoveredImg={images.regular2_2}
                >
                  <M.LpDiv img={images.lp}></M.LpDiv>
                  <M.RegularCoverDiv img={images.regular2}></M.RegularCoverDiv>
                </M.RegularDiv>
                <M.RegularDiv
                  to="/regularDetail/3"
                  hoveredImg={images.regular3_2}
                >
                  <M.LpDiv img={images.lp}></M.LpDiv>
                  <M.RegularCoverDiv img={images.regular3}></M.RegularCoverDiv>
                </M.RegularDiv>
              </M.RegularRow>
              <M.IrregularRow1>
                <M.Irr4
                  img={images.irregular4}
                  hoveredImg={images.irregular4_2}
                  to="/irregularDetail/2"
                ></M.Irr4>
                <M.Irr1
                  img={images.irregular1}
                  hoveredImg={images.irregular1_2}
                  to="/irregularDetail/1"
                ></M.Irr1>
                <M.Irr2 img={images.irregular2} to="/main"></M.Irr2>
                <M.Irr3 img={images.irregular3} to="/main"></M.Irr3>
                <M.Irr8
                  img={images.irregular8}
                  hoveredImg={images.irregular8_2}
                  to="/irregularDetail/5"
                ></M.Irr8>
                <M.Irr6
                  img={images.irregular6}
                  hoveredImg={images.irregular6_2}
                  to="/irregularDetail/4"
                ></M.Irr6>
                <M.Irr5
                  img={images.irregular5}
                  hoveredImg={images.irregular5_2}
                  to="/irregularDetail/3"
                ></M.Irr5>
                <M.Irr7 img={images.irregular7} to="/main"></M.Irr7>
              </M.IrregularRow1>
              <M.IrregularRow2>
                <M.Irr9
                  img={images.irregular9}
                  hoveredImg={images.irregular9_2}
                  to="/irregularDetail/6"
                ></M.Irr9>
                <M.Irr10 img={images.irregular10} to="/main"></M.Irr10>
                <M.Irr16
                  img={images.irregular16}
                  hoveredImg={images.irregular16_2}
                  to="/irregularDetail/10"
                ></M.Irr16>
                <M.Irr15
                  img={images.irregular15}
                  hoveredImg={images.irregular15_2}
                  to="/irregularDetail/9"
                ></M.Irr15>
                <M.Irr14
                  img={images.irregular14}
                  hoveredImg={images.irregular14_2}
                  to="/irregularDetail/8"
                ></M.Irr14>
                <M.Irr11
                  img={images.irregular11}
                  hoveredImg={images.irregular11_2}
                  to="/irregularDetail/7"
                ></M.Irr11>
                <M.Irr12 img={images.irregular12} to="/main"></M.Irr12>
                <M.Irr13 img={images.irregular13} to="/main"></M.Irr13>
              </M.IrregularRow2>
            </M.ShelfDiv>
          </M.BackgroundDiv>
        </>
      </Mobile>
      <Tablet>
        <>
          {isIntro && <Intro />}
          <h1
            style={{
              fontSize: "30px",
              textAlign: "center",
              padding: "50% 0px",
            }}
          >
            반응형 공사중. 컴퓨터로 오세용
          </h1>
          <div>
            <Link to="/irregularDetail/1">비정규앨범페이지 구경</Link>
          </div>
          <div>
            <Link to="/shoutout">샤라웃페이지 구경</Link>
          </div>
        </>
      </Tablet>
    </>
  );
}

export default MainPage;
