import { useEffect, useState } from "react";
import * as S from "./hidden.style";
import { loadAudios, loadImages } from "@/hooks/tools";
import Loading from "@/components/loading";
import { Default, Mobile } from "@/components/mediaquery";

function HiddenPage() {
  const [audioFiles, setAudioFiles] = useState<string[]>([]);
  const [audioFetched, setAudioFetched] = useState<boolean>(false);
  const [imageFiles, setImageFiles] = useState<string[]>([]);
  const [imageFetched, setImageFetched] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchImageFiles = async () => {
      const fetchedImages = await loadImages("hidden");
      setImageFiles(fetchedImages);
      setImageFetched(true);
    };

    const fetchAllFiles = async () => {
      await fetchImageFiles();
      setIsLoading(false);
    };

    fetchAllFiles();
  }, []);

  return (
    <>
      <Loading isloading={isLoading} loadingtext="로딩중" />
      <Default>
        <>
          <S.Background
            stringvalue={imageFiles[imageFiles.length - 1]}
          ></S.Background>
          <S.Pictures stringvalue={imageFiles[1]}></S.Pictures>
        </>
      </Default>
      <Mobile>
        <>
          <S.Background
            stringvalue={imageFiles[imageFiles.length - 1]}
          ></S.Background>
          <S.Pictures stringvalue={imageFiles[1]}></S.Pictures>
        </>
      </Mobile>
    </>
  );
}

export default HiddenPage;
