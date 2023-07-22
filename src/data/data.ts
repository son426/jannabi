// db 역할
// 이 파일에다가 더미로 작업해놓고, 후에 db로 옮기자

import silent from "./silence.mp3";
import * as a from "./index";
import * as ir from "./irregular/index";
import { audioFile1, audioFile2 } from "./index";

export const SONGDATA = [
  { index: 1, title: "Goodnight (Intro)" },
  { index: 2, title: "뜨거운 여름밤은 가고 남은 건 볼품없지만" },
  { index: 3, title: "Surprise!" },
  { index: 4, title: "Wish" },
  { index: 5, title: "The Secret Of Hard Rock" },
  { index: 6, title: "HONG KONG" },
  { index: 7, title: "꿈나라 별나라" },
  { index: 8, title: "JUNGLE" },
  { index: 9, title: "MONKEY HOTEL (Finale)" },
  { index: 10, title: "왕눈이 왈츠 (Bonus Track)" },
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
    title: "봉춤을 추네",
    meta: "2014.8.28 | 인디뮤직 | 2곡, 6분 42초",
    description: `2nd 싱글 ‘봉춤을 추네’는 '잔나비'다운 독특한 제목과 긴 제목만큼이나 신선한 스펙트럼을 제시한다. 이제 유쾌한 잔나비들과 흥겨운 봉춤을 출 시간이다.`,
    image: ir.loveme,
    pointColor: "#851E19",
    pointColor2: "#450606",
    fontColor: "white",
    songs: [
      { title: "봉춤을 추네", audioFile: audioFile1, isTitle: true },
      {
        title:
          "사랑하긴 했었나요 스쳐가는 인연이었나요 짧지 않은 우리 함께 했던 시간들이 자꾸 내 마음을 가둬두네",
        audioFile: audioFile2,
        isTitle: false,
      },
    ],
  },
  {
    id: 2,
    title: "로켓트",
    meta: "2014.4.28 | 인디뮤직 | 1곡, 3분 43초",
    description: `92년생 동갑내기 정훈, 도형, 영현이 의기투합하여 만든 실력파 인디밴드. 80회가 넘는 버스킹공연과 70회 이상의 클럽 공연으로 검증된 실력 갖춰 발매전부터 화제를 일으킨 "잔나비"가 첫 음원을 발매했다.`,
    image: ir.rocket,
    pointColor: "#201E21",
    pointColor2: "#CD4881",
    fontColor: "white",
    songs: [{ title: "로켓트", audioFile: audioFile1, isTitle: true }],
  },
  {
    id: 3,
    title: "SHE",
    subtitle: "(Hidden Track No.V 1월 선정곡)",
    meta: "2017.9.9 | 인디뮤직 | 1곡, 3분 14초",
    description: `“우리가 사랑하는 혹은 우리를 사랑해주는 모든 '그녀'를 위한 노래가 되었으면 좋겠습니다.”`,
    image: ir.she,
    pointColor: "#d24a3e",
    pointColor2: "#EAC337",
    fontColor: "white",
    songs: [
      {
        title: "She (Hidden Track No.1월 선정곡)",
        audioFile: audioFile1,
        isTitle: true,
      },
    ],
  },
  {
    id: 4,
    title: "See Your Eyes",
    meta: "2014.12.16 | 발라드, 인디뮤직 | 7곡, 26분 10초",
    description: `타이틀곡 ‘SEE YOUR EYES'는 잘못된 사랑의 방식으로 인해 상처받은 여자에게 바치는 곡으로, 무책임한 행동에 대한 남자의 후회를 음악적으로 표현했다.`,
    image: ir.seeyoureyes,
    pointColor: "#651A5F",
    pointColor2: "#4D92B1",
    fontColor: "white",
    songs: [
      {
        title: "Baby Maybe",
        audioFile: a.audioFile1,
        isTitle: false,
      },
      {
        title: "See Your Eyes",
        audioFile: a.audioFile2,
        isTitle: true,
      },
      {
        title: "너 같아",
        audioFile: a.audioFile3,
        isTitle: false,
      },
      {
        title: "November Rain",
        audioFile: a.audioFile4,
        isTitle: false,
      },
      {
        title: "누구나 겨울이 오면 (With 이기림)",
        audioFile: audioFile1,
        isTitle: false,
      },
      {
        title: "달",
        audioFile: audioFile1,
        isTitle: false,
      },
      {
        title: "See Your Eyes (Acoustic Ver.)",
        audioFile: audioFile1,
        isTitle: false,
      },
    ],
  },
  {
    id: 5,
    title: "November Rain",
    meta: "2017.9.9 | 인디뮤직 | 1곡, 3분 14초",
    description: `November Rain은 동고동락하며 지내온 멤버들의 고등학교 시절 지인의 죽음을 기억하며 만든 곡이다. 그 날 내렸던 11월의 비처럼 차가운 기억들이 곧 눈이 되어서 따스하게 내릴 수 있길 바라는 마음이 담긴 곡이다.`,
    image: ir.november,
    pointColor: "#2B6A71",
    pointColor2: "#F3D207",
    fontColor: "white",
    songs: [
      {
        title: "November Rain",
        audioFile: audioFile1,
        isTitle: true,
      },
      {
        title: "November Rain (Inst.)",
        audioFile: audioFile1,
        isTitle: false,
      },
    ],
  },
  {
    id: 6,
    title: "Good Boy Twist",
    meta: "2018.8.13 | 인디뮤직, 락 | 1곡, 3분 3초",
    description: `우린 늘 그랬듯 두 눈 질끈 감고 더 뛰어야 할까요? 아님, 우리가 마주한 시대의 춤을 춰야 할까요? 그게 허무의 몸부림이라고 한들 말이에요. 끝끝내 춤을 추지 못할 한 소년의 이야기입니다.`,
    image: ir.goodboy,
    pointColor: "#ffbc00",
    pointColor2: "#c73600",
    fontColor: "black",
    songs: [
      {
        title: "Good Boy Twist ",
        audioFile: audioFile1,
        isTitle: true,
      },
    ],
  },
  {
    id: 7,
    title: "한밤의 뮤직",
    meta: "2021.10.29 | 인디뮤직, 포크 | 1곡, 3분 23초",
    description: `록의 영광이 깃든 마음으로 트리뷰트 하게 되었습니다. 이 노래 '한밤의 뮤직'은 노브레인, 그리고 그들의 어린 시절을 울려준 수많은 록음악들에게 바칩니다.`,
    image: ir.night,
    pointColor: "#851E19",
    pointColor2: "#450606",
    fontColor: "white",
    songs: [
      {
        title: "한밤의 뮤직",
        audioFile: audioFile1,
        isTitle: true,
      },
    ],
  },
  {
    id: 8,
    title: "pony",
    meta: "2023.6.21 | 인디뮤직, 락 | 2곡, 5분 56초",
    description: `어릴 적, 엄마 차에서는 늘 엄마의 호시절 음악들이 울려 퍼졌어요. 그 시간들을 떠올리며 부를 수 있는 노래를 쓰고 싶었어요.`,
    image: ir.pony,
    pointColor: "#7C312B",
    pointColor2: "#939067",
    fontColor: "white",
    songs: [
      {
        title: "pony",
        audioFile: audioFile1,
        isTitle: true,
      },
      {
        title: "pony (sketch ver.)",
        audioFile: audioFile2,
        isTitle: false,
      },
    ],
  },
  {
    id: 9,
    title: "잔나비 소곡집II",
    subtitle: ": 초록을거머쥔우리는",
    meta: "2022.5.10 | 인디뮤직, 락 | 4곡, 13분 49초",
    description: `집에서, 오후에, 주로 창밖을 바라보면서 만든 곡들이에요. 산뜻하고 기분 좋은 앨범을 만들어 보고 싶었어요.`,
    image: ir.small2,
    pointColor: "#4D834D",
    pointColor2: "#A4CC80",
    fontColor: "white",
    songs: [
      {
        title: "레이디버드",
        audioFile: audioFile1,
        isTitle: false,
      },
      {
        title: "초록을거머쥔우리는",
        audioFile: audioFile2,
        isTitle: true,
      },
      {
        title: "여름가을겨울 봄.",
        audioFile: audioFile2,
        isTitle: false,
      },
      {
        title: "슬픔이여안녕",
        audioFile: audioFile2,
        isTitle: false,
      },
    ],
  },
  {
    id: 10,
    title: "잔나비 소곡집I",
    meta: "2020.11.6 | 인디뮤직 락5곡 | 15분 45초",
    description: `그다지 진취적이지도 특별나지도 않은 머물러있던 그대로. 그동안 보여드렸던 잔나비의 음악 그대로를 담아보았습니다. 그리운 것들 마음껏 주워 담을 수 있는 그릇 같은 곡들이에요.`,
    image: ir.small1,
    pointColor: "#2462AB",
    pointColor2: "#E7DF7C",
    fontColor: "white",
    songs: [
      {
        title: "가을밤에 든 생각",
        audioFile: audioFile1,
        isTitle: true,
      },
      {
        title: "한걸음",
        audioFile: audioFile2,
        isTitle: false,
      },
      {
        title: "그 밤 그 밤",
        audioFile: audioFile1,
        isTitle: false,
      },
      {
        title: "늙은 개",
        audioFile: audioFile2,
        isTitle: false,
      },
      {
        title: "작전명 청-춘!",
        audioFile: audioFile2,
        isTitle: false,
      },
    ],
  },
];
