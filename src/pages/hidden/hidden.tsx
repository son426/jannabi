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
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    };

    fetchAllFiles();
  }, []);

  return (
    <>
      <Loading isloading={isLoading} loadingtext="사진전" />
      <Default>
        <div
          onClick={() =>
            alert("추후 팬아트 전시관으로 업데이트 될 예정입니다.")
          }
        >
          <S.Background
            stringvalue={imageFiles[imageFiles.length - 1]}
          ></S.Background>
          <S.Pictures stringvalue={imageFiles[1]}></S.Pictures>
        </div>
      </Default>
      <Mobile>
        <div
          style={{ zIndex: "2" }}
          onClick={() =>
            alert("추후 팬아트 전시관으로 업데이트 될 예정입니다.")
          }
        >
          <S.Background
            stringvalue={imageFiles[imageFiles.length - 1]}
          ></S.Background>
          <S.Pictures stringvalue={imageFiles[1]}></S.Pictures>
        </div>
      </Mobile>
    </>
  );
}

export default HiddenPage;
