import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./introPage.style";
import * as M from "./mobile.style";
import {
  IObject,
  fetchImages,
  imgPreload,
  loadImages,
  objectToArray,
} from "../../hooks/tools";
// import main_images from "@/data/images/main";
// import irregular_images from "@/data/images/irregular";
// import intro_images from "@/data/images/intro";
import {
  Default,
  Default2,
  Mobile,
  SmallMobile,
} from "@/components/mediaquery";
import Loading from "@/components/loading";
import { AnimatePresence, motion } from "framer-motion";
import { isIntroAtom } from "@/constants/atom";
import { useRecoilState } from "recoil";
import { getStorage, ref, getDownloadURL, listAll } from "firebase/storage";
import intro_images from "@/data/images/intro";

function IntroPage() {
  const [isClicked, setIsClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [imageFiles, setImageFiles] = useState<string[]>([]);
  const [imageFetched, setImageFetched] = useState<boolean>(false);
  const [startAnimation, setStartAnimation] = useState<boolean>(false);

  const [isIntro, setIsIntro] = useRecoilState(isIntroAtom);

  const navigate = useNavigate();

  const handleClick = () => {
    setIsClicked((prev) => !prev);
    setTimeout(() => {
      navigate("/main", { state: { isIntro: true } });
    }, 1500);
  };

  const setVHVariable = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    console.log(vh);
  };

  useEffect(() => {
    const fetchImageFiles = async () => {
      const fetchedImages = await loadImages("intro");
      setImageFiles(fetchedImages);
      setImageFetched(true);
      await imgPreload(fetchedImages);
    };

    const fetchAllFiles = async () => {
      if (!imageFetched) await fetchImageFiles();
      setIsLoading(false);
      setTimeout(() => {
        setStartAnimation(true);
      }, 1500);
    };
    fetchAllFiles();
  }, []);

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
    setVHVariable();
    window.addEventListener("resize", setVHVariable);
  }, []);

  return (
    <>
      <Loading isloading={isLoading} loadingtext="로딩중입니다" />
      <Default2>
        <>
          <S.BlackDiv isclicked={isClicked}></S.BlackDiv>
          <S.ImgWrapper>
            <S.IntroImgDiv
              startanimation={startAnimation}
              stringvalue={imageFiles[0]}
              isclicked={isClicked}
              onClick={handleClick}
            ></S.IntroImgDiv>
          </S.ImgWrapper>
        </>
      </Default2>
      <SmallMobile>
        <>
          <M.BlackDiv isclicked={isClicked}></M.BlackDiv>
          <M.ImgWrapper>
            <M.IntroImgDiv
              isclicked={isClicked}
              onClick={handleClick}
            ></M.IntroImgDiv>
          </M.ImgWrapper>
        </>
      </SmallMobile>
    </>
  );
}

export default IntroPage;
