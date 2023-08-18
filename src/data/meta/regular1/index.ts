import images from "../../images/regular1";

// db 역할
// 이 파일에다가 더미로 작업해놓고, 후에 db로 옮기자
export interface IRegularData {
  index: number;
  title: string;
  coverImg: string;
  scrollImg: string;
  description: string;
}

export const regularData = [
  {
    index: 1,
    title: "Goodnight (Intro)",
    coverImg: images.r1,
    scrollImg: images.s1,
    description: `고향에서의 지긋지긋한 일상에\n시달리다 상처만 남은 존.\n지친 삶으로부터 도망쳐 온 몽키호텔에서의 첫날밤.\n오지 않는 잠을 청하며 부르는 노래.\n몽키호텔에서 벌어지는 모든 일의\n관찰자가 될 존이 부르는 intro.`,
  },
  {
    index: 2,
    title: "뜨거운 여름밤은 가고\n남은 건 볼품없지만",
    coverImg: images.r2,
    scrollImg: images.s2,
    description: `어디선가 들려오는 노랫소리에 잠에서 깬 존은\n실연을 당했는지 지나간 사랑을 그리는\n웨이트리스 에이미의 노래를 엿듣게 된다.\n다 지난 일이니, 이제는 새로운 사랑을 위해\n마음을 열어두겠다는 다짐의 노래.`,
  },
  {
    index: 3,
    title: "Surprise!",
    coverImg: images.r3,
    scrollImg: images.s3,
    description: `노래하는 에이미를 먼발치에서\n바라보던 벨보이 형제 노엘과 그레이엄.\n형 노엘이 동생에게 에이미와 사랑에 빠진 사실을 고백한다.`,
  },
  {
    index: 4,
    title: "Wish",
    coverImg: images.r4,
    scrollImg: images.s4,
    description: `호텔 레스토랑의 주방장 폴과\n메이드 섬머는 오랜 부부이다.\n악마라고 소문난 지배인의 실체를\n가장 잘 아는 직원이기도 하다.\n매일 밤, 어둠을 무서워하는 섬머를 위해\n시를 지어주는 낭만주의 원숭이 폴의 노래.`,
  },
  {
    index: 5,
    title: "The Secret Of Hard Rock",
    coverImg: images.r5,
    scrollImg: images.s5,
    description: `문을 박차고 한 사내가 등장한다.\n새로운 인간 투숙객, 하드락 시티에서\n도망쳐온 괴짜 락커 알렉스.\n허세 넘치지만 유쾌한 언동으로 호텔 로비의\n분위기 메이커로 등극한다.\n그런 그가 폭로하는 하드락 시티의 비밀.`,
  },
  {
    index: 6,
    title: "HONG KONG",
    coverImg: images.r6,
    scrollImg: images.s6,
    description: `낙천적인 원숭이들, 알렉스의 허무맹랑한\n이야기들이 오랜만에 존을 들뜨게 하였고,\n그런 자신의 모습에 놀란 존은방으로 돌아가\n생각에 잠긴다. 어른들이 쉽게만 던지는 것 같았던\n흔해 빠진 말들도,뭔 말인지 모르겠다며\n집을 뛰쳐나왔던 그 자신도 하나 둘 이해하고\n용서한다.그리고 아버지가 늘 흥얼대던\n촌스런 멜로디를 따라 해본다.`,
  },
  {
    index: 7,
    title: "꿈나라 별나라",
    coverImg: images.r7,
    scrollImg: images.s7,
    description: `노엘이 에이미에게 사랑을 고백하는 장면.\nSurprise!에서 그랬듯이 나름대로 준비한\n말들로 프로포즈를 한다.\n뜨거운 여름밤에 대해 노래하던 어른스러운\n에이미에게, 꿈나라가 어쩌고별나라가\n어쩌고 동요에서나 나올 법 한 말들을 횡설수설..\n그래도 대답은 ‘YES!!!'`,
  },
  {
    index: 8,
    title: "Jungle",
    coverImg: images.r8,
    scrollImg: images.s8,
    description: `동생 벨보이 그레이엄의 귀여운 거짓말.\n형 노엘과 함께 동물원 출신인 것은\n누구나 다 아는 사실임에도,\n자신이 정글에서 왔다며 우겨대는 정글 찬양 송.`,
  },
  {
    index: 9,
    title: "MONKEY HOTEL\n(Finale)",
    coverImg: images.r9,
    scrollImg: images.s9,
    description: `고향으로 돌아가는 존을\n위한 원숭이들의 노래.`,
  },
  {
    index: 10,
    title: "왕눈이 왈츠\n(Bonus track)",
    coverImg: images.r10,
    scrollImg: images.s10,
    description: `나가던 길, 존은 호텔 지하의 바에서부터 들려오는\n우울한 노래 소리에 귀를 기울인다.\n우연히 알게 된 아웃사이더 원숭이 엘리엇의 존재.\n존은 맘 한구석 찜찜한 마음을 담고\n호텔을 나오게 된다.\n다시 돌아올 수 있을까.`,
  },
];
