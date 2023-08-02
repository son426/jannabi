import images from "@/data/images/regular3";
import audio from "@/data/audio/regular3";

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
  coverImg: string;
  hoveredImg?: string;
  playTime: string;
  description: string;
  audioFile: string;
  lyrics?: string;
  lyricData?: ILyric[];
}

export const regularData3 = [
  {
    index: 1,
    title: "환상의 나라",
    engTitle: "THE LAND OF FANTASY",
    playTime: "1:07",
    coverImg: images.c1,
    description: `이 곡에서부터 이 앨범의 구상이 시작되었어요.​
    2집의 마지막 수록곡 <꿈과 책과 힘과 벽>에서
    시작한 앨범이라고도 볼 수 있는데요,
    
    그 곡의 가사에서 나오는...
    자고나도 안 괜찮아지고
    자고나도 어른이 안 되길래
    이런 가사를 썼습니다.`,
    audioFile: audio.a1,
    lyrics: `저기 저 굽은 어깨너머
    저물어만 가는 꿈
    철없던 밤과 낮을 기억하는가
    밟히우면 또 꿈틀대는
    촌스러운 이 생명들과
    고요한 우리의 밤
    고요한 우리의 밤`,
    lyricData: [
      { content: "저기 저 굽은 어깨너머", startTime: 0 },
      { content: "저물어만 가는 꿈", startTime: 10 },
      { content: "철없던 밤과 낮을 기억하는가", startTime: 13 },
      { content: "밟히우면 또 꿈틀대는", startTime: 19.5 },
      { content: "촌스러운 이 생명들과", startTime: 23.5 },
      { content: "고요한 우리의 밤", startTime: 27.5 },
      { content: "고요한 우리의 밤", startTime: 47 },
    ],
  },
  {
    index: 2,
    title: "용맹한 발걸음이여",
    engTitle: "OH BRAVE MORNING SUN",
    playTime: "3:15",
    coverImg: images.c2,
    description: `‘성실'이라고 하는, 저희 잔나비가 생각하는 미덕에 대해서 쓴 곡입니다. 성실한 여러분들 주제곡 삼아 아침에 출근길 힘차게 용맹한 발걸음으로 가시길 바랍니다.`,
    audioFile: audio.a2,
    lyrics: `새로운 아침이 반짝이는데
    오늘은 누가 먼저 일어났나
    말하지 않아도 알 수 있는 음-
    성실한 사랑이었네
    사랑은 구름 넘어 환상은 아니지만
    멍청한 믿음은 좀 필요로 해.
    어서 여기 밤사이 깨어진 꿈의 조각을 주워가렴.
    조금만 더 가면 보금자리래
    그곳에 닿으면 한숨 돌릴까
    입 맞춰 부르면 더 달콤할걸? 우
    달콤한 사랑 노래를
    그토록 찾아 헤맨 무지개
    닿을 수 없을 거야
    우리 알고 있었대도
    말하지 않았음은
    우리는 끝까지 발 굴러야 해
    두 눈은 또박또박 보아야 해
    꼭 잡은 두 손이 더 자유로운
    용맹한 발걸음이여
    머나먼- 머나먼- 그곳은 어디에
    발 굴러 뱅뱅 굴러 가야만 해
    두 눈은 또박또박 보아야 해
    꼭 잡은 두 손이 더 자유로운
    용맹한 발걸음이여
    달콤한 사랑 노래를
    입맞춰 부르면 더 달콤할까`,
    lyricData: [
      { content: "새로운 아침이 반짝이는데", startTime: 0 },
      { content: "오늘은 누가 먼저 일어났나", startTime: 33 },
      { content: "말하지 않아도 알 수 있는 음-", startTime: 38 },
      { content: "성실한 사랑이었네", startTime: 43 },
      { content: "사랑은 구름 넘어 환상은 아니지만", startTime: 46 },
      { content: "멍청한 믿음은 좀 필요로 해.", startTime: 49 },
      {
        content: "어서 여기 밤사이 깨어진 꿈의 조각을 주워가렴.",
        startTime: 51,
      },
      { content: "조금만 더 가면 보금자리래", startTime: 56 },
      { content: "그곳에 닿으면 한숨 돌릴까", startTime: 61 },
      { content: "입 맞춰 부르면 더 달콤할걸? 우", startTime: 66 },
      { content: "달콤한 사랑 노래를", startTime: 70 },
      { content: "그토록 찾아 헤맨 무지개", startTime: 76 },
      { content: "닿을 수 없을 거야", startTime: 81 },
      { content: "우리 알고 있었대도", startTime: 86 },
      { content: "말하지 않았음은", startTime: 90 },
      { content: "우리는 끝까지 발 굴러야 해", startTime: 95 },
      { content: "두 눈은 또박또박 보아야 해", startTime: 100 },
      { content: "꼭 잡은 두 손이 더 자유로운", startTime: 106 },
      { content: "용맹한 발걸음이여", startTime: 111 },
      { content: "머나먼- 머나먼- 그곳은 어디에", startTime: 135 },
      { content: "발 굴러 뱅뱅 굴러 가야만 해", startTime: 146 },
      { content: "두 눈은 또박또박 보아야 해", startTime: 151 },
      { content: "꼭 잡은 두 손이 더 자유로운", startTime: 156 },
      { content: "용맹한 발걸음이여", startTime: 161 },
      { content: "달콤한 사랑 노래를", startTime: 167 },
      { content: "입맞춰 부르면 더 달콤할까", startTime: 177 },
    ],
  },
  {
    index: 3,
    title: "비틀 파워!",
    engTitle: "A BALLAD OF NON LE JON",
    playTime: "3:05",
    coverImg: images.c3,
    description: `저희가 비틀즈를 엄청 좋아해요, 자기 전에 비틀즈 다큐멘터리를 보기도 하는데, "To the top!" 일단 올라가고 보자는 대화를 나누는게 멋있다고 생각했어요. 그걸 보고 우리도 일단 올라가고 보자, 유명해지고 보자, 이런 생각을 했었던 철없던 과거에 대한 반성(이라고 해야하나) 자조적으로 풀어보고자 했던 곡입니다.`,
    audioFile: audio.a3,
    lyrics: `디어 미스터 존, 미스터 폴
    잘들 지내셨는지요
    위 아 인 더 인더스트리!
    나 그대 뜻에 다다랐어요
    암 비틀 보이
    메피스토, 와이 유 패스 미 바이?
    제겐 묻지 않더군요
    노 비즈니스 라이크 쇼 비즈니스!
    그래서 내 식대로 해냈어요
    암 비틀 보이
    뭐가 뭔지 모르겠을 땐
    텔레비전 셀레브리티
    더 프라이스 이즈 저스트 원 핑거
    나는 거뜬해요
    오 비틀 보이
    “레이디스 앤 젠틀맨! 플리즈 웰컴! 더 비틀 보이!”
    디어 미스터 조지! 미스터 링고!
    사랑하는 나의 친구
    돈 비 시리어스 마이 올드 프렌드.
    고결한 우리의 음악으로
    Entertain'ment' us!
    뭐가 뭔지 모르겠을 땐
    텔레비전 셀레브리티
    더 프라이스 이즈 저스트 원 핑거
    나는 거뜬해요
    오 비틀 보이
    To the topper most of the popper most!
    예스 아임 리빙 얼론!
    오 비틀 보이!`,
    lyricData: [
      { content: `디어 미스터 존, 미스터 폴`, startTime: 0 },
      { content: `잘들 지내셨는지요`, startTime: 38 },
      { content: `위 아 인 더 인더스트리!`, startTime: 41.5 },
      { content: `나 그대 뜻에 다다랐어요`, startTime: 45 },
      { content: `암 비틀 보이`, startTime: 49.5 },
      { content: `메피스토, 와이 유 패스 미 바이?`, startTime: 55 },
      { content: `제겐 묻지 않더군요`, startTime: 57.5 },
      { content: `노 비즈니스 라이크 쇼 비즈니스!`, startTime: 60 },
      { content: `그래서 내 식대로 해냈어요`, startTime: 64 },
      { content: `암 비틀 보이`, startTime: 68 },
      { content: `뭐가 뭔지 모르겠을 땐`, startTime: 74.5 },
      { content: `텔레비전 셀레브리티`, startTime: 78.5 },
      { content: `더 프라이스 이즈 저스트 원 핑거`, startTime: 84 },
      { content: `나는 거뜬해요`, startTime: 86 },
      { content: `오 비틀 보이`, startTime: 89 },
      {
        content: `“레이디스 앤 젠틀맨! 플리즈 웰컴! 더 비틀 보이!”`,
        startTime: 92,
      },
      { content: `디어 미스터 조지! 미스터 링고!`, startTime: 106 },
      { content: `사랑하는 나의 친구`, startTime: 111 },
      { content: `돈 비 시리어스 마이 올드 프렌드.`, startTime: 114 },
      { content: `고결한 우리의 음악으로`, startTime: 118 },
      { content: `Entertain'ment' us!`, startTime: 121 },
      { content: `뭐가 뭔지 모르겠을 땐`, startTime: 144 },
      { content: `텔레비전 셀레브리티`, startTime: 149 },
      { content: `더 프라이스 이즈 저스트 원 핑거`, startTime: 154 },
      { content: `나는 거뜬해요`, startTime: 156 },
      { content: `오 비틀 보이`, startTime: 159 },
      { content: `To the topper most of the popper most!`, startTime: 162 },
      { content: `예스 아임 리빙 얼론!`, startTime: 165 },
      { content: `오 비틀 보이!`, startTime: 168 },
    ],
  },
  {
    index: 4,
    title: "고백극장",
    engTitle: "CONFESSION SHOW",
    playTime: "3:08",
    coverImg: images.c4,
    description: `사랑 그리고 우정에 대해서.. <전설> 노래를 설명하면서 쟁취하는 사랑에 대한 얘기라고 했는데 요즘 누가 사랑을 쟁취하냐고, 촌스럽다는 얘기를 들은 적이 있어요. 이 노래도 자조적으로, 제 스스로를 비꼬아본 그런 뉘앙스가 있는 곡입니다.

    ​'나는 생존의 왕이다, 여기서 살아남아서 친구 짱많이 만들어야지!' 이런 느낌으로 우정이라는게 생각이 들 때도 있고, 사랑도 마찬가지로 이런 생각이 들 때가 있어서..나쁘지는 않다고 생각해요, 쟁취하는 사랑, 정복하는 우정 이런 것들이. 용기가 필요한 일이라고 생각하기 때문에.`,
    audioFile: audio.a4,
    lyrics: `우정은 처절했지
    살아남아야만 했으니
    사람들의 웃음이
    눈에 밟히는 모든 것들이
    내겐 외로움이었네
    안돼요 그런 표정 짓지 말아요
    난 다 알아요
    나는 생존의 왕! 우정 정복자여! 하하하하하
    사랑은 달콤했지
    내게 포근함을 줬으니
    손에 담고 싶었나
    오 난 그마저도 치열하게
    해내려고 했었네
    안돼요 그런 말은 하지 말아요
    난 다 알아요
    이런 내 마음이 어찌 담백하리오
    오 제발요!
    나는 정열의 신! 사랑 쟁취하네! 하하하하하
    외로운 사람끼리 함께 외로울 것! 라라라라라`,
    lyricData: [
      { content: "우정은 처절했지", startTime: 0 },
      { content: "살아남아야만 했으니", startTime: 20 },
      { content: "사람들의 웃음이", startTime: 25 },
      { content: "눈에 밟히는 모든 것들이", startTime: 30 },
      { content: "내겐 외로움이었네", startTime: 35 },
      { content: "안돼요 그런 표정 짓지 말아요", startTime: 42 },
      { content: "난 다 알아요", startTime: 48 },
      { content: "나는 생존의 왕! 우정 정복자여! 하하하하하", startTime: 55 },
      { content: "사랑은 달콤했지", startTime: 74 },
      { content: "내게 포근함을 줬으니", startTime: 80 },
      { content: "손에 담고 싶었나", startTime: 84.5 },
      { content: "오 난 그마저도 치열하게", startTime: 89.5 },
      { content: "해내려고 했었네", startTime: 94.5 },
      { content: "안돼요 그런 말은 하지 말아요", startTime: 102 },
      { content: "난 다 알아요", startTime: 108 },
      { content: "이런 내 마음이 어찌 담백하리오", startTime: 112 },
      { content: "오 제발요!", startTime: 118 },
      { content: "나는 정열의 신! 사랑 쟁취하네! 하하하하하", startTime: 122 },
      { content: "외로운 사람끼리 함께 외로울 것! 라라라라라", startTime: 137 },
    ],
  },
  {
    index: 5,
    title: "로맨스의 왕",
    engTitle: "THE KING OF ROMANCE",
    playTime: "3:43",
    coverImg: images.c5,
    description: `​제목을 짓게 된 것은 영화 코미디의 왕을 보고, 이 노래를 코미디에서 로맨스 장르로 바꿔서 보면 재밌을 수 있겠다 싶어서 이렇게 지어봤구요, 마음처럼 쉽게 타오르지 않는 사랑에 대해서 써 봤어요. 제 주변도 그렇고 많은 사람들이 연애에 대해서 뜨겁게 타오르고 싶은데 마음처럼 안 되는 사람들이 많더라구요, 표현도 잘 안 되고. '비가내리고 음악이 흐르는' 로맨틱한 상황이 만들어졌음에도 불구하고 망설이고 있는 나 자신에 조금, 한탄하면서, 그리고 사랑이 빨리 불타오르길 하고 결심하는 그런 내용입니다.

    이 노래는 마지막에 엄청 빨라지고 정신없어지는데, 그만큼 사랑이 빨리 불타올랐으면 좋겠다 하는, 그런 이미지를 그렸어요. 그리고 우리 하모나이즈와 함께 하는 목소리가 지니처럼, 요정들처럼 들렸으면 했어요. 그래서 마지막에는 요정들이 돌면서 노래하는 걸 표현해봤습니다. 이어폰으로 들으시면 소리가 돌면서 들릴 거에요.`,
    audioFile: audio.a5,
    lyrics: `헐리웃 러버! 이 연애는
    이해할 수가 없어
    꽉 막힌 내게
    그런 감각을 바래?
    헐리웃 러버! 그 말투도
    조금 작위적인걸
    어설픈 도취
    취한 거야 분명해
    나의 이름은 레이첼
    오 라이언 유아 마이 스윗 헐트
    사랑해요 뜨겁게 당신만을
    때마침 비가 내리고 낯익은 음악이 흐르고
    다들 춤을 추는데
    마주보며 멋쩍게 웃던 우리
    는사실은 그래 좀 미안해
    너를 사랑하지만
    늘 피곤한 내겐
    그런 불꽃은 없어
    뚜뚜뚜뚜 뚜뚜루- 뚜뚜뚜뚜 뚜뚜루-
    뚜루두루 뚜루두루 뚜루뚜-
    나의 이름은 리차드
    오 줄리아 유아 마이 스윗헐트
    사랑해요 뜨겁게 당신만을
    때마침 비가 내리고 낯익은 음악이 흐르고
    다들 춤을 추는데
    마주보며 멋쩍게 웃던 우리는
    우 사랑의 정열이여 한번쯤 타올라주어
    이 내 머뭇거림 위로-
    멈추지 않을 작은 하나 그 춤을
    그 품에 잠겨
    영원히 발 맞추게
    뚜뚜뚜뚜 뚜뚜루- 뚜뚜뚜뚜 뚜뚜루-
    뚜루두루 뚜루두루 뚜루뚜- 뚜두두두`,
    lyricData: [
      { content: "헐리웃 러버! 이 연애는", startTime: 0 },
      { content: "이해할 수가 없어", startTime: 5.5 },
      { content: "꽉 막힌 내게", startTime: 9 },
      { content: "그런 감각을 바래?", startTime: 10 },
      { content: "헐리웃 러버! 그 말투도", startTime: 15 },
      { content: "조금 작위적인걸", startTime: 20 },
      { content: "어설픈 도취", startTime: 23.5 },
      { content: "취한 거야 분명해", startTime: 25 },
      { content: "나의 이름은 레이첼", startTime: 31 },
      { content: "오 라이언 유아 마이 스윗 헐트", startTime: 34 },
      { content: "사랑해요 뜨겁게 당신만을", startTime: 38 },
      { content: "때마침 비가 내리고 낯익은 음악이 흐르고", startTime: 47.5 },
      { content: "다들 춤을 추는데", startTime: 56 },
      { content: "마주보며 멋쩍게 웃던 우리는", startTime: 62 },
      { content: "사실은 그래 좀 미안해", startTime: 66 },
      { content: "너를 사랑하지만", startTime: 71 },
      { content: "늘 피곤한 내겐", startTime: 74 },
      { content: "그런 불꽃은 없어", startTime: 76 },
      { content: "뚜뚜뚜뚜 뚜뚜루- 뚜뚜뚜뚜 뚜뚜루-", startTime: 80 },
      { content: "뚜루두루 뚜루두루 뚜루뚜-", startTime: 90 },
      { content: "나의 이름은 리차드", startTime: 96 },
      { content: "오 줄리아 유아 마이 스윗헐트", startTime: 99 },
      { content: "사랑해요 뜨겁게 당신만을", startTime: 103.5 },
      { content: "때마침 비가 내리고 낯익은 음악이 흐르고", startTime: 113 },
      { content: "다들 춤을 추는데", startTime: 122 },
      { content: "마주보며 멋쩍게 웃던 우리는", startTime: 127.5 },
      { content: "우 사랑의 정열이여 한번쯤 타올라주어", startTime: 131 },
      { content: "이 내 머뭇거림 위로-", startTime: 140 },
      { content: "멈추지 않을 작은 하나 그 춤을", startTime: 146 },
      { content: "그 품에 잠겨", startTime: 150 },
      { content: "영원히 발 맞추게", startTime: 154 },
      { content: "뚜뚜뚜뚜 뚜뚜루- 뚜뚜뚜뚜 뚜뚜루-", startTime: 140 },
      { content: "뚜루두루 뚜루두루 뚜루뚜- 뚜두두두", startTime: 170 },
    ],
  },
  {
    index: 6,
    title: "페어웰 투 암스! 요람 송가",
    engTitle: "FAREWELL TO ARMS! + HYMN FOR THE CRADLE",
    playTime: "4:39",
    coverImg: images.c6,
    description: `쓰면서 가장 고민했던 노래에요. 최실장님이 가사를 듣고 정색을 하셔서 고쳤어요. 고치니까 낫긴 하더라고요. 너무 하고싶은 말을 (솔직하게) 담아서 그런 것 같습니다.

    약간 갈팡질팡하고, 지오르보는 '못다이룬 나의 꿈을 전가하노라' 하는 아버지의 말씀이 떠올라서 갈팡질팡을 하죠. 저희 아버지는 항상 이렇게 이야기 하셨던 것 같아요. 술 드시고 전화하셔서 '정훈아, 진짜가 되어라, 한 번 되어 봐라'. 아버지에게서 영감을 많이 받는 편입니다. 사랑합니다, 아버지.
    
    굉장히 변화와 연출이 많은 곡입니다. 뮤지컬스럽다는 이야기를 할 정도로 스케일이 크고, 공을 많이 들인 곡입니다. 2017년에 써놨던 멜로디를 이제서야 풀어놓게 되네요.`,
    audioFile: audio.a6,
    lyrics: `붉게 물든 하늘 아래
    저물어가는
    또 하루
    싸워 줄 이 하나 없이
    낙오된 요새엔
    근육이여
    주름이여
    목소리여
    눈동자여
    허깨비여
    잘 있거라!
    지는 해가 서러워 발 구르나
    별 수없이 다정해지리라
    신음하는 친구여
    자신 있게 고갤 떨궈라
    우울의 서막
    젊은 관짝 대행진
    교전 의사 없음
    피를 빠는
    더 젊은 태양
    등에 지고서
    못다 이룬 나의 꿈을
    전가하노라
    굳세어라
    안돼요 그런 짐은 지우지 말아요
    난 아니에요
    해로운 승리의 찬가를
    내 귀에 옮기지 마요
    주워들은 그 노래를
    별 수없이 착한 사람들의
    별 수없이 행복한 날들로
    길에서 주운 평화엔
    오 딱한 무용담도 없어라
    우울의 서막
    젊은 관짝 대행진
    교전 의사 없음
    피를 빠는
    더 젊은 태양-
    등에 지고서
    삐삐삐삐 삐삐삐 삐삐삐삐삐삐 삐삡
    고귀하여라 젊은 백기
    이리로 오라-
    오 잠들어 오라-
    고단한 몸 요람에 안겨
    팔베개를 꼬고 누웠다
    아픈 만큼 담담해지길
    잠에 들던 나는 잊었다
    달콤한 외면은 달콤하긴 했다
    끝내 날 죽이지 못했던
    그것은 진짜로 아팠다`,
    lyricData: [
      { content: "붉게 물든 하늘 아래", startTime: 0 },
      { content: "저물어가는", startTime: 6 },
      { content: "또 하루", startTime: 9 },
      { content: "싸워 줄 이 하나 없이", startTime: 14 },
      { content: "낙오된 요새엔", startTime: 18 },
      { content: "근육이여", startTime: 20 },
      { content: "주름이여", startTime: 21.5 },
      { content: "목소리여", startTime: 22.5 },
      { content: "눈동자여", startTime: 23.7 },
      { content: "허깨비여", startTime: 24.7 },
      { content: "잘 있거라!", startTime: 26 },
      { content: "지는 해가 서러워 발 구르나", startTime: 28 },
      { content: "별 수없이 다정해지리라", startTime: 32 },
      { content: "신음하는 친구여", startTime: 36 },
      { content: "자신 있게 고갤 떨궈라", startTime: 39 },
      { content: "우울의 서막", startTime: 45 },
      { content: "젊은 관짝 대행진", startTime: 46.8 },
      { content: "교전 의사 없음", startTime: 49 },
      { content: "피를 빠는", startTime: 53 },
      { content: "더 젊은 태양", startTime: 55 },
      { content: "등에 지고서", startTime: 57.5 },
      { content: "못다 이룬 나의 꿈을", startTime: 62 },
      { content: "전가하노라", startTime: 65.5 },
      { content: "굳세어라", startTime: 68 },
      { content: "안돼요 그런 짐은 지우지 말아요", startTime: 104.5 },
      { content: "난 아니에요", startTime: 111 },
      { content: "해로운 승리의 찬가를", startTime: 115.5 },
      { content: "내 귀에 옮기지 마요", startTime: 120 },
      { content: "주워들은 그 노래를", startTime: 126 },
      { content: "별 수없이 착한 사람들의", startTime: 134 },
      { content: "별 수없이 행복한 날들로", startTime: 140 },
      { content: "길에서 주운 평화엔", startTime: 143 },
      { content: "오 딱한 무용담도 없어라", startTime: 145 },
      { content: "우울의 서막", startTime: 152 },
      { content: "젊은 관짝 대행진", startTime: 153 },
      { content: "교전 의사 없음", startTime: 156 },
      { content: "피를 빠는", startTime: 160 },
      { content: "더 젊은 태양-", startTime: 161.5 },
      { content: "등에 지고서", startTime: 164 },
      { content: "삐삐삐삐 삐삐삐 삐삐삐삐삐삐 삐삡", startTime: 168 },
      { content: "고귀하여라 젊은 백기", startTime: 176 },
      { content: "이리로 오라-", startTime: 181 },
      { content: "오 잠들어 오라-", startTime: 184 },
      { content: "고단한 몸 요람에 안겨", startTime: 215 },
      { content: "팔베개를 꼬고 누웠다", startTime: 221 },
      { content: "아픈 만큼 담담해지길", startTime: 227 },
      { content: "잠에 들던 나는 잊었다", startTime: 232.5 },
      { content: "달콤한 외면은 달콤하긴 했다", startTime: 238 },
      { content: "끝내 날 죽이지 못했던", startTime: 248 },
      { content: "그것은 진짜로 아팠다", startTime: 253 },
    ],
  },
  {
    index: 7,
    title: "소년 클레이 피전",
    engTitle: "CLAY PIGEON BOY",
    playTime: "1:45",
    coverImg: images.c7,
    description: `스토리 상으로는 지오르보가 '아버지의 말을 따르겠노라.' 하고 절벽으로 가서 점프를 합니다. 별에 닿을 것 같아, 하는 그 때의 이야기를 써 본 겁니다. 그냥 이 사운드에 빠져서 가사를 그려보시면 재밌지 않을까 하는 생각이 들어요.

    후렴은 2015년도에 공연 인트로로 쓰곤 했던 부분이거든요, 지금까지 함께하고 계신 분들이 계시다면 굉장히 반갑지 않을까`,
    audioFile: audio.a7,
    lyrics: `가슴팍에 박혔지? 죽었나? 살았나?
    아- 움직인다
    허공에 붕 뜨길래 소년은
    별이 될 줄 알았었나 봐
    신이 나서 날아가
    (총성 하나)
    빵!
    떨어졌지
    (튀어 오르는 새들의 무리)
    아슬한 곡예였지-
    (몹쓸 꿈의 파편)
    살아있네
    소년 클레이 피전 분칠한 광대여
    뽀얀 그 얼굴에 눈물이 겹치면
    또한 살아계신 소년의 아버진
    독한 술 한 잔에 유언을 고치지`,
    lyricData: [
      { content: "가슴팍에 박혔지? 죽었나? 살았나?", startTime: 0 },
      { content: "아- 움직인다", startTime: 18 },
      { content: "허공에 붕 뜨길래 소년은", startTime: 25 },
      { content: "별이 될 줄 알았었나 봐", startTime: 28 },
      { content: "신이 나서 날아가", startTime: 35 },
      { content: "(총성 하나)", startTime: 39 },
      { content: "빵!", startTime: 40 },
      { content: "떨어졌지", startTime: 42 },
      { content: "(튀어 오르는 새들의 무리)", startTime: 44 },
      { content: "아슬한 곡예였지-", startTime: 45 },
      { content: "(몹쓸 꿈의 파편)", startTime: 48 },
      { content: "살아있네", startTime: 51 },
      { content: "소년 클레이 피전 분칠한 광대여", startTime: 59 },
      { content: "뽀얀 그 얼굴에 눈물이 겹치면", startTime: 64 },
      { content: "또한 살아계신 소년의 아버진", startTime: 70 },
      { content: "독한 술 한 잔에 유언을 고치지", startTime: 75 },
    ],
  },
  {
    index: 8,
    title: "누구를 위한 노래였던가",
    engTitle: "TIME",
    playTime: "3:42",
    coverImg: images.c8,
    description: `시간이 흐르잖아요, 안 좋은 기억은 더 그런 것 같아요, 떠올릴 때 더 씁쓸해지더라고요. 그때는 그렇게 죽을 것 같이 힘들었는데 지금은 아무렇지도 않구나, 심지어 헛웃음이 지어지기도 하고. 제 마음을 들여다보니까 시간이 위선을 부린다는 생각이 들었어요. 그 사람들은 어떤 마음을 가지고 살까, 하는 생각이 들기도 했고.

    <나의 기쁨 나의 노래>를 인용했던 것 같아요. 이 노래를 쓸 때 가장 감정적으로 허무감에 휩싸여 있었던 것 같습니다.`,
    audioFile: audio.a8,
    lyrics: `저기 너머에 손짓하길래
    있는가 했지
    너와 내가 일궈온
    서글픈 전설이
    기쁨 되어 뒹굴 거리
    이겨내려던 그 비바람도
    덤빈 적 없다 하고
    흔들리던 별들은 추억으로 피어
    시간은 그렇게 지워갔지
    째깍째깍 위선을 부리니
    그 아픔 모르지 나는
    친구야 넌 넌 알지도 모르지
    '달콤한 사랑 노래를'
    엉금엉금 기어올랐던가
    꿈을 쫓았던가 우리
    이쯤에선 불러볼 줄 알았지
    '달콤한 사랑 노래를'
    나의 친구여 누구를 위한 노래였던가-`,
    lyricData: [
      { content: `저기 너머에 손짓하길래`, startTime: 0 },
      { content: `있는가 했지`, startTime: 20.5 },
      { content: `너와 내가 일궈온`, startTime: 27 },
      { content: `서글픈 전설이`, startTime: 30.5 },
      { content: `기쁨 되어 뒹굴 거리`, startTime: 34 },
      { content: `이겨내려던 그 비바람도`, startTime: 41 },
      { content: `덤빈 적 없다 하고`, startTime: 48 },
      { content: `흔들리던 별들은 추억으로 피어`, startTime: 54.8 },
      { content: `시간은 그렇게 지워갔지`, startTime: 61 },
      { content: `째깍째깍 위선을 부리니`, startTime: 68 },
      { content: `그 아픔 모르지 나는`, startTime: 77 },
      { content: `친구야 넌 넌 알지도 모르지`, startTime: 83 },
      { content: `'달콤한 사랑 노래를'`, startTime: 91 },
      { content: `엉금엉금 기어올랐던가`, startTime: 118 },
      { content: `꿈을 쫓았던가 우리`, startTime: 127 },
      { content: `이쯤에선 불러볼 줄 알았지`, startTime: 133 },
      { content: `'달콤한 사랑 노래를'`, startTime: 142 },
      { content: `나의 친구여 누구를 위한 노래였던가-`, startTime: 147 },
    ],
  },
  {
    index: 9,
    title: "밤의 공원",
    engTitle: "SUMMER ll",
    playTime: "4:46",
    coverImg: images.c9,
    description: `공원에 대한 이야기를 써야겠다는 생각을 했어요. 지오르보가 밤의 공원에서 힐링을 하는거죠, 말그대로. 연인들을 보고, 풀내음도 맡고, 달빛을 보고 하는데, 이전까지 지오르보한테는 비가 오면 세상이 덤비는 것 같고 바람이 (부는 것에도 부정적이었는데) 이제 그런 필터와 의미들이 사라진거죠. 그 장면을 노래하고 싶었어요.

    작업을 하다가 창문을 열면 공원이 보여서 저희 숙소 뷰가 진짜 멋지고 힐링이 돼요. 사실 이번 앨범이 봄에 나온다고, 봄이랑 어울린다고 큰소리 치고 다녔었는데, 근데 늦봄이 와버린 거에요. 그래서 하루하루 풀잎이 파래지는게 예쁘긴한데 너무 싫고 조급해지고 그랬는데, 어느 날에는 그게 그대로 아름답게 보인 날이 있었어요. 제가 티저에 공개한 영상 중에 하나인데, 제가 제 방, 햇빛하고, 제가 작업하던 공간을 을 찍은 날이 있었어요. 그 날 거의 만들어졌던 가사입니다.
    ​
    누구나 밤 공원에 대한 신비로운 추억들을 간직하고 있을 거란 생각이 들어서, <뜨거운 여름밤은 가고 남은 건 볼품없지만>의 프롤로그 정도로 생각하고 썼습니다.`,
    audioFile: audio.a9,
    lyrics: `비가 왔었나 봐
    이젠 느낄 수 있어요
    신비로워
    처음 마주한 사랑은
    푸르른 그 빛을 휘둘러
    여름으로!
    그 풀빛 아래 사랑은
    완벽하리
    아름다운 밤이에요
    밤의 공원으로 오세요
    그 어린 광기를 달래러요
    차가운 달빛이 사랑하긴 좋아요
    오 그때 내 마음은
    아침이 오면은
    초라할 작은 불빛
    또 내일은 해가 뜬대요
    서둘러 떠나요 이 밤에 취해
    (Dream until tomorrow)
    서둘러 도망친 이곳은
    밤의 공원
    그대와 나의 비밀을
    눈감아줄
    너그러운 밤이 사는 곳
    가끔 저 달이 무서워요
    곧 나가떨어질 것 같아 어떡해
    겉도는 이 사랑도 영원할 순 없다고
    오 그때 내 마음은
    아침이 오면은
    초라할 작은 불빛
    또 내일은 해가 뜬대요
    서둘러 떠나요 이 밤에 취해
    난 사랑을 알아요
    어둠 속에 피는
    격정을 아는 불빛
    또 내일은 해가 뜬대도
    영원할 거예요 아름다워요
    (Dream until tomorrow)
    초록을 거머쥔 우리는
    여름으로!
    푸르던 그 빛을 휘둘러
    여름으로!
    함부로 겨눠보던 미래와
    웃음 짓던 그대와 나
    보기 좋게 빗나간 우리들의 아침도
    영원에 걸었던 약속은
    껴안는 법도 모르는 채
    뒤척이다 마주할 창백한 아침이여`,
    lyricData: [
      { content: "비가 왔었나 봐", startTime: 0 },
      { content: "이젠 느낄 수 있어요", startTime: 5.5 },
      { content: "신비로워", startTime: 9.5 },
      { content: "처음 마주한 사랑은", startTime: 12 },
      { content: "푸르른 그 빛을 휘둘러", startTime: 18 },
      { content: "여름으로!", startTime: 21.5 },
      { content: "그 풀빛 아래 사랑은", startTime: 23 },
      { content: "완벽하리", startTime: 27 },
      { content: "아름다운 밤이에요", startTime: 29 },
      { content: "밤의 공원으로 오세요", startTime: 37 },
      { content: "그 어린 광기를 달래러요", startTime: 43 },
      { content: "차가운 달빛이 사랑하긴 좋아요", startTime: 50 },
      { content: "오 그때 내 마음은", startTime: 60.5 },
      { content: "아침이 오면은", startTime: 65.5 },
      { content: "초라할 작은 불빛", startTime: 69 },
      { content: "또 내일은 해가 뜬대요", startTime: 74.5 },
      { content: "서둘러 떠나요 이 밤에 취해", startTime: 80.5 },
      { content: "(Dream until tomorrow)", startTime: 87 },
      { content: "서둘러 도망친 이곳은", startTime: 110 },
      { content: "밤의 공원", startTime: 113 },
      { content: "그대와 나의 비밀을", startTime: 115 },
      { content: "눈감아줄", startTime: 118.5 },
      { content: "너그러운 밤이 사는 곳", startTime: 120.5 },
      { content: "가끔 저 달이 무서워요", startTime: 128.5 },
      { content: "곧 나가떨어질 것 같아 어떡해", startTime: 135 },
      { content: "겉도는 이 사랑도 영원할 순 없다고", startTime: 142 },
      { content: "오 그때 내 마음은", startTime: 152 },
      { content: "아침이 오면은", startTime: 157 },
      { content: "초라할 작은 불빛", startTime: 161 },
      { content: "또 내일은 해가 뜬대요", startTime: 166 },
      { content: "서둘러 떠나요 이 밤에 취해", startTime: 172 },
      { content: "난 사랑을 알아요", startTime: 180 },
      { content: "어둠 속에 피는", startTime: 185 },
      { content: "격정을 아는 불빛", startTime: 189 },
      { content: "또 내일은 해가 뜬대도", startTime: 194 },
      { content: "영원할 거예요 아름다워요", startTime: 200 },
      { content: "(Dream until tomorrow)", startTime: 207 },
      { content: "초록을 거머쥔 우리는", startTime: 212 },
      { content: "여름으로!", startTime: 215 },
      { content: "푸르던 그 빛을 휘둘러", startTime: 226 },
      { content: "여름으로!", startTime: 230 },
      { content: "함부로 겨눠보던 미래와", startTime: 240 },
      { content: "웃음 짓던 그대와 나", startTime: 245 },
      { content: "보기 좋게 빗나간 우리들의 아침도", startTime: 248.5 },
      { content: "영원에 걸었던 약속은", startTime: 255 },
      { content: "껴안는 법도 모르는 채", startTime: 259 },
      { content: "뒤척이다 마주할 창백한 아침이여", startTime: 262 },
    ],
  },
  {
    index: 10,
    title: "외딴섬 로맨틱",
    engTitle: "I KNOW WHERE THE RAINBOW HAS FALLEN",
    playTime: "3:42",
    coverImg: images.c10,
    description: `지오르보는 여정을 계속 합니다. 이제 섬으로 떠나고자 배를 타요. 떠나던 중에 지오르보 머릿속에서 떠오른 생각이에요, 이 가사가.

    우리라고 되어있지만 스스로에게 할 수 있는 말이기도 하고 연인이나 배우자에게 할 수 있는 말이기도 하고. <주저하는 연인들을 위해>를 내고 나서 기분이 좋았던 순간은 어떤 할머니께서 기분 좋게 들으시는 장면, 아버지가 딸한테 불러주는 장면이에요. 그래서 이번 타이틀도, 연애의 감정으로서의 사랑이 아닌 더 큰 방면에서의 사랑을 이야기하고 싶었던 것 같아요. 나를 응원해주는 사람들, 내가 응원하는 사람들, 서로 응원하는 존재들에 대한 생각을 많이 하게 되었고, 이런 응원의 말이라면 정말 기분좋게 떠날 수 있겠다는.
    ​
    기꺼이 함께하는 마음으로, 누군가를, 내 스스로를 생각하면서 들어주시면 감사하겠습니다.`,
    audioFile: audio.a10,
    lyrics: `어느 외딴섬 로맨틱을
    우리 꿈꾸다 떠내려 왔나
    때마침 노을빛이 아름답더니
    캄캄한 밤이 오더군
    이대로 이대로더 길 잃어도 난 좋아
    노를 저으면 그 소릴 난 들을래
    쏟아지는 달빛에
    오 살결을 그을리고
    먼 옛날의 뱃사람을 닮아볼래 그 사랑을
    나는 처음부터 다 알고 있었지
    거긴 그 무엇도 없다는 것을
    그래 넌 두 눈으로 꼭 봐야만 믿잖아
    기꺼이 함께 가주지
    이대로 이대로
    더 길 잃어도 난 좋아
    노를 저으면 그 소릴 난 들을래
    쏟아지는 달빛에
    오 살결을 그을리고
    먼 옛날의 뱃사람을 닮아볼래
    사랑은 바다 건너 피는 꽃이 아니래
    조그만 쪽배에로
    파도는 밑줄 긋고
    먼 훗날 그 언젠가
    돌아가자고 말하면
    너는 웃다 고갤 끄덕여줘
    참 아름다운 한때야
    오 그 노래를 들려주렴
    귓가에 피어날 사랑 노래를`,
    lyricData: [
      { content: "어느 외딴섬 로맨틱을", startTime: 0 },
      { content: "우리 꿈꾸다 떠내려 왔나", startTime: 22 },
      { content: "때마침 노을빛이 아름답더니", startTime: 29 },
      { content: "캄캄한 밤이 오더군", startTime: 36 },
      { content: "이대로 이대로더 길 잃어도 난 좋아", startTime: 42 },
      { content: "노를 저으면 그 소릴 난 들을래", startTime: 49 },
      { content: "쏟아지는 달빛에", startTime: 56 },
      { content: "오 살결을 그을리고", startTime: 59.5 },
      { content: "먼 옛날의 뱃사람을 닮아볼래 그 사랑을", startTime: 62 },
      { content: "나는 처음부터 다 알고 있었지", startTime: 89 },
      { content: "거긴 그 무엇도 없다는 것을", startTime: 96 },
      { content: "그래 넌 두 눈으로 꼭 봐야만 믿잖아", startTime: 102 },
      { content: "기꺼이 함께 가주지", startTime: 110 },
      { content: "이대로 이대로", startTime: 115 },
      { content: "더 길 잃어도 난 좋아", startTime: 119 },
      { content: "노를 저으면 그 소릴 난 들을래", startTime: 122 },
      { content: "쏟아지는 달빛에", startTime: 129 },
      { content: "오 살결을 그을리고", startTime: 132 },
      { content: "먼 옛날의 뱃사람을 닮아볼래", startTime: 135 },
      { content: "사랑은 바다 건너 피는 꽃이 아니래", startTime: 142 },
      { content: "조그만 쪽배에로", startTime: 149 },
      { content: "파도는 밑줄 긋고", startTime: 153 },
      { content: "먼 훗날 그 언젠가", startTime: 155 },
      { content: "돌아가자고 말하면", startTime: 159 },
      { content: "너는 웃다 고갤 끄덕여줘", startTime: 162.2 },
      { content: "참 아름다운 한때야", startTime: 169 },
      { content: "오 그 노래를 들려주렴", startTime: 172 },
      { content: "귓가에 피어날 사랑 노래를", startTime: 176 },
    ],
  },
  {
    index: 11,
    title: "블루버드, 스프레드 유어 윙스!",
    engTitle: "BLUEBIRD, SPREAD YOUR WINGS!",
    playTime: "2:12",
    coverImg: images.c11,
    description: `사실은 이 노래가 <외딴섬 로맨틱>에 붙어있는 아웃트로였어요. 그래서 이 곡은 삽화가 없어요. (이 부분을 뒤에 붙여서) 타이틀곡을 6분짜리를 만들었었는데 우리 최실장님도 졸도하려고 하더라고요. 제가 들었을 때도 이건 너무 갔다 싶어서 다른 곡으로 배치를 해본 곡입니다.
    ​
    이 곡도 제목이 꽤 많이 바뀌었어요. 새->파랑새->블루버드였는데, 발매 전전날에 블루버드, 스프레드유어윙스!로 바꾸었습니다.
    ​
    자기의 삶을 더 사랑하고, 더 긍정하게 되는 그런 순간에 대한 노래입니다.`,
    audioFile: audio.a11,
    lyrics: `반짝이던가
    새들의 노랫 소리
    여기 깨어진 꿈의 조각을
    주워 가렴
    짙은 어둠의
    그 바다가 날 삼키면
    나는 또 울어볼래
    I swear I swear
    아침 햇살이
    그 노래가 날 뱉으면
    나는 또 날아볼래
    I swear I swear
    Blue bird! Blue bird!
    Come, get your life!
    Believe you're be alright
    Blue bird! Blue bird!
    Come, get your life!
    Believe you're be alright`,
    lyricData: [
      { content: "반짝이던가", startTime: 0 },
      { content: "새들의 노랫 소리", startTime: 15.5 },
      { content: "여기 깨어진 꿈의 조각을", startTime: 19 },
      { content: "주워 가렴", startTime: 22 },
      { content: "짙은 어둠의", startTime: 52 },
      { content: "그 바다가 날 삼키면", startTime: 56 },
      { content: "나는 또 울어볼래", startTime: 59 },
      { content: "I swear I swear", startTime: 62 },
      { content: "아침 햇살이", startTime: 66 },
      { content: "그 노래가 날 뱉으면", startTime: 69 },
      { content: "나는 또 날아볼래", startTime: 72.5 },
      { content: "I swear I swear", startTime: 75.5 },
      { content: "Blue bird! Blue bird!", startTime: 80 },
      { content: "Come, get your life!", startTime: 83 },
      { content: "Believe you're be alright", startTime: 85 },
      { content: "Blue bird! Blue bird!", startTime: 93 },
      { content: "Come, get your life!", startTime: 96 },
      { content: "Believe you're be alright", startTime: 98 },
    ],
  },
  {
    index: 12,
    title: "굿바이 환상의 나라",
    engTitle: "GOODBYE DREAMIN' OLD STARS",
    playTime: "1:15",
    coverImg: images.c12,
    description: `고민 많이 했어요, 이 곡을 넣을까 말까를. 넣으면 좋아할까 아니면 낯가릴까 사람들이. 앨범을 더 쉽고 친근하게 만드려는 장치였던 것 같아요. 분명히 들으시면서 이 앨범이 하려는 말이 뭘까 하는 고민을 하셨을 수도 있을텐데, 이 곡으로 조금 정리를 해주는 곡이었습니다.
    ​
    엄청 여러번 했어요. 엄청 여러번 했는데, '아니 사실 너무 아플 것 같아서 그래도 뒀어' 이 부분에서 실제로 울었어요. 그래서 발음이 조금 새는데, 그 울었을 때의 느낌이 좋아서 그대로 넣었어요. 하하. 최또울이라고 놀려주세요.`,
    audioFile: audio.a12,
    lyrics: `이룰 수 없는 꿈을 꿨다면
    언덕 위의 바보를 자처하며, 어떤 이에게서 주워들은 승전가를 굳게 믿어왔다면 끝끝내 달콤하리라고.
    그토록 부르던 별과 꿈, 그런 것들..
    별은 과녁이었고 꿈은 그저 꿈이라 부르기에 알맞은 거였다고 말해줄래.
    환상의 나라를 사랑하고자 했던 사내에게
    현실의 아름다움은 독이어야만 했지 꼭 그래야만 했어그 촌스러운 은유를 벗겨내는 고통은 그래, 딱 세상이 너그러웠던 만큼 아팠어.
    아니 사실 너무 아플 것 같아서 그대로 뒀어.
    이제 내가 믿어왔던 그 모든 것들, 난 환상이었다 부를 수 있어. 그러면서도 또 믿어볼래. 그것들을 환상이라고 그렇게 부르기까지의 그 시간들을.
    그리고 또 그리고 또…그래도 오늘 밤은 집에 가야겠어.`,
    lyricData: [
      { content: "이룰 수 없는 꿈을 꿨다면", startTime: 0 },
      {
        content:
          "언덕 위의 바보를 자처하며, 어떤 이에게서 주워들은 승전가를 굳게 믿어왔다면 끝끝내 달콤하리라고.",
        startTime: 5,
      },
      { content: "그토록 부르던 별과 꿈, 그런 것들..", startTime: 16 },
      {
        content:
          "별은 과녁이었고 꿈은 그저 꿈이라 부르기에 알맞은 거였다고 말해줄래.",
        startTime: 20,
      },
      { content: "환상의 나라를 사랑하고자 했던 사내에게", startTime: 27 },
      {
        content:
          "현실의 아름다움은 독이어야만 했지 꼭 그래야만 했어그 촌스러운 은유를 벗겨내는 고통은 그래, 딱 세상이 너그러웠던 만큼 아팠어.",
        startTime: 30,
      },
      { content: "아니 사실 너무 아플 것 같아서 그대로 뒀어.", startTime: 45 },
      {
        content:
          "이제 내가 믿어왔던 그 모든 것들, 난 환상이었다 부를 수 있어. 그러면서도 또 믿어볼래. 그것들을 환상이라고 그렇게 부르기까지의 그 시간들을.",
        startTime: 50,
      },
      {
        content: "그리고 또 그리고 또…그래도 오늘 밤은 집에 가야겠어.",
        startTime: 65,
      },
    ],
  },
  {
    index: 13,
    title: "컴백홈",
    engTitle: "COME BACK HOME",
    playTime: "3:21",
    coverImg: images.c13,
    description: `모든 여행과 여정은 돌아가기 위함이라는 말이 있잖아요, 그런 의미에서 이 노래를 2015년 이후로 계속 쟁여두고 아껴왔던 이유가 생겼던 것 같아요.
    ​
    집으로 돌아가는 발걸음에 대한 이야기입니다. 삽화 보시면 용암 아니고요, 무지개물을 들이고 있는 겁니다.
    ​
    예전에 유투브에서, 뮤지션리그에서 데모로 들려드렸었는데, 그때는 대낮의 이미지를 가지고 만들었던 것 같아요. 밤의 이미지를 추가하고 싶어서, 귀 기울여서 잘 들어보시면, 도형이가 기타로 밤의 오로라처럼 반짝반짝 하는 걸 넣어놨어요. 그런 것도 중점적으로 들어봐주시고. 결국엔 우린 돌아갈거야, 를 말하고 싶었던 것 같아요.`,
    audioFile: audio.a13,
    lyrics: `우린 돌아갈 거야
    Come Back Home
    Come Back Home
    이젠 늦지 않으리
    Come Back Home
    Come Back Home
    집으로 돌아갈래
    이곳은 날 원치 않아
    오늘 밤 하룻 밤만이라도
    보내주오
    어두운 밤 날 감추면 Oh My Love
    Please Shine a light on me
    밝혀주오
    그림 같은 저 달빛
    그 노랠 들려주오
    그대를 찾아 돌아온 내게
    멈춘 네 심장위로 리듬을 새겨줘
    Come Back Home
    우린 돌아갈 거야
    Come Back Home
    Come Back Home
    이젠 늦지 않으리...`,
    lyricData: [
      { content: "우린 돌아갈 거야", startTime: 0 },
      { content: "Come Back Home", startTime: 2.5 },
      { content: "Come Back Home", startTime: 5 },
      { content: "이젠 늦지 않으리", startTime: 10 },
      { content: "Come Back Home", startTime: 12 },
      { content: "Come Back Home", startTime: 14 },
      { content: "집으로 돌아갈래", startTime: 19 },
      { content: "이곳은 날 원치 않아", startTime: 24 },
      { content: "오늘 밤 하룻 밤만이라도", startTime: 28.5 },
      { content: "보내주오", startTime: 35.5 },
      { content: "어두운 밤 날 감추면 Oh My Love", startTime: 38 },
      { content: "Please Shine a light on me", startTime: 45 },
      { content: "밝혀주오", startTime: 50 },
      { content: "그림 같은 저 달빛", startTime: 52.5 },
      { content: "그 노랠 들려주오", startTime: 55 },
      { content: "그대를 찾아 돌아온 내게", startTime: 57.2 },
      { content: "멈춘 네 심장위로 리듬을 새겨줘", startTime: 62 },
      { content: "Come Back Home", startTime: 68 },
      { content: "우린 돌아갈 거야", startTime: 71 },
      { content: "Come Back Home", startTime: 73 },
      { content: "Come Back Home", startTime: 75.5 },
      { content: "이젠 늦지 않으리...", startTime: 80 },
      { content: "Come Back Home", startTime: 82 },
      { content: "Come Back Home", startTime: 85 },
      { content: "Oh, oh-oh-oh-oh, oh, oh-oh-oh-oh", startTime: 90 },
      { content: "Oh, oh-oh-oh-oh, come back home (yeah)", startTime: 95 },
      { content: "Oh, oh-oh-oh-oh, oh, oh-oh-oh-oh", startTime: 100 },
      { content: "Oh, oh-oh-oh-oh, come back home, oh-whoa", startTime: 104.5 },
      {
        content: "내 사랑, 그대 외로이 지새운 밤들을 기억하오",
        startTime: 114,
      },
      { content: "오늘 밤 그대 품 안에 날 안겨 드리리", startTime: 123.5 },
      { content: "우린 돌아갈 거야", startTime: 144 },
      { content: "Come back home, come back home", startTime: 146 },
      { content: "이젠 늦지 않으리", startTime: 153 },
      { content: "Come back home, come back home, oh-whoa", startTime: 155.2 },
      { content: "Oh, oh-oh-oh-oh, oh, oh-oh-oh-oh", startTime: 163.5 },
      { content: "Oh, oh-oh-oh-oh, come back home (yeah)", startTime: 168 },
      { content: "Oh, oh-oh-oh-oh, oh, oh-oh-oh-oh", startTime: 173 },
      { content: "Oh, oh-oh-oh-oh", startTime: 177.5 },
      { content: "그림 같은 저 달빛 그 노랠 들려주오", startTime: 182 },
      { content: "그대를 찾아 돌아온 내게", startTime: 188 },
    ],
  },
];
