// db 역할
// 이 파일에다가 더미로 작업해놓고, 후에 db로 옮기자

import silent from "./silence.mp3";
import audioFile1 from "./regular1/Goodnight.mp3";
import audioFile2 from "./regular1/HotSummer.mp3";
import audioFile3 from "./regular1/Surprise.mp3";
import audioFile4 from "./regular1/Wish.mp3";
import audioFile5 from "./regular1/TheSecretOfHardRock.mp3";
import audioFile6 from "./regular1/HongKong.mp3";
import audioFile7 from "./regular1/Tellme.mp3";
import audioFile8 from "./regular1/jungle.mp3";
import audioFile9 from "./regular1/monkeyHotel.mp3";
import audioFile10 from "./regular1/bonus.mp3";

export const SONGDATA = [
  { index: 1, title: "Goodnight\n(Intro)" },
  { index: 2, title: "뜨거운 여름밤은 가고\n남은 건 볼품없지만" },
  { index: 3, title: "Surprise!" },
  { index: 4, title: "Wish" },
  { index: 5, title: "The Secret Of\nHard Rock" },
  { index: 6, title: "HONG KONG" },
  { index: 7, title: "꿈나라 별나라" },
  { index: 8, title: "JUNGLE" },
  { index: 9, title: "MONKEY HOTEL\n(Finale)" },
  { index: 10, title: "왕눈이 왈츠\n(Bonus Track)" },
];

export const AUDIOFILES = [
  audioFile1, // Goodnight
  audioFile2, // 뜨거운 여름밤은 가고 ~
  audioFile3, // Surprise!
  audioFile4, // Wish
  audioFile5, // The Secret Of HardRock
  audioFile6, // HONG KONG
  audioFile7, // 꿈나라 별나라
  audioFile8, // JUNGLE
  audioFile9, // MONEKY HOTEL
  audioFile10, // 왕눈이 왈츠
];
