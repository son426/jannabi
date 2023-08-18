import { Link, useLocation, useNavigate } from "react-router-dom";
import * as S from "./mainPage.style";
import * as M from "./mobile.style";
import * as T from "./tablet.style";
import * as B from "./big.style";
import Intro from "./intro";
import { useRecoilState } from "recoil";
import { isIntroAtom } from "../../constants/atom";
import {
  BigDesktop,
  Desktop,
  Mobile,
  Tablet,
} from "../../components/mediaquery";
import images from "@/data/images/main";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

function MainPage() {
  const [isMoved, setIsMoved] = useState<boolean>(false);
  const [isIntro] = useRecoilState(isIntroAtom);

  const leftDoorRef = useRef<HTMLDivElement>(null);
  const rightDoorRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();

  const handleLeftDoor = () => {
    if (leftDoorRef.current && rightDoorRef.current) {
      const leftDoor = leftDoorRef.current;
      const rightDoor = rightDoorRef.current;

      const targetPosition = isMoved ? "translateX(0)" : "translateX(85%)";
      if (isMoved) {
        leftDoor.style.transform = targetPosition;
        rightDoor.style.transform = targetPosition;
      } else {
        leftDoor.style.transform = targetPosition;
      }

      setIsMoved((prev) => !prev);
    }
  };

  const handleRightDoor = () => {
    if (leftDoorRef.current && rightDoorRef.current) {
      const leftDoor = leftDoorRef.current;
      const rightDoor = rightDoorRef.current;
      const targetPosition = isMoved ? "translateX(0)" : "translateX(-85%)";
      if (isMoved) {
        leftDoor.style.transform = targetPosition;
        rightDoor.style.transform = targetPosition;
      } else {
        rightDoor.style.transform = targetPosition;
      }

      setIsMoved((prev) => !prev);
    }
  };

  return (
    <>
      <BigDesktop>
        <>
          {isIntro && <Intro />}
          <B.BackgroundDiv img={images.background}>
            <B.ShelfDiv>
              <B.Shelf img={images.shelf}>
                <B.RegularRow>
                  <B.RegularDiv to="/regulardetail/1">
                    <B.RegularCoverDiv
                      img={images.regular1}
                    ></B.RegularCoverDiv>
                    <B.LpDiv img={images.lp}></B.LpDiv>
                  </B.RegularDiv>
                  <B.RegularDiv to="/regulardetail/2">
                    <B.RegularCoverDiv
                      img={images.regular2}
                    ></B.RegularCoverDiv>
                    <B.LpDiv img={images.lp}></B.LpDiv>
                  </B.RegularDiv>
                  <B.RegularDiv to="/regulardetail/3">
                    <B.RegularCoverDiv
                      img={images.regular3}
                    ></B.RegularCoverDiv>
                    <B.LpDiv img={images.lp}></B.LpDiv>
                  </B.RegularDiv>
                </B.RegularRow>
                <B.IrregularRow1>
                  <B.Irr4
                    img={images.irregular4}
                    to="/irregularDetail/2"
                  ></B.Irr4>
                  <B.Irr1
                    img={images.irregular1}
                    to="/irregularDetail/1"
                  ></B.Irr1>
                  <B.Irr2 img={images.irregular2} to="/main"></B.Irr2>
                  <B.Irr3 img={images.irregular3} to="/main"></B.Irr3>
                  <B.Irr8
                    img={images.irregular8}
                    to="/irregularDetail/5"
                  ></B.Irr8>
                  <B.Irr6
                    img={images.irregular6}
                    to="/irregularDetail/4"
                  ></B.Irr6>
                  <B.Irr5
                    img={images.irregular5}
                    to="/irregularDetail/3"
                  ></B.Irr5>
                  <B.Irr7 img={images.irregular7} to="/main"></B.Irr7>
                </B.IrregularRow1>
                <B.IrregularRow2>
                  <B.Irr9
                    img={images.irregular9}
                    to="/irregularDetail/6"
                  ></B.Irr9>
                  <B.Irr10 img={images.irregular10} to="/main"></B.Irr10>
                  <B.Irr16
                    img={images.irregular16}
                    to="/irregularDetail/10"
                  ></B.Irr16>
                  <B.Irr15
                    img={images.irregular15}
                    to="/irregularDetail/9"
                  ></B.Irr15>
                  <B.Irr14
                    img={images.irregular14}
                    to="/irregularDetail/8"
                  ></B.Irr14>
                  <B.Irr11
                    img={images.irregular11}
                    to="/irregularDetail/7"
                  ></B.Irr11>
                  <B.Irr12 img={images.irregular12} to="/main"></B.Irr12>
                  <B.Irr13 img={images.irregular13} to="/main"></B.Irr13>
                </B.IrregularRow2>
                <B.BottomRow>
                  <B.ClickDiv onClick={() => navigate("/hidden")}></B.ClickDiv>
                  <B.DoorDiv>
                    <B.LeftDoor
                      ref={leftDoorRef}
                      onClick={handleLeftDoor}
                      img={images.leftdoor}
                    ></B.LeftDoor>
                    <B.RightDoor
                      ref={rightDoorRef}
                      onClick={handleRightDoor}
                      img={images.rightdoor}
                    ></B.RightDoor>
                  </B.DoorDiv>
                  <B.TyperLink to="/shoutout" img={images.typer} />
                </B.BottomRow>
              </B.Shelf>
            </B.ShelfDiv>
          </B.BackgroundDiv>
        </>
      </BigDesktop>
      <Desktop>
        <>
          {isIntro && <Intro />}

          <S.BackgroundDiv img={images.background}>
            <S.ShelfDiv>
              <S.Shelf img={images.shelf}>
                <S.RegularRow>
                  <S.RegularDiv to="/regulardetail/1">
                    <S.RegularCoverDiv
                      img={images.regular1}
                    ></S.RegularCoverDiv>
                    <S.LpDiv img={images.lp}></S.LpDiv>
                  </S.RegularDiv>
                  <S.RegularDiv to="/regulardetail/2">
                    <S.RegularCoverDiv
                      img={images.regular2}
                    ></S.RegularCoverDiv>
                    <S.LpDiv img={images.lp}></S.LpDiv>
                  </S.RegularDiv>
                  <S.RegularDiv to="/regulardetail/3">
                    <S.RegularCoverDiv
                      img={images.regular3}
                    ></S.RegularCoverDiv>
                    <S.LpDiv img={images.lp}></S.LpDiv>
                  </S.RegularDiv>
                </S.RegularRow>
                <S.IrregularRow1>
                  <S.Irr4
                    img={images.irregular4}
                    to="/irregularDetail/2"
                  ></S.Irr4>
                  <S.Irr1
                    img={images.irregular1}
                    to="/irregularDetail/1"
                  ></S.Irr1>
                  <S.Irr2 img={images.irregular2} to="/main"></S.Irr2>
                  <S.Irr3 img={images.irregular3} to="/main"></S.Irr3>
                  <S.Irr8
                    img={images.irregular8}
                    to="/irregularDetail/5"
                  ></S.Irr8>
                  <S.Irr6
                    img={images.irregular6}
                    to="/irregularDetail/4"
                  ></S.Irr6>
                  <S.Irr5
                    img={images.irregular5}
                    to="/irregularDetail/3"
                  ></S.Irr5>
                  <S.Irr7 img={images.irregular7} to="/main"></S.Irr7>
                </S.IrregularRow1>
                <S.IrregularRow2>
                  <S.Irr9
                    img={images.irregular9}
                    to="/irregularDetail/6"
                  ></S.Irr9>
                  <S.Irr10 img={images.irregular10} to="/main"></S.Irr10>
                  <S.Irr16
                    img={images.irregular16}
                    to="/irregularDetail/10"
                  ></S.Irr16>
                  <S.Irr15
                    img={images.irregular15}
                    to="/irregularDetail/9"
                  ></S.Irr15>
                  <S.Irr14
                    img={images.irregular14}
                    to="/irregularDetail/8"
                  ></S.Irr14>
                  <S.Irr11
                    img={images.irregular11}
                    to="/irregularDetail/7"
                  ></S.Irr11>
                  <S.Irr12 img={images.irregular12} to="/main"></S.Irr12>
                  <S.Irr13 img={images.irregular13} to="/main"></S.Irr13>
                </S.IrregularRow2>
                <S.BottomRow>
                  <S.ClickDiv onClick={() => navigate("/hidden")}></S.ClickDiv>
                  <S.DoorDiv>
                    <S.LeftDoor
                      ref={leftDoorRef}
                      onClick={handleLeftDoor}
                      img={images.leftdoor}
                    ></S.LeftDoor>

                    <S.RightDoor
                      ref={rightDoorRef}
                      onClick={handleRightDoor}
                      img={images.rightdoor}
                    ></S.RightDoor>
                  </S.DoorDiv>
                  <S.TyperLink to="/shoutout" img={images.typer} />
                </S.BottomRow>
              </S.Shelf>
            </S.ShelfDiv>
          </S.BackgroundDiv>
        </>
      </Desktop>
      <Mobile>
        <>
          {isIntro && <Intro />}
          <M.BackgroundDiv img={images.background}>
            <M.ShelfDiv>
              <M.Shelf img={images.shelf}>
                <M.RegularRow>
                  <M.RegularDiv to="/regularDetail/1">
                    <M.LpDiv img={images.lp}></M.LpDiv>
                    <M.RegularCoverDiv
                      img={images.regular1}
                    ></M.RegularCoverDiv>
                  </M.RegularDiv>
                  <M.RegularDiv to="/regularDetail/2">
                    <M.LpDiv img={images.lp}></M.LpDiv>
                    <M.RegularCoverDiv
                      img={images.regular2}
                    ></M.RegularCoverDiv>
                  </M.RegularDiv>
                  <M.RegularDiv to="/regularDetail/3">
                    <M.LpDiv img={images.lp}></M.LpDiv>
                    <M.RegularCoverDiv
                      img={images.regular3}
                    ></M.RegularCoverDiv>
                  </M.RegularDiv>
                </M.RegularRow>
                <M.IrregularRow1>
                  <M.Irr4
                    img={images.irregular4}
                    to="/irregularDetail/2"
                  ></M.Irr4>
                  <M.Irr1
                    img={images.irregular1}
                    to="/irregularDetail/1"
                  ></M.Irr1>
                  <M.Irr2 img={images.irregular2} to="/main"></M.Irr2>
                  <M.Irr3 img={images.irregular3} to="/main"></M.Irr3>
                  <M.Irr8
                    img={images.irregular8}
                    to="/irregularDetail/5"
                  ></M.Irr8>
                  <M.Irr6
                    img={images.irregular6}
                    to="/irregularDetail/4"
                  ></M.Irr6>
                  <M.Irr5
                    img={images.irregular5}
                    to="/irregularDetail/3"
                  ></M.Irr5>
                  <M.Irr7 img={images.irregular7} to="/main"></M.Irr7>
                </M.IrregularRow1>
                <M.IrregularRow2>
                  <M.Irr9
                    img={images.irregular9}
                    to="/irregularDetail/6"
                  ></M.Irr9>
                  <M.Irr10 img={images.irregular10} to="/main"></M.Irr10>
                  <M.Irr16
                    img={images.irregular16}
                    to="/irregularDetail/10"
                  ></M.Irr16>
                  <M.Irr15
                    img={images.irregular15}
                    to="/irregularDetail/9"
                  ></M.Irr15>
                  <M.Irr14
                    img={images.irregular14}
                    to="/irregularDetail/8"
                  ></M.Irr14>
                  <M.Irr11
                    img={images.irregular11}
                    to="/irregularDetail/7"
                  ></M.Irr11>
                  <M.Irr12 img={images.irregular12} to="/main"></M.Irr12>
                  <M.Irr13 img={images.irregular13} to="/main"></M.Irr13>
                </M.IrregularRow2>
                <M.BottomRow>
                  <M.ClickDiv onClick={() => navigate("/hidden")}></M.ClickDiv>
                  <M.DoorDiv>
                    <M.LeftDoor
                      ref={leftDoorRef}
                      onClick={handleLeftDoor}
                      img={images.leftdoor}
                    ></M.LeftDoor>
                    <M.RightDoor
                      ref={rightDoorRef}
                      onClick={handleRightDoor}
                      img={images.rightdoor}
                    ></M.RightDoor>
                  </M.DoorDiv>
                  <M.TyperLink to="/shoutout" img={images.typer} />
                </M.BottomRow>
              </M.Shelf>
            </M.ShelfDiv>
          </M.BackgroundDiv>
        </>
      </Mobile>
      <Tablet>
        <>
          {isIntro && <Intro />}

          <T.BackgroundDiv img={images.background}>
            <T.ShelfDiv>
              <T.Shelf img={images.shelf}>
                <T.RegularRow>
                  <T.RegularDiv to="/regulardetail/1">
                    <T.RegularCoverDiv
                      img={images.regular1}
                    ></T.RegularCoverDiv>
                    <T.LpDiv img={images.lp}></T.LpDiv>
                  </T.RegularDiv>
                  <T.RegularDiv to="/regulardetail/2">
                    <T.RegularCoverDiv
                      img={images.regular2}
                    ></T.RegularCoverDiv>
                    <T.LpDiv img={images.lp}></T.LpDiv>
                  </T.RegularDiv>
                  <T.RegularDiv to="/regulardetail/3">
                    <T.RegularCoverDiv
                      img={images.regular3}
                    ></T.RegularCoverDiv>
                    <T.LpDiv img={images.lp}></T.LpDiv>
                  </T.RegularDiv>
                </T.RegularRow>
                <T.IrregularRow1>
                  <T.Irr4
                    img={images.irregular4}
                    to="/irregularDetail/2"
                  ></T.Irr4>
                  <T.Irr1
                    img={images.irregular1}
                    to="/irregularDetail/1"
                  ></T.Irr1>
                  <T.Irr2 img={images.irregular2} to="/main"></T.Irr2>
                  <T.Irr3 img={images.irregular3} to="/main"></T.Irr3>
                  <T.Irr8
                    img={images.irregular8}
                    to="/irregularDetail/5"
                  ></T.Irr8>
                  <T.Irr6
                    img={images.irregular6}
                    to="/irregularDetail/4"
                  ></T.Irr6>
                  <T.Irr5
                    img={images.irregular5}
                    to="/irregularDetail/3"
                  ></T.Irr5>
                  <T.Irr7 img={images.irregular7} to="/main"></T.Irr7>
                </T.IrregularRow1>
                <T.IrregularRow2>
                  <T.Irr9
                    img={images.irregular9}
                    to="/irregularDetail/6"
                  ></T.Irr9>
                  <T.Irr10 img={images.irregular10} to="/main"></T.Irr10>
                  <T.Irr16
                    img={images.irregular16}
                    to="/irregularDetail/10"
                  ></T.Irr16>
                  <T.Irr15
                    img={images.irregular15}
                    to="/irregularDetail/9"
                  ></T.Irr15>
                  <T.Irr14
                    img={images.irregular14}
                    to="/irregularDetail/8"
                  ></T.Irr14>
                  <T.Irr11
                    img={images.irregular11}
                    to="/irregularDetail/7"
                  ></T.Irr11>
                  <T.Irr12 img={images.irregular12} to="/main"></T.Irr12>
                  <T.Irr13 img={images.irregular13} to="/main"></T.Irr13>
                </T.IrregularRow2>
                <T.BottomRow>
                  <T.ClickDiv onClick={() => navigate("/hidden")}></T.ClickDiv>
                  <T.DoorDiv>
                    <T.LeftDoor
                      ref={leftDoorRef}
                      onClick={handleLeftDoor}
                      img={images.leftdoor}
                    ></T.LeftDoor>
                    <T.RightDoor
                      ref={rightDoorRef}
                      onClick={handleRightDoor}
                      img={images.rightdoor}
                    ></T.RightDoor>
                  </T.DoorDiv>
                  <T.TyperLink to="/shoutout" img={images.typer} />
                </T.BottomRow>
              </T.Shelf>
            </T.ShelfDiv>
          </T.BackgroundDiv>
        </>
      </Tablet>
    </>
  );
}

export default MainPage;
