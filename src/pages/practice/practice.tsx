import { useState, useRef, useEffect } from "react";
import audioFile from "../../data/audio.mp3";
import { TestDiv } from "./practice.style";

function Practice() {
  //   const [myAudio] = useState(new Audio(audioFile));
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying((prev) => !prev);
  };

  //   useEffect(() => {
  //     window.addEventListener("scroll", togglePlay);
  //     return window.removeEventListener("scroll", togglePlay);
  //   }, []);

  return (
    <TestDiv>
      <iframe
        src="../../data/silence.mp3"
        allow="autoplay"
        style={{ display: "none" }}
      ></iframe>
      <audio autoPlay={true} src={audioFile} ref={audioRef} />

      <button onClick={togglePlay}>{isPlaying ? "중지" : "재생"}</button>
    </TestDiv>
  );
}

export default Practice;
