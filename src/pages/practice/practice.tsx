import { useState, useRef, useEffect } from "react";
import audioFile1 from "../../data/audio.mp3";
import audioFile2 from "../../data/surprise.mp3";
import { TestDiv } from "./practice.style";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { AUDIOFILES } from "../../data/data";

// audio

function Practice() {
  const [myAudio, setMyAudio] = useState(new Audio());
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentAudioIndex, setCurrentAudioIndex] = useState(0);

  const togglePlay = () => {
    if (isPlaying) {
      myAudio.pause();
    } else {
      myAudio.play();
    }
    setIsPlaying((prev) => !prev);
  };

  const playNextAudio = () => {
    const nextIndex = (currentAudioIndex + 1) % AUDIOFILES.length;
    setCurrentAudioIndex(nextIndex);
    // audio
    myAudio.src = AUDIOFILES[nextIndex];
    myAudio.play();
    setIsPlaying(true);
  };

  // 첫 렌더링시에, 1번파일로 세팅
  useEffect(() => {
    setMyAudio(new Audio(AUDIOFILES[0]));
  }, []);

  return (
    <TestDiv>
      <div>1번 콘텐츠</div>
      <div>2번 콘텐츠</div>

      <button onClick={togglePlay}>{isPlaying ? "중지" : "재생"}</button>
      <button onClick={playNextAudio}>다음 음악</button>
    </TestDiv>
  );
}

export default Practice;

// // 이벤트 감지 관련
// // 스크롤 감지 관련
// function Practice() {
//   const target1 = useRef<HTMLDivElement>(null);
//   const target2 = useRef<HTMLDivElement>(null);

//   const 콜백함수 = (entries: any, observer: any) => {
//     entries.forEach((entry: any) => {
//       if (entry.isIntersecting) {
//         // 타겟이 관찰될 때 실행코드
//         console.log(entry.target);
//       }
//     });
//   };

//   useEffect(() => {
//     const observer = new IntersectionObserver(콜백함수, {
//       threshold: 0.75,
//     });
//     if (target1.current) observer.observe(target1.current);
//     if (target2.current) observer.observe(target2.current);
//   }, []);

//   return (
//     <div style={{ height: "200vh" }}>
//       <div style={{ height: "90vh", border: "1px solid black" }} ref={target1}>
//         1번
//       </div>
//       <div style={{ height: "90vh", border: "1px solid black" }} ref={target2}>
//         2번
//       </div>
//     </div>
//   );
// }

// export default Practice;
