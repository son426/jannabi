import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const isIntroAtom = atom({
  key: "isIntro",
  default: true,
});

export const fontSizeAtom = atom({
  key: "fontSize",
  default: "11.6px",
});

export const shelfHeightAtom = atom({
  key: "shelfHeight",
  default: "800px",
});

export const rowWidthAtom = atom({
  key: "rowWidth",
  default: "690px",
});
