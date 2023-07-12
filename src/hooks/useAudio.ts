import { useEffect, useRef, useState } from "react";
import { AUDIOFILES } from "../data/data";

export function useAudio() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentAudioIndex, setCurrentAudioIndex] = useState(0);
  const [audioInstances, setAudioInstances] = useState<HTMLAudioElement[]>([]);

  const audioRef = useRef<HTMLAudioElement>(new Audio());

  useEffect(() => {
    const loadedAudioInstances = AUDIOFILES.map((audioFile) => {
      const audio = new Audio(audioFile);
      audio.preload = "auto";
      return audio;
    });

    setAudioInstances(loadedAudioInstances);
  }, []);

  useEffect(() => {
    if (audioRef.current.src !== "") {
      // stop
      audioRef.current.pause();
      audioRef.current.currentTime = 0;

      // play
      // audioRef.current = new Audio(AUDIOFILES[currentAudioIndex]);
      audioRef.current = audioInstances[currentAudioIndex];
      if (audioRef.current.paused) {
        audioRef.current.muted = true;
        audioRef.current.play();
        audioRef.current.muted = false;
      }
    }

    return () => {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    };
  }, [currentAudioIndex]);

  return {
    audioRef,
    isPlaying,
    currentAudioIndex,
    setCurrentAudioIndex,
  };
}
