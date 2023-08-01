import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./introPage.style";
import { IObject, imgPreload, objectToArray } from "../../hooks/tools";
import main_images from "@/data/images/main";
import regular1_images from "@/data/images/regular1";
import regular3_images from "@/data/images/regular3";
import { Default } from "@/components/mediaquery";

function IntroPage() {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setIsClicked((prev) => !prev);
    setTimeout(() => {
      navigate("/main", { state: { isIntro: true } });
    }, 1500);
  };

  useEffect(() => {
    const mainImgUrls: string[] = objectToArray(main_images as IObject);
    imgPreload(mainImgUrls);

    const regular1Urls: string[] = objectToArray(regular1_images as IObject);
    imgPreload(regular1Urls);

    const regular3Urls: string[] = objectToArray(regular3_images as IObject);
    imgPreload(regular3Urls);
  }, []);

  return (
    <>
      <S.BlackDiv isclicked={isClicked}></S.BlackDiv>
      <S.ImgWrapper>
        <Default>
          <S.FloatingButtonWrapper isclicked={isClicked}>
            <S.FloatingButton>Click !</S.FloatingButton>
            <S.FloatingArrow></S.FloatingArrow>
          </S.FloatingButtonWrapper>
        </Default>
        <S.IntroImageDiv
          isclicked={isClicked}
          onClick={handleClick}
        ></S.IntroImageDiv>
      </S.ImgWrapper>
    </>
  );
}

export default IntroPage;
