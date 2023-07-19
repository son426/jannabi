import { useEffect, useRef, useState } from "react";
import { AUDIOFILES } from "../data/data";

// 오디오 파일 여러개.
export function useAudios(audioFiles: string[]) {
  const [currentAudioIndex, setCurrentAudioIndex] = useState(0);
  const [audioInstances, setAudioInstances] = useState<HTMLAudioElement[]>([]);

  const audioRef = useRef<HTMLAudioElement>(new Audio());

  useEffect(() => {
    const loadedAudioInstances = audioFiles.map((audioFile) => {
      const audio = new Audio(audioFile);
      audio.preload = "auto";
      return audio;
    });

    setAudioInstances(loadedAudioInstances);
  }, []);

  return { currentAudioIndex, audioInstances, setCurrentAudioIndex, audioRef };
}
