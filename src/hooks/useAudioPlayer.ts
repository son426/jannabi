import { useEffect, useRef, useState } from "react";

function useAudioPlayer(initialTrack: string) {
  const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(true);
  const [audioProgress, setAudioProgress] = useState<number>(0);

  const audioRef = useRef<HTMLAudioElement>(new Audio());

  const toggleAudio = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsAudioPlaying(true);
    } else {
      audioRef.current.pause();
      setIsAudioPlaying(false);
    }
  };

  const changeAudio = (newFile: string) => {
    setIsAudioPlaying(true);
    if (!audioRef.current.paused) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    audioRef.current = new Audio(newFile);
    audioRef.current.play();
  };

  // totalBar에 onClick으로 걸어놓으면 됨.
  // totalBar 클릭한 곳 기준으로, audioProgress 조정해줌.
  const handleAudioTime = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation(); // 버블링 처리 (toggleAudio 안일어나게)
    const progressBar = event.currentTarget;
    const rect = progressBar.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const progressBarWidth = rect.width;
    const newAudioTime =
      (clickX / progressBarWidth) * audioRef.current.duration;
    audioRef.current.currentTime = newAudioTime;
    setAudioProgress(newAudioTime / audioRef.current.duration);
  };

  const handleAudioTimeByY = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation(); // 버블링 처리 (toggleAudio 안일어나게)
    const progressBar = event.currentTarget;
    const rect = progressBar.getBoundingClientRect();
    const clickY = event.clientY - rect.top;
    const progressBarHeight = rect.height;
    const newAudioTime =
      (1 - clickY / progressBarHeight) * audioRef.current.duration;
    audioRef.current.currentTime = newAudioTime;
    setAudioProgress(newAudioTime / audioRef.current.duration);
  };

  return {
    audioRef,
    toggleAudio,
    handleAudioTime,
    handleAudioTimeByY,
    isAudioPlaying,
    setIsAudioPlaying,
    audioProgress,
    setAudioProgress,
    changeAudio,
  };
}

export default useAudioPlayer;
