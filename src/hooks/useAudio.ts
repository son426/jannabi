import { useEffect, useRef, useState } from "react";

export function useAudio(audioFile: string) {
  const audioRef = useRef<HTMLAudioElement>(new Audio(audioFile as string));

  const audioPlay = () => {
    audioRef.current.load();
    audioRef.current.play();
  };

  const audioStop = () => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  };

  useEffect(() => {
    return () => {
      audioStop();
    };
  }, []);

  return { audioPlay, audioStop, audioRef };
}
