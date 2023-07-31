import images from "@/data/images/regular3";
import audio from "@/data/audio/regular3";

// db 역할
// 이 파일에다가 더미로 작업해놓고, 후에 db로 옮기자
export interface IRegularData {
  index: number;
  title: string;
  engTitle: string;
  coverImg: string;
  hoveredImg?: string;
  playTime: string;
  description: string;
  audioFile: string;
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
  },
  {
    index: 2,
    title: "용맹한 발걸음이여",
    engTitle: "OH BRAVE MORNING SUN",
    playTime: "3:15",
    coverImg: images.c2,
    description: `이 곡에서부터 이 앨범의 구상이 시작되었어요.​
    2집의 마지막 수록곡 <꿈과 책과 힘과 벽>에서
    시작한 앨범이라고도 볼 수 있는데요,
    
    그 곡의 가사에서 나오는...
    자고나도 안 괜찮아지고
    자고나도 어른이 안 되길래
    이런 가사를 썼습니다.`,
    audioFile: audio.a2,
  },
  {
    index: 3,
    title: "비틀 파워!",
    engTitle: "A BALLAD OF NON LE JON",
    playTime: "3:05",
    coverImg: images.c3,
    description: `이 곡에서부터 이 앨범의 구상이 시작되었어요.​
    2집의 마지막 수록곡 <꿈과 책과 힘과 벽>에서
    시작한 앨범이라고도 볼 수 있는데요,
    
    그 곡의 가사에서 나오는...
    자고나도 안 괜찮아지고
    자고나도 어른이 안 되길래
    이런 가사를 썼습니다.`,
    audioFile: audio.a3,
  },
  {
    index: 4,
    title: "고백극장",
    engTitle: "CONFESSION SHOW",
    playTime: "3:08",
    coverImg: images.c4,
    description: `이 곡에서부터 이 앨범의 구상이 시작되었어요.​
    2집의 마지막 수록곡 <꿈과 책과 힘과 벽>에서
    시작한 앨범이라고도 볼 수 있는데요,
    
    그 곡의 가사에서 나오는...
    자고나도 안 괜찮아지고
    자고나도 어른이 안 되길래
    이런 가사를 썼습니다.`,
    audioFile: audio.a4,
  },
  {
    index: 5,
    title: "로맨스의 왕",
    engTitle: "THE KING OF ROMANCE",
    playTime: "3:43",
    coverImg: images.c5,
    description: `이 곡에서부터 이 앨범의 구상이 시작되었어요.​
    2집의 마지막 수록곡 <꿈과 책과 힘과 벽>에서
    시작한 앨범이라고도 볼 수 있는데요,
    
    그 곡의 가사에서 나오는...
    자고나도 안 괜찮아지고
    자고나도 어른이 안 되길래
    이런 가사를 썼습니다.`,
    audioFile: audio.a5,
  },
  {
    index: 6,
    title: "페어웰 투 암스! 요람 송가",
    engTitle: "FAREWELL TO ARMS! + HYMN FOR THE CRADLE",
    playTime: "4:39",
    coverImg: images.c6,
    description: `이 곡에서부터 이 앨범의 구상이 시작되었어요.​
    2집의 마지막 수록곡 <꿈과 책과 힘과 벽>에서
    시작한 앨범이라고도 볼 수 있는데요,
    
    그 곡의 가사에서 나오는...
    자고나도 안 괜찮아지고
    자고나도 어른이 안 되길래
    이런 가사를 썼습니다.`,
    audioFile: audio.a6,
  },
  {
    index: 7,
    title: "소년 클레이 피전",
    engTitle: "CLAY PIGEON BOY",
    playTime: "1:45",
    coverImg: images.c7,
    description: `이 곡에서부터 이 앨범의 구상이 시작되었어요.​
    2집의 마지막 수록곡 <꿈과 책과 힘과 벽>에서
    시작한 앨범이라고도 볼 수 있는데요,
    
    그 곡의 가사에서 나오는...
    자고나도 안 괜찮아지고
    자고나도 어른이 안 되길래
    이런 가사를 썼습니다.`,
    audioFile: audio.a7,
  },
  {
    index: 8,
    title: "누구를 위한 노래였던가",
    engTitle: "TIME",
    playTime: "3:42",
    coverImg: images.c8,
    description: `이 곡에서부터 이 앨범의 구상이 시작되었어요.​
    2집의 마지막 수록곡 <꿈 과 책과 힘과 벽>에서
    시작한 앨범이라고도 볼 수 있는데요,
    
    그 곡의 가사에서 나오는...
    자고나도 안 괜찮아지고
    자고나도 어른이 안 되길래
    이런 가사를 썼습니다.`,
    audioFile: audio.a8,
  },
  {
    index: 9,
    title: "밤의 공원",
    engTitle: "SUMMER ll",
    playTime: "4:46",
    coverImg: images.c9,
    description: `이 곡에서부터 이 앨범의 구상이 시작되었어요.​
    2집의 마지막 수록곡 <꿈과 책과 힘과 벽>에서
    시작한 앨범이라고도 볼 수 있는데요,
    
    그 곡의 가사에서 나오는...
    자고나도 안 괜찮아지고
    자고나도 어른이 안 되길래
    이런 가사를 썼습니다.`,
    audioFile: audio.a9,
  },
  {
    index: 10,
    title: "외딴섬 로맨틱",
    engTitle: "I KNOW WHERE THE RAINBOW HAS FALLEN",
    playTime: "3:42",
    coverImg: images.c10,
    description: `이 곡에서부터 이 앨범의 구상이 시작되었어요.​
    2집의 마지막 수록곡 <꿈과 책과 힘과 벽>에서
    시작한 앨범이라고도 볼 수 있는데요,
    
    그 곡의 가사에서 나오는...
    자고나도 안 괜찮아지고
    자고나도 어른이 안 되길래
    이런 가사를 썼습니다.`,
    audioFile: audio.a10,
  },
  {
    index: 11,
    title: "블루버드, 스프레드 유어 윙스!",
    engTitle: "BLUEBIRD, SPREAD YOUR WINGS!",
    playTime: "2:12",
    coverImg: images.c11,
    description: `이 곡에서부터 이 앨범의 구상이 시작되었어요.​
    2집의 마지막 수록곡 <꿈과 책과 힘과 벽>에서
    시작한 앨범이라고도 볼 수 있는데요,
    
    그 곡의 가사에서 나오는...
    자고나도 안 괜찮아지고
    자고나도 어른이 안 되길래
    이런 가사를 썼습니다.`,
    audioFile: audio.a11,
  },
  {
    index: 12,
    title: "굿바이 환상의 나라",
    engTitle: "GOODBYE DREAMIN' OLD STARS",
    playTime: "1:15",
    coverImg: images.c12,
    description: `이 곡에서부터 이 앨범의 구상이 시작되었어요.​
    2집의 마지막 수록곡 <꿈과 책과 힘과 벽>에서
    시작한 앨범이라고도 볼 수 있는데요,
    
    그 곡의 가사에서 나오는...
    자고나도 안 괜찮아지고
    자고나도 어른이 안 되길래
    이런 가사를 썼습니다.`,
    audioFile: audio.a12,
  },
  {
    index: 13,
    title: "컴백홈",
    engTitle: "COME BACK HOME",
    playTime: "3:21",
    coverImg: images.c13,
    description: `이 곡에서부터 이 앨범의 구상이 시작되었어요.​
    2집의 마지막 수록곡 <꿈과 책과 힘과 벽>에서
    시작한 앨범이라고도 볼 수 있는데요,
    
    그 곡의 가사에서 나오는...
    자고나도 안 괜찮아지고
    자고나도 어른이 안 되길래
    이런 가사를 썼습니다.`,
    audioFile: audio.a13,
  },
];
