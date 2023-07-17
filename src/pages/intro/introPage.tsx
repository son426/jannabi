import { useState, useEffect } from "react";
import * as S from "./introPage.style";

function IntroPage() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <S.BlackDiv isclicked={isClicked}></S.BlackDiv>
      <S.ImgWrapper>
        <S.Img
          isclicked={isClicked}
          src="images/intro.jpg"
          onClick={() => {
            setIsClicked((prev) => !prev);
            setTimeout(() => {
              window.location.href = "/main";
            }, 1500);
          }}
        />
      </S.ImgWrapper>
    </>
  );
}

export default IntroPage;
