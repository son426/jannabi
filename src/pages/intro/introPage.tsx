import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./introPage.style";
import { IObject, objectToArray } from "../../hooks/tools";
import main_images from "@/data/images/main";
import regular1_images from "@/data/images/regular1";
import regular2_images from "@/data/images/regular2";
import regular3_images from "@/data/images/regular3";
import irregular_images from "@/data/images/irregular";
import shoutout_images from "@/data/images/shoutout";
import intro_images from "@/data/images/intro";
import { Default } from "@/components/mediaquery";
import Loading from "@/components/loading";
import { AnimatePresence, motion } from "framer-motion";
import { isIntroAtom } from "@/constants/atom";
import { useRecoilState } from "recoil";

function IntroPage() {
  const [isClicked, setIsClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState<number>(0);
  const [totalImages, setTotalImages] = useState<number>(0);

  const [isIntro, setIsIntro] = useRecoilState(isIntroAtom);

  const navigate = useNavigate();

  const handleClick = () => {
    setIsClicked((prev) => !prev);
    setTimeout(() => {
      navigate("/main", { state: { isIntro: true } });
    }, 1500);
  };

  function imgPreload(array: string[]): Promise<void[]> {
    const promises = array.map((url) => {
      return new Promise<void>((resolve, reject) => {
        const img = new Image();
        img.src = url;

        img.onload = () => {
          setLoadedImages((prevLoadedImages) => prevLoadedImages + 1);
          resolve();
        };
        img.onerror = (error) => reject(error);
      });
    });

    return Promise.all(promises);
  }

  useEffect(() => {
    const introImgUrls: string[] = objectToArray(intro_images as IObject);
    const mainImgUrls: string[] = objectToArray(main_images as IObject);
    const regular1Urls: string[] = objectToArray(regular1_images as IObject);
    const regular2Urls: string[] = objectToArray(regular2_images as IObject);
    const regular3Urls: string[] = objectToArray(regular3_images as IObject);
    const irregularUrls: string[] = objectToArray(irregular_images as IObject);
    const shoutoutUrls: string[] = objectToArray(shoutout_images as IObject);

    const allImageUrls: string[] = [
      ...introImgUrls,
      ...mainImgUrls,
      ...regular1Urls,
      ...regular2Urls,
      ...regular3Urls,
      ...irregularUrls,
      ...shoutoutUrls,
    ];

    setTotalImages(allImageUrls.length);

    imgPreload(allImageUrls)
      .then(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    setIsIntro(true);
  }, []);

  if (isLoading)
    return (
      <Loading
        isloading={isLoading}
        loadingpercent={loadedImages / totalImages}
      />
    );

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
