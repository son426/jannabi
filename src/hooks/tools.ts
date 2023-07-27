// 현재 시간으로부터 몇시간 전인지 계산
// 입력 : Date / 반환 : string
export function timeForToday(value: Date): string {
  const today = new Date();
  const timeValue = new Date(value);

  const betweenTime = Math.floor(
    (today.getTime() - timeValue.getTime()) / 1000 / 60
  );
  if (betweenTime < 1) return "방금전";
  if (betweenTime < 60) {
    return `${betweenTime}분전`;
  }

  const betweenTimeHour = Math.floor(betweenTime / 60);
  if (betweenTimeHour < 24) {
    return `${betweenTimeHour}시간전`;
  }

  const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
  if (betweenTimeDay < 365) {
    return `${betweenTimeDay}일전`;
  }

  return `${Math.floor(betweenTimeDay / 365)}년전`;
}

// custom 디자인한 alert 반환
// 입력 : string / 반환 : void
export function customAlert(message: string): void {}

// 이미지 프리로드
// 입력 : 문자배열 / 반환 : void
export function imgPreload(array: string[]): void {
  array.forEach((url) => {
    let img = new Image();
    img.src = url;
  });
}

// 객체를 배열로 바꾸기
export interface IObject {
  [key: string]: string;
}
export function objectToArray(objectData: IObject): string[] {
  const urlArray: string[] = [];

  for (let objKey in objectData) {
    urlArray.push(objectData[objKey] as string);
  }
  return urlArray;
}
