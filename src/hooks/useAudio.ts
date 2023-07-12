import { useEffect, useRef, useState } from "react";
import { AUDIOFILES } from "../data/data";

export function useAudio() {
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

  return { currentAudioIndex, audioInstances, setCurrentAudioIndex, audioRef };
}
