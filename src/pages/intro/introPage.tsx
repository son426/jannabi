import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./introPage.style";
import { useMediaQuery } from "react-responsive";

function IntroPage() {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setIsClicked((prev) => !prev);
    setTimeout(() => {
      navigate("/main", { state: { isIntro: true } });
    }, 1500);
  };

  return (
    <>
      <S.BlackDiv isclicked={isClicked}></S.BlackDiv>
      <S.ImgWrapper>
        <S.FloatingButtonWrapper isclicked={isClicked}>
          <S.FloatingButton>Click !</S.FloatingButton>
          <S.FloatingArrow></S.FloatingArrow>
        </S.FloatingButtonWrapper>
        <S.IntroImageDiv
          isclicked={isClicked}
          onClick={handleClick}
        ></S.IntroImageDiv>
      </S.ImgWrapper>
    </>
  );
}

export default IntroPage;
