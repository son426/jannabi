import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const isIntroAtom = atom({
  key: "isIntro",
  default: true,
});
