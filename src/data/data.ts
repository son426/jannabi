// db 역할
// 이 파일에다가 더미로 작업해놓고, 후에 db로 옮기자

import silent from "./silence.mp3";
import * as a from "./index";
import * as ir from "./irregular/index";

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
  a.audioFile1, // Goodnight
  a.audioFile2, // 뜨거운 여름밤은 가고 ~
  a.audioFile3, // Surprise!
  a.audioFile4, // Wish
  a.audioFile5, // The Secret Of HardRock
  a.audioFile6, // HONG KONG
  a.audioFile7, // 꿈나라 별나라
  a.audioFile8, // JUNGLE
  a.audioFile9, // MONEKY HOTEL
  a.audioFile10, // 왕눈이 왈츠
];

export const irregularAlbumData = [
  {
    id: 1,
    title: "SHE",
    subtitle: "(Hidden Track No.V 1월 선정곡)",
    meta: "2017.9.9 | 인디뮤직 | 1곡, 3분 14초",
    description: `'She'는 잔나비가 네이버 '히든트랙 넘버V-1월의 주인공'으로 선정돼\n윤종신과 '잠금해제 라이브'라는 주제로 함께 한 V앱 생방송에서 선보인 곡이다.\n네이버 뮤지션리그에 공개한 후 팬들의 열렬한 성원에 힘입어\n정식 음원으로 발표하게 됐다.\n\n유려한 멜로디 라인과 투박한 편곡의 조화, 잔나비의 전매특허인\n드라마틱한 구성이 돋보이는 'She'는\n아름다운 동화 한 편을 읽은 듯\n쉽고 간결한 노랫말로 깊은 여운을 남기는 곡이다.\n\n“우리가 사랑하는 혹은 우리를 사랑해주는\n모든 '그녀'를 위한 노래가 되었으면 좋겠습니다.”`,
    image: ir.she,
    pointColor: "#d24a3e",
    fontColor: "white",
  },
];
