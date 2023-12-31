// db 역할
// 이 파일에다가 더미로 작업해놓고, 후에 db로 옮기자
export interface ILyric {
  content: string;
  startTime: number;
}

export interface IRegularData {
  index: number;
  title: string;
  engTitle: string;
  playTime: string;
  lyrics?: string;
  lyricData: ILyric[];
}

export const regularData2 = [
  {
    index: 1,
    title: "나의 기쁨 나의 노래 (Intro)",
    engTitle: "Good Good Night (Intro)",
    playTime: "3:36",
    lyricData: [
      { content: "별 볼 일 없는 섭섭한 밤도 있어요", startTime: 7 },
      { content: "오늘도 그런 밤이었죠", startTime: 15 },
      { content: "창을 열고 세상 모든 슬픔들에게", startTime: 21.5 },
      { content: "손짓을 하던 밤", startTime: 29 },
      { content: "노래가 되고 시가 될 수 있을 만큼", startTime: 39 },
      { content: "그만큼만 내게 오길", startTime: 47 },
      { content: "뒤척이다 잠 못 들던 밤이 있는 한", startTime: 53.5 },
      { content: "닿을 수 있어요", startTime: 61.8 },
      { content: "나의 기쁨", startTime: 69 },
      { content: "나의 노래되어 날아가", startTime: 76 },
      { content: "거리를 나뒹구는 쉬운 마음 되어라", startTime: 84 },
      { content: "이 삐걱이는 잠자리가 나는 좋아요", startTime: 105.5 },
      { content: "제 맘을 알 수 있나요", startTime: 113.5 },
      { content: "버려지지 않고서는 가질 수 없는", startTime: 120 },
      { content: "마음이 있어요", startTime: 128 },
      { content: "나의 기쁨", startTime: 136 },
      { content: "나의 노래되어 날아가", startTime: 142 },
      { content: "거리를 헤집으며 텅빈 눈과 헛된 맘과", startTime: 150 },
      { content: "또다시 싸워 이길 나의 기쁨 나의 노래야", startTime: 166 },
      { content: "거리를 나뒹구는 쉬운 마음 되어라", startTime: 181.5 },
    ],
  },
  {
    index: 2,
    title: "투게더!",
    engTitle: "TOGETHER!",
    playTime: "3:06",
    lyricData: [
      { content: "몇 달은 품던 그 말로", startTime: 16 },
      { content: "멋진 옷을 지어 입곤", startTime: 20 },
      { content: "텅 빈 방에 누워", startTime: 23 },
      { content: "또 잠이나 잤지", startTime: 26 },
      { content: "이름도 모르는 꽃에", startTime: 31.5 },
      { content: "내 멋대로 붙여본 꽃말", startTime: 35 },
      { content: "손대지 말아요", startTime: 38.5 },
      { content: "그저 눈으로만 바라봐요", startTime: 41.5 },
      { content: "나는 너의 음악이고", startTime: 46 },
      { content: "그런 마음 한 줄이야", startTime: 49.5 },
      { content: "때가 되면 네 마음에", startTime: 54 },
      { content: "시퍼렇게 남을거야", startTime: 57 },
      { content: "오 기다림은 저 별의 빛", startTime: 61 },
      { content: "우주를 건너는 달음", startTime: 66 },
      { content: "너에게 하고픈 말은", startTime: 77 },
      { content: "하루에 딱 반 씩 접어", startTime: 81 },
      { content: "몇 밤 더 지새우면", startTime: 84.5 },
      { content: "달까지도 간대", startTime: 86.5 },
      { content: "천 번을 접어야지만", startTime: 92.5 },
      { content: "학이 되는 슬픈 사연", startTime: 96.5 },
      { content: "천둥 같은 한숨", startTime: 100 },
      { content: "타면 너의 곁에 닿으려나", startTime: 102.5 },
      { content: "나는 너의 음악이고", startTime: 107 },
      { content: "그런 마음 한 줄이야", startTime: 110.5 },
      { content: "때가 되면 네 귓 볼에", startTime: 115 },
      { content: "찬란히 매달릴 거야", startTime: 118.5 },
      { content: "오 기다림은 저 별의 빛", startTime: 122.5 },
      { content: "우주를 건너는 달음", startTime: 127 },
      { content: "오 기다림은 저 별의 빛", startTime: 137 },
      { content: "오 입맞춤은 아득한 꿈", startTime: 142 },
      { content: "머나먼 우주를 건너", startTime: 145.5 },
      { content: "너는 나의 메아리고", startTime: 149 },
      { content: "그런 마음 한 줌이야", startTime: 152 },
      { content: "때가 되면 내 마음에", startTime: 157 },
      { content: "축제처럼 열릴 거야", startTime: 160 },
      { content: "오 기다림은 저 별의 빛", startTime: 164.5 },
      { content: "우주를 건너온 그 한 달음", startTime: 169 },
    ],
  },
  {
    index: 3,
    title: "조이풀 조이풀",
    engTitle: "joyful joyful",
    playTime: "4:03",
    lyricData: [
      { content: "오늘도 염치없는 이 아침은", startTime: 0 },
      { content: "아무 일 없었다는 듯 날 약 올려", startTime: 10 },
      { content: "한바탕 욕을 퍼붓고", startTime: 17 },
      { content: "또 드리운 장막", startTime: 21.2 },
      { content: "보란 듯 펴 보았던 기지개는", startTime: 29 },
      { content: "저녁이 오니 그저 부끄러울 뿐", startTime: 36.5 },
      { content: "주워 담듯 움츠리고", startTime: 43.5 },
      { content: "또 드리운 장막", startTime: 48 },
      { content: "차라리 영원한 새벽을", startTime: 51.2 },
      { content: "나의 기도", startTime: 58 },
      { content: "내일도 아무렇지 않게 떠오를", startTime: 61 },
      { content: "희망 비웃을 힘을 주소서", startTime: 66.5 },
      { content: "해가 지는 곳 따라 걷다 보면", startTime: 74 },
      { content: "그게 내 기쁨이어라", startTime: 82 },
      { content: "참았던 말들을 쏟아 내면은", startTime: 109 },
      { content: "장엄하고 시끄러울 게 뻔해", startTime: 116.5 },
      { content: "구경거리만 될 뿐야", startTime: 124 },
      { content: "난 또 다시 침묵", startTime: 128 },
      { content: "차라리 영원한 새벽을", startTime: 131 },
      { content: "나의 기도", startTime: 138 },
      { content: "내일도 아무렇지 않게 떠오를", startTime: 141 },
      { content: "희망 비웃을 힘을 주소서", startTime: 146.5 },
      { content: "해가 지는 곳 따라 걷다 보면", startTime: 154 },
      { content: "그게 내 기쁨이어라", startTime: 162 },
      { content: "기도", startTime: 184 },
      { content: "내일도 아무렇지 않게 떠오를", startTime: 187 },
      { content: "희망 비웃을 힘을 주소서", startTime: 192 },
      { content: "해가 지는 곳 따라 걷다 보면", startTime: 200 },
      { content: "그게 내 기쁨이어라", startTime: 228 },
    ],
  },
  {
    index: 4,
    title: "거울",
    engTitle: "mirror",
    playTime: "3:20",
    lyricData: [
      { content: "얼룩진 얼굴로 심통이 나서는", startTime: 22 },
      { content: "웬 못된 어른이 우두커니 날 꼬나봐요", startTime: 30 },
      { content: "어쩔 줄 몰라서 씩 웃어 주면요", startTime: 39 },
      { content: "그게 또 제 맘에 들었는지", startTime: 47.5 },
      { content: "따라 웃대요", startTime: 51 },
      { content: "어울려 놀 만한 친구를 찾아봐요", startTime: 57 },
      { content: "혼자선 더 이상 견딜 수 없을 거야", startTime: 61 },
      { content: "해 밝은 얼굴로 기대에 차서는", startTime: 92 },
      { content: "덜떨어진 어린애 하나가 또 날 바라봐요", startTime: 99.5 },
      { content: "해 줄 게 없단다 다그쳐 보면요", startTime: 109 },
      { content: "그게 또 얼마나 싫었는지", startTime: 117 },
      { content: "그새 심통이 나요", startTime: 121 },
      { content: "어울려 놀 만한 친구를 찾아보렴", startTime: 126.5 },
      { content: "혼자선 더 이상 견딜 수 없을 거야", startTime: 131 },
    ],
  },
  {
    index: 5,
    title: "우리 애는요",
    engTitle: "about a boy ",
    playTime: "2:39",
    lyricData: [
      { content: "어린애야 아직도 난", startTime: 0 },
      { content: "나사 빠진 애처럼", startTime: 2.5 },
      { content: "구는 게 재밌어", startTime: 5 },
      { content: "누가 뭐라 하면 그게 더 좋아", startTime: 9.5 },
      { content: "어버버버 더듬더듬", startTime: 17 },
      { content: "내 말도 천재 같고 멋이 있어", startTime: 19 },
      { content: "고치지 않을 거야", startTime: 25 },
      { content: "조금 답답해도 참아야 해", startTime: 28 },
      { content: "우리 애는요", startTime: 33 },
      { content: "관심이 필요한 아이예요", startTime: 35.5 },
      { content: "덜떨어져 보여도 알고 보면", startTime: 40 },
      { content: "멋진 애예요", startTime: 43 },
      { content: "불안불안 껌뻑껌뻑", startTime: 46.5 },
      { content: "내 눈도 불쌍해 보이고 좋아", startTime: 48.2 },
      { content: "걱정이 많아 그래", startTime: 54.3 },
      { content: "나를 사랑으로 보듬어줘", startTime: 57.5 },
      { content: "우리 애는요", startTime: 63 },
      { content: "사랑이 필요한 아이예요", startTime: 65 },
      { content: "덜떨어져 보여도 알고 보면", startTime: 69 },
      { content: "멋진 애예요.", startTime: 72 },
      { content: "멍청한 장난처럼", startTime: 89 },
      { content: "짓궂은 농담처럼", startTime: 93 },
      { content: "내 친구가 되어줘", startTime: 97.5 },
      { content: "늘 나를 향해 서 줘", startTime: 99 },
      { content: "곁에 있어줘", startTime: 102 },
      { content: "비겁한 변명처럼", startTime: 105 },
      { content: "어설픈 핑계처럼", startTime: 109 },
      { content: "나의 편이 되어줘", startTime: 113 },
      { content: "늘 나의 뒤에 서 줘", startTime: 115 },
      { content: "곁에 있어줘", startTime: 117.5 },
      { content: "내 친구가 되어줘", startTime: 121 },
      { content: "늘 나를 향해 서 줘", startTime: 122.5 },
      { content: "내 곁에 있어줘", startTime: 125 },
    ],
  },
  {
    index: 6,
    title: "DOLMARO",
    engTitle: "DOLMARO",
    playTime: "3:54",
    lyricData: [
      { content: "늦었어 이제 집에 가야 해", startTime: 4 },
      { content: "엄마가 뭐라 그런단말이야", startTime: 11 },
      { content: "방황하다 멈춰 설 멋진 집이 있던 곳", startTime: 18 },
      { content: "영원히 기다리고 있어요", startTime: 26 },
      { content: "사랑해줘 사랑을 해줘", startTime: 33.5 },
      { content: "엉엉 울던 그 애가", startTime: 42 },
      { content: "전설 속 동물처럼", startTime: 48 },
      { content: "숨죽여 잠을 자는 곳", startTime: 52 },
      { content: "날 꺼내 줘 제발 여긴 너무도 답답한 곳", startTime: 56 },
      { content: "언젠가 내가 잊혀진다면", startTime: 62 },
      { content: "돌마로 이곳으로 오세요", startTime: 69.5 },
      { content: "깜찍하지 만은 않던 작은 내가 사는 곳", startTime: 76 },
      { content: "영원히 기다리고 있어요", startTime: 84.5 },
      { content: "사랑해줘 사랑을 해줘", startTime: 117 },
      { content: "엉엉 울던 그 애가", startTime: 125 },
      { content: "전설 속 동물처럼", startTime: 132 },
      { content: "숨죽여 잠을 자는 곳", startTime: 135.5 },
      {
        content: "날 꺼내 줘 제발 여긴 너무도 답답한 곳언젠가 내가 잊혀진다면",
        startTime: 139.5,
      },
      { content: "돌마로 이곳으로 오세요", startTime: 153 },
      { content: "풋풋하지 만은 않던 옛 사랑이 사는 곳", startTime: 159.5 },
      { content: "영원히 기다리고 있어요", startTime: 168 },
    ],
  },
  {
    index: 7,
    title: "전설",
    engTitle: "Legend",
    playTime: "3:47",
    lyricData: [
      { content: `전설`, startTime: 3 },
      { content: `그 푸르른 눈동자에 날 태워줘`, startTime: 8 },
      { content: `내 방황을 멈추어 줘 하루빨리`, startTime: 14.5 },
      { content: `날 데려가 줘`, startTime: 22 },
      { content: `번쩍`, startTime: 30 },
      { content: `내 최후의 발악이야`, startTime: 34.7 },
      { content: `불꽃놀이, 그 마지막 순간이야`, startTime: 40 },
      { content: `남김없이 불태워야 해`, startTime: 45 },
      { content: `그댄 나를`, startTime: 53 },
      { content: `사랑이라 불러 주오`, startTime: 54.5 },
      { content: `그리되어 드리리 오늘 밤`, startTime: 62 },
      { content: `나 그대의 품에 안겨서`, startTime: 68 },
      { content: `입을 맞추고`, startTime: 73 },
      { content: `rock n' roll save my life.`, startTime: 77.5 },
      { content: `함락`, startTime: 110 },
      { content: `남겨진 마음끼리`, startTime: 115 },
      { content: `피 흘리고, 또 할퀴고 깨물어서`, startTime: 120 },
      { content: `더는 더는 찾을 이 없대도`, startTime: 124.5 },
      { content: `그댄 나를`, startTime: 133 },
      { content: `사랑이라 불러 주오`, startTime: 135 },
      { content: `그리되어 드리리 오늘 밤`, startTime: 141.5 },
      { content: `나 그대의 품에 안겨서`, startTime: 148 },
      { content: `입을 맞추고`, startTime: 153 },
      { content: `rock n' roll save my life.`, startTime: 157 },
      { content: `Save my life`, startTime: 161.5 },
      { content: `날 그대의 품에 안아줘`, startTime: 175 },
      { content: `입을 맞춰줘`, startTime: 180 },
      { content: `품에 안겨서`, startTime: 203 },
      { content: `입을 맞추고`, startTime: 207 },
      { content: `rock n' roll`, startTime: 210.5 },
      { content: `wave your flag`, startTime: 215 },
    ],
  },
  {
    index: 8,
    title: "주저하는 연인들을 위해",
    engTitle: "for lovers who hesitate",
    playTime: "4:25",
    lyricData: [
      { content: "나는 읽기 쉬운 마음이야", startTime: 7 },
      { content: "당신도 스윽 훑고 가셔요", startTime: 13 },
      { content: "달랠 길 없는 외로운 마음 있지 머물다 가셔요", startTime: 20 },
      { content: "음 내게 긴 여운을 남겨줘요", startTime: 33 },
      { content: "사랑을 사랑을 해줘요", startTime: 39 },
      { content: "할 수 있다면 그럴 수만 있다면", startTime: 46 },
      { content: "새하얀 빛으로 그댈 비춰 줄게요", startTime: 52 },
      { content: "그러다 밤이 찾아오면", startTime: 57.5 },
      { content: "우리 둘만의 비밀을 새겨요", startTime: 65 },
      { content: "추억할 그 밤 위에 갈피를 꽂고선", startTime: 71.6 },
      { content: "남몰래 펼쳐보아요", startTime: 78.4 },
      { content: "나의 자라나는 마음을 못 본채", startTime: 98 },
      { content: "꺾어 버릴 수는 없네", startTime: 106 },
      { content: "미련 남길바엔 그리워 아픈 게 나아", startTime: 111 },
      { content: "서둘러 안겨본 그 품은 따스할 테니", startTime: 117 },
      { content: "그러다 밤이 찾아오면", startTime: 122.5 },
      { content: "우리 둘만의 비밀을 새겨요", startTime: 130 },
      { content: "추억할 그 밤 위에 갈피를 꽂고선", startTime: 136.2 },
      { content: "남몰래 펼쳐보아요", startTime: 143 },
      { content: "언젠가 또 그날이 온대도", startTime: 148.5 },
      { content: "우린 서둘러 뒤돌지 말아요", startTime: 155.5 },
      { content: "마주보던 그대로 뒷걸음치면서", startTime: 162.5 },
      { content: "서로의 안녕을 보아요", startTime: 171 },
      { content: "피고 지는 마음을 알아요", startTime: 200 },
      { content: "다시 돌아온 계절도", startTime: 206.5 },
      { content: "난 한 동안 새 활짝 피었다 질래", startTime: 213 },
      { content: "또 한번 영원히 그럼에도 내 사랑은", startTime: 220.5 },
      { content: "또 같은 꿈을 꾸고", startTime: 234 },
      { content: "그럼에도 꾸던 꿈을 미루진 않을래", startTime: 243 },
    ],
  },
  {
    index: 9,
    title: "신나는 잠",
    engTitle: "geum ui hwan hyang",
    playTime: "3:42",
    lyricData: [
      { content: "밤의 파수꾼", startTime: 0 },
      { content: "오 그대여 내게로 와주오", startTime: 2 },
      { content: "노랠 부르며", startTime: 5.5 },
      { content: "은밀하게 포근히 와주오", startTime: 7.5 },
      { content: "비단옷을 입고", startTime: 11 },
      { content: "돌아온 고향 나의 침대여", startTime: 12.5 },
      { content: "손을 들어 환영해주오", startTime: 16.5 },
      { content: "잠들자 포근한 잠", startTime: 21 },
      { content: "이불을 턱 끝까지 차올리면서", startTime: 33 },
      { content: "내쉬는 고귀한 한숨이 있는 곳", startTime: 38.5 },
      { content: "잠들자", startTime: 47 },
      { content: "밤의 목자여", startTime: 53 },
      { content: "이 밤에도 쉴 틈이 없구려", startTime: 55 },
      { content: "잠시 쉬시오", startTime: 59 },
      { content: "내가 대신 헤아려 보리다", startTime: 61 },
      { content: "비단옷을 입고", startTime: 64 },
      { content: "돌아온 고향 나의 침대여", startTime: 65.2 },
      { content: "손을 들어 환영해주오", startTime: 69.5 },
      { content: "잠들자 신나는 잠", startTime: 74.5 },
      { content: "이 밤도 한바탕 실랑이 끝에서", startTime: 86 },
      { content: "화해를 청하며 스스로 내민 손", startTime: 91.3 },
      { content: "탐탁지 않던 하루와 극적인 타협의 순간", startTime: 97 },
      { content: "잠들자 신나는 잠", startTime: 199.5 },
      { content: "이불을 턱 끝까지 차올리면서", startTime: 151.5 },
      { content: "내쉬는 고귀한 한숨이 있기에", startTime: 157 },
      { content: "체념의 순간이래도 비굴하진 않아요", startTime: 162 },
    ],
  },
  {
    index: 10,
    title: "나쁜 꿈",
    engTitle: "bad dreams",
    playTime: "4:52",
    lyricData: [
      { content: "푸르르른", startTime: 44 },
      { content: "오솔길에", startTime: 46.5 },
      { content: "유령 하나 지나가더니", startTime: 49 },
      { content: "니힐니힐이야", startTime: 54 },
      { content: "힐링힐링", startTime: 57.2 },
      { content: "웃음꽃은 피고 집디다", startTime: 60 },
      { content: "내세 내세", startTime: 87.2 },
      { content: "돈 벌어내세", startTime: 90.2 },
      { content: "저승길 노잣돈 SELF요", startTime: 93 },
      { content: "낙타에게 당장", startTime: 98.2 },
      { content: "바늘 귀를 달라!", startTime: 101 },
      { content: "잘도 떠들면서 놉디다", startTime: 103.8 },
      { content: "아 부질없도다 아사달과 아사녀", startTime: 108.5 },
      { content: "아 저 달님도 방긋 어리석은 우리들", startTime: 119.5 },
      { content: "돌아오리", startTime: 153 },
      { content: "같은 얼굴로", startTime: 155.5 },
      { content: "토씨 하나 다르지 않은 시되어", startTime: 158 },
      { content: "사랑하든", startTime: 164 },
      { content: "경멸하든", startTime: 166.5 },
      { content: "하나만 하긴 힘들 테다", startTime: 169 },
      { content: "아 부질없도다 아사달과 아사녀", startTime: 196 },
      { content: "아 저 달님도 방긋 어리석은 우리들", startTime: 206 },
    ],
  },
  {
    index: 11,
    title: "새 어둠 새 눈",
    engTitle: "land of night",
    playTime: "4:26",
    lyricData: [
      { content: `잠든 빛 따돌리고 저 바닷속 헤엄쳐 가자`, startTime: 42 },
      { content: `새 어둠이 오면은 그제서야 새 눈을 뜨자`, startTime: 55 },
      { content: `머나먼 그곳에 닿으면`, startTime: 68 },
      { content: `우린 꿈도 말도 다 잊을 거야`, startTime: 74.5 },
      { content: `숨죽여 나의 친구여`, startTime: 81.2 },
      { content: `이건 나를 위한 노래야`, startTime: 84 },
      { content: `숨죽여 나의 친구여`, startTime: 88 },
      { content: `이건 나를 위한 노래야`, startTime: 90.5 },
      { content: `“빛이 있으라”`, startTime: 94 },
      { content: `“빛이 있으라”`, startTime: 100 },
      { content: `잠든 빛 따돌리고 저 바닷속 헤엄쳐 가자`, startTime: 107 },
      { content: `새 어둠이 오면은 그제서야 새 눈을 뜨자`, startTime: 120 },
      { content: `머나먼 그 곳에 닿으면`, startTime: 133 },
      { content: `우린 꿈도 말도 다 잊을 거야`, startTime: 139.5 },
      { content: `증명해 내 사랑이여`, startTime: 146 },
      { content: `나를 위한 거라 했잖아`, startTime: 148.5 },
      { content: `증명해 내 사랑이여`, startTime: 153 },
      { content: `나를 위한 거라 했잖아`, startTime: 155 },
      { content: `“빛이 있으라”`, startTime: 159 },
      { content: `“빛이 있으라”`, startTime: 165.5 },
      { content: `잠든 빛 따돌리고`, startTime: 198 },
      { content: `새 어둠이 오면은 그제서야`, startTime: 204 },
      { content: `밤의 나라로 가요`, startTime: 224 },
      { content: `잿빛 담요를 두르고`, startTime: 227 },
      { content: `온 세상이 다 함께 새까만 속`, startTime: 230.3 },
      { content: `형형색색 발하면`, startTime: 237 },
      { content: `눈을 눈을 감아라`, startTime: 240 },
      { content: `무섭거든 도망치거라`, startTime: 243.3 },
    ],
  },
  {
    index: 12,
    title: "꿈과 힘과 책과 벽",
    engTitle: "dreams, books, power and walls",
    playTime: "4:57",
    lyricData: [
      { content: "해가 뜨고 다시 지는 것에", startTime: 14 },
      { content: "연연하였던 나의 작은방", startTime: 20 },
      { content: "텅 빈 마음 노랠 불러봤자", startTime: 26 },
      { content: "누군가에겐 소음일 테니", startTime: 29.5 },
      { content: "꼭 다문 입 그 새로 삐져나온", startTime: 33.2 },
      { content: "보잘것없는 나의 한숨에", startTime: 39.2 },
      { content: "나 들으라고 내쉰 숨이 더냐", startTime: 45 },
      { content: "아버지 내게 물으시고", startTime: 48.7 },
      { content: "제 발 저려 난 답할 수 없었네", startTime: 51.5 },
      { content: "우리는 우리는", startTime: 60.8 },
      { content: "어째서", startTime: 66 },
      { content: "어른이 된 걸까", startTime: 68.7 },
      { content: "하루하루가", startTime: 72.7 },
      { content: "참 무거운 짐이야", startTime: 75.7 },
      { content: "더는 못 갈 거야", startTime: 78.7 },
      { content: "꿈과 책과 힘과 벽 사이를", startTime: 87 },
      { content: "눈치 보기에 바쁜 나날들", startTime: 93 },
      { content: "소년이여 야망을 가져라", startTime: 98.7 },
      { content: "무책임한 격언 따위에", startTime: 102 },
      { content: "저 바다를 호령하는 거야", startTime: 106 },
      { content: "어처구니없던 나의 어린 꿈", startTime: 112 },
      { content: "가질 수 없음을 알게 되던 날", startTime: 117.5 },
      { content: "두드러기처럼 돋은 심술이", startTime: 121 },
      { content: "끝내 그 이름 더럽히고 말았네", startTime: 124 },
      { content: "우리는 우리는", startTime: 133 },
      { content: "어째서", startTime: 138.5 },
      { content: "어른이 된 걸까", startTime: 141 },
      { content: "하루하루가", startTime: 145 },
      { content: "참 무거운 짐이야", startTime: 148 },
      { content: "더는 못 간대두", startTime: 150 },
      { content: "멈춰 선 남겨진", startTime: 158 },
      { content: "날 보면", startTime: 164 },
      { content: "어떤 맘이 들까", startTime: 166.5 },
      { content: "하루하루가", startTime: 170.5 },
      { content: "참 무서운 밤인 걸", startTime: 173.5 },
      { content: "잘도 버티는 넌", startTime: 176.3 },
      { content: "하루하루가", startTime: 183 },
      { content: "참 무서운 밤인 걸", startTime: 186 },
      { content: "자고 나면 괜찮아질 거야", startTime: 191 },
      { content: "하루는 더 어른이 될 테니", startTime: 197 },
      { content: "무덤덤한 그 눈빛을 기억해", startTime: 203 },
      { content: "어릴 적 본 그들의 눈을", startTime: 206.5 },
      { content: "우린 조금씩 닮아야 할 거야", startTime: 209 },
    ],
  },
];
