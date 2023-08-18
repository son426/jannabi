import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./introPage.style";
import {
  IObject,
  fetchImages,
  loadImages,
  objectToArray,
} from "../../hooks/tools";
import main_images from "@/data/images/main";
import regular1_images from "@/data/images/regular1";
import irregular_images from "@/data/images/irregular";
import shoutout_images from "@/data/images/shoutout";
import intro_images from "@/data/images/intro";
import { Default } from "@/components/mediaquery";
import Loading from "@/components/loading";
import { AnimatePresence, motion } from "framer-motion";
import { isIntroAtom } from "@/constants/atom";
import { useRecoilState } from "recoil";
import { getStorage, ref, getDownloadURL, listAll } from "firebase/storage";

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

  // useEffect(() => {
  //   const introImgUrls: string[] = objectToArray(intro_images as IObject);
  //   const mainImgUrls: string[] = objectToArray(main_images as IObject);
  //   const regular1Urls: string[] = objectToArray(regular1_images as IObject);
  //   const regular2Urls: string[] = objectToArray(regular2_images as IObject);
  //   const regular3Urls: string[] = objectToArray(regular3_images as IObject);
  //   const irregularUrls: string[] = objectToArray(irregular_images as IObject);
  //   const shoutoutUrls: string[] = objectToArray(shoutout_images as IObject);

  //   const allImageUrls: string[] = [
  //     ...introImgUrls,
  //     ...mainImgUrls,
  //     ...regular1Urls,
  //     ...regular2Urls,
  //     ...regular3Urls,
  //     ...irregularUrls,
  //     ...shoutoutUrls,
  //   ];

  //   setTotalImages(allImageUrls.length);

  //   // imgPreload(allImageUrls)
  //   //   .then(() => {
  //   //     setIsLoading(false);
  //   //   })
  //   //   .catch((error) => {
  //   //     setIsLoading(false);
  //   //   });
  // }, []);

  useEffect(() => {
    setIsIntro(true);
  }, []);

  return (
    <>
      <S.BlackDiv isclicked={isClicked}></S.BlackDiv>
      <S.ImgWrapper>
        <S.IntroImgDiv
          isclicked={isClicked}
          onClick={handleClick}
        ></S.IntroImgDiv>
      </S.ImgWrapper>
    </>
  );
}

export default IntroPage;
