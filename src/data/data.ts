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
    title:
      "사랑하긴 했었나요. 스쳐가는 인연이었나요. 짧지 않은 우리 함께 했던 시간들이 자꾸 내 마음을 가둬두네",
    subtitle: "(Hidden Track No.V 1월 선정곡)",
    meta: "2017.9.9 | 인디뮤직 | 1곡, 3분 14초",
    description: `'She'는 잔나비가 네이버 '히든트랙 넘버V-1월의 주인공'으로 선정돼\n윤종신과 '잠금해제 라이브'라는 주제로 함께 한 V앱 생방송에서 선보인 곡이다.\n네이버 뮤지션리그에 공개한 후 팬들의 열렬한 성원에 힘입어\n정식 음원으로 발표하게 됐다.\n\n유려한 멜로디 라인과 투박한 편곡의 조화, 잔나비의 전매특허인\n드라마틱한 구성이 돋보이는 'She'는\n아름다운 동화 한 편을 읽은 듯\n쉽고 간결한 노랫말로 깊은 여운을 남기는 곡이다.\n\n“우리가 사랑하는 혹은 우리를 사랑해주는\n모든 '그녀'를 위한 노래가 되었으면 좋겠습니다.”`,
    image: ir.she,
    pointColor: "#d24a3e",
    fontColor: "white",
  },
  {
    id: 2,
    title: "로켓트",
    subtitle: "(Hidden Track No.V 1월 선정곡)",
    meta: "2017.9.9 | 인디뮤직 | 1곡, 3분 14초",
    description: `'She'는 잔나비가 네이버 '히든트랙 넘버V-1월의 주인공'으로 선정돼\n윤종신과 '잠금해제 라이브'라는 주제로 함께 한 V앱 생방송에서 선보인 곡이다.\n네이버 뮤지션리그에 공개한 후 팬들의 열렬한 성원에 힘입어\n정식 음원으로 발표하게 됐다.\n\n유려한 멜로디 라인과 투박한 편곡의 조화, 잔나비의 전매특허인\n드라마틱한 구성이 돋보이는 'She'는\n아름다운 동화 한 편을 읽은 듯\n쉽고 간결한 노랫말로 깊은 여운을 남기는 곡이다.\n\n“우리가 사랑하는 혹은 우리를 사랑해주는\n모든 '그녀'를 위한 노래가 되었으면 좋겠습니다.”`,
    image: ir.she,
    pointColor: "#d24a3e",
    fontColor: "white",
  },
  {
    id: 3,
    title: "SHE",
    subtitle: "(Hidden Track No.V 1월 선정곡)",
    meta: "2017.9.9 | 인디뮤직 | 1곡, 3분 14초",
    description: `'She'는 잔나비가 네이버 '히든트랙 넘버V-1월의 주인공'으로 선정돼\n윤종신과 '잠금해제 라이브'라는 주제로 함께 한 V앱 생방송에서 선보인 곡이다.\n네이버 뮤지션리그에 공개한 후 팬들의 열렬한 성원에 힘입어\n정식 음원으로 발표하게 됐다.\n\n유려한 멜로디 라인과 투박한 편곡의 조화, 잔나비의 전매특허인\n드라마틱한 구성이 돋보이는 'She'는\n아름다운 동화 한 편을 읽은 듯\n쉽고 간결한 노랫말로 깊은 여운을 남기는 곡이다.\n\n“우리가 사랑하는 혹은 우리를 사랑해주는\n모든 '그녀'를 위한 노래가 되었으면 좋겠습니다.”`,
    image: ir.she,
    pointColor: "#d24a3e",
    fontColor: "white",
  },
  {
    id: 4,
    title: "See Your Eyes",
    subtitle: "(Hidden Track No.V 1월 선정곡)",
    meta: "2017.9.9 | 인디뮤직 | 1곡, 3분 14초",
    description: `'She'는 잔나비가 네이버 '히든트랙 넘버V-1월의 주인공'으로 선정돼\n윤종신과 '잠금해제 라이브'라는 주제로 함께 한 V앱 생방송에서 선보인 곡이다.\n네이버 뮤지션리그에 공개한 후 팬들의 열렬한 성원에 힘입어\n정식 음원으로 발표하게 됐다.\n\n유려한 멜로디 라인과 투박한 편곡의 조화, 잔나비의 전매특허인\n드라마틱한 구성이 돋보이는 'She'는\n아름다운 동화 한 편을 읽은 듯\n쉽고 간결한 노랫말로 깊은 여운을 남기는 곡이다.\n\n“우리가 사랑하는 혹은 우리를 사랑해주는\n모든 '그녀'를 위한 노래가 되었으면 좋겠습니다.”`,
    image: ir.she,
    pointColor: "#d24a3e",
    fontColor: "white",
  },
  {
    id: 5,
    title: "November Rain",
    subtitle: "(Hidden Track No.V 1월 선정곡)",
    meta: "2017.9.9 | 인디뮤직 | 1곡, 3분 14초",
    description: `'She'는 잔나비가 네이버 '히든트랙 넘버V-1월의 주인공'으로 선정돼\n윤종신과 '잠금해제 라이브'라는 주제로 함께 한 V앱 생방송에서 선보인 곡이다.\n네이버 뮤지션리그에 공개한 후 팬들의 열렬한 성원에 힘입어\n정식 음원으로 발표하게 됐다.\n\n유려한 멜로디 라인과 투박한 편곡의 조화, 잔나비의 전매특허인\n드라마틱한 구성이 돋보이는 'She'는\n아름다운 동화 한 편을 읽은 듯\n쉽고 간결한 노랫말로 깊은 여운을 남기는 곡이다.\n\n“우리가 사랑하는 혹은 우리를 사랑해주는\n모든 '그녀'를 위한 노래가 되었으면 좋겠습니다.”`,
    image: ir.she,
    pointColor: "#d24a3e",
    fontColor: "white",
  },
  {
    id: 6,
    title: "Good Boy Twist",
    meta: "2018.8.13 | 인디뮤직, 락 | 1곡, 3분 3초",
    description: `빠르게 흘러가는 시대의 흐름에 발을 맞추지 못하면 도태가 되어요.\n그건 단지기술과 유행의 문제가 아니더라고요. 지금껏 옳은 것이라 배운,\n그래서 품에 안고 힘차게 뛰었던 모든 가치들이 한순간에 뒤집혀더 이상\n품을 필요도 없는 허상이 되어버린 건 나와 내 친구들만의 이야기는 아니겠죠.\n\n우린 늘 그랬듯 두 눈 질끈 감고 더 뛰어야 할까요? 아님, 우리가 마주한 시대의\n춤을 춰야 할까요?그게 허무의 몸부림이라고 한들 말이에요.\n\n끝끝내 춤을 추지 못할 한 소년의 이야기입니다.`,
    image: ir.goodboy,
    pointColor: "#FFBC00",
    fontColor: "black",
  },
  {
    id: 7,
    title: "봉춤을 추네",
    subtitle: "(Hidden Track No.V 1월 선정곡)",
    meta: "2017.9.9 | 인디뮤직 | 1곡, 3분 14초",
    description: `'She'는 잔나비가 네이버 '히든트랙 넘버V-1월의 주인공'으로 선정돼\n윤종신과 '잠금해제 라이브'라는 주제로 함께 한 V앱 생방송에서 선보인 곡이다.\n네이버 뮤지션리그에 공개한 후 팬들의 열렬한 성원에 힘입어\n정식 음원으로 발표하게 됐다.\n\n유려한 멜로디 라인과 투박한 편곡의 조화, 잔나비의 전매특허인\n드라마틱한 구성이 돋보이는 'She'는\n아름다운 동화 한 편을 읽은 듯\n쉽고 간결한 노랫말로 깊은 여운을 남기는 곡이다.\n\n“우리가 사랑하는 혹은 우리를 사랑해주는\n모든 '그녀'를 위한 노래가 되었으면 좋겠습니다.”`,
    image: ir.she,
    pointColor: "#d24a3e",
    fontColor: "white",
  },
  {
    id: 8,
    title: "pony",
    subtitle: "(Hidden Track No.V 1월 선정곡)",
    meta: "2017.9.9 | 인디뮤직 | 1곡, 3분 14초",
    description: `'She'는 잔나비가 네이버 '히든트랙 넘버V-1월의 주인공'으로 선정돼\n윤종신과 '잠금해제 라이브'라는 주제로 함께 한 V앱 생방송에서 선보인 곡이다.\n네이버 뮤지션리그에 공개한 후 팬들의 열렬한 성원에 힘입어\n정식 음원으로 발표하게 됐다.\n\n유려한 멜로디 라인과 투박한 편곡의 조화, 잔나비의 전매특허인\n드라마틱한 구성이 돋보이는 'She'는\n아름다운 동화 한 편을 읽은 듯\n쉽고 간결한 노랫말로 깊은 여운을 남기는 곡이다.\n\n“우리가 사랑하는 혹은 우리를 사랑해주는\n모든 '그녀'를 위한 노래가 되었으면 좋겠습니다.”`,
    image: ir.she,
    pointColor: "#d24a3e",
    fontColor: "white",
  },
  {
    id: 9,
    title: "잔나비 소곡집II",
    subtitle: "(Hidden Track No.V 1월 선정곡)",
    meta: "2017.9.9 | 인디뮤직 | 1곡, 3분 14초",
    description: `'She'는 잔나비가 네이버 '히든트랙 넘버V-1월의 주인공'으로 선정돼\n윤종신과 '잠금해제 라이브'라는 주제로 함께 한 V앱 생방송에서 선보인 곡이다.\n네이버 뮤지션리그에 공개한 후 팬들의 열렬한 성원에 힘입어\n정식 음원으로 발표하게 됐다.\n\n유려한 멜로디 라인과 투박한 편곡의 조화, 잔나비의 전매특허인\n드라마틱한 구성이 돋보이는 'She'는\n아름다운 동화 한 편을 읽은 듯\n쉽고 간결한 노랫말로 깊은 여운을 남기는 곡이다.\n\n“우리가 사랑하는 혹은 우리를 사랑해주는\n모든 '그녀'를 위한 노래가 되었으면 좋겠습니다.”`,
    image: ir.she,
    pointColor: "#d24a3e",
    fontColor: "white",
  },
  {
    id: 10,
    title: "잔나비 소곡집I",
    subtitle: "(Hidden Track No.V 1월 선정곡)",
    meta: "2017.9.9 | 인디뮤직 | 1곡, 3분 14초",
    description: `'She'는 잔나비가 네이버 '히든트랙 넘버V-1월의 주인공'으로 선정돼\n윤종신과 '잠금해제 라이브'라는 주제로 함께 한 V앱 생방송에서 선보인 곡이다.\n네이버 뮤지션리그에 공개한 후 팬들의 열렬한 성원에 힘입어\n정식 음원으로 발표하게 됐다.\n\n유려한 멜로디 라인과 투박한 편곡의 조화, 잔나비의 전매특허인\n드라마틱한 구성이 돋보이는 'She'는\n아름다운 동화 한 편을 읽은 듯\n쉽고 간결한 노랫말로 깊은 여운을 남기는 곡이다.\n\n“우리가 사랑하는 혹은 우리를 사랑해주는\n모든 '그녀'를 위한 노래가 되었으면 좋겠습니다.”`,
    image: ir.she,
    pointColor: "#d24a3e",
    fontColor: "white",
  },
];
