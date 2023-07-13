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

export const irregularAlbumData = [
  {
    id: 1,
    title: "잔나비 소곡집",
    lyrics:
      "머나먼 별빛 저 별에서도\n노랠 부르는 사랑 살겠지\n밤이면 오손도손 그리운 것들 모아서\n노랠 지어 부르겠지\n\n새까만 밤하늘을 수놓은 별빛마저\n불어오는 바람 따라가고\n보고픈 그대 생각 짙어져 가는\n시월의 아름다운 이 밤에",
    fontColor: "#2760ad",
    backgroundColor: "#f6f6ee",
    img: "https://newsimg.hankookilbo.com/cms/articlerelease/2020/11/05/37a3b6c5-9c73-4f33-a549-f7402201efc5.png",
  },
  {
    id: 2,
    title: "로켓트",
    lyrics:
      "give me some love\n어색한 우리사이\n하나의 해답\nlove love\n\n말로 하긴 낯 뜨거운\n여전히 이른듯한\n우리의 춤사위\nlove love",
    fontColor: "#BCB8B7",
    backgroundColor: "#121212",
    img: "https://i.namu.wiki/i/M9R5Yu9XJanGTu9EangEppwOX9AgTzOT5dIDidvJzaBzzM3U2w_7GkqvHKhww3yF_jg763OO5yTZCc6NycHlOQ.webp",
  },
];
