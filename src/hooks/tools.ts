// 현재 시간으로부터 몇시간 전인지 계산

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

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

// 화면 이동시, 스크롤 탑으로.
// export function ScrollTop() {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     if (pathname.includes("regular")) console.log(pathname);
//     console.log(pathname.includes("regulardetail"));
//   }, [pathname]);

//   return null;
// }
