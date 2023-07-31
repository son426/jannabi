import { useEffect, useRef, useState } from "react";

function useAudioPlayer(initialTrack: string) {
  const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(true);
  const [audioProgress, setAudioProgress] = useState<number>(0);

  const audioRef = useRef<HTMLAudioElement>(new Audio(initialTrack));

  const toggleAudio = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsAudioPlaying(true);
    } else {
      audioRef.current.pause();
      setIsAudioPlaying(false);
    }
  };

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

  return {
    audioRef,
    toggleAudio,
    handleAudioTime,
    isAudioPlaying,
    setIsAudioPlaying,
    audioProgress,
    setAudioProgress,
  };
}

export default useAudioPlayer;
