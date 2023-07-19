import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./introPage.style";

function IntroPage() {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <S.BlackDiv isclicked={isClicked}></S.BlackDiv>
      <S.ImgWrapper>
        {/* <S.FloatingButtonWrapper>
          <S.FloatingButton>클릭해서 입장</S.FloatingButton>
          <S.FloatingArrow></S.FloatingArrow>
        </S.FloatingButtonWrapper> */}
        <S.IntroImageDiv
          isclicked={isClicked}
          onClick={() => {
            setIsClicked((prev) => !prev);
            setTimeout(() => {
              navigate("/main", { state: { isIntro: true } });
            }, 1500);
          }}
        ></S.IntroImageDiv>
      </S.ImgWrapper>
    </>
  );
}

export default IntroPage;
