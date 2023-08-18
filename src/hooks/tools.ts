import { getStorage, ref, getDownloadURL, listAll } from "firebase/storage";

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
export function imgPreload(array: string[]): Promise<void[]> {
  const promises = array.map((url) => {
    return new Promise<void>((resolve, reject) => {
      const img = new Image();
      img.src = url;

      img.onload = () => resolve();
      img.onerror = (error) => reject(error);
    });
  });

  return Promise.all(promises);
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

// 1번 요소가 2번 요소에 겹치는지 아닌지 판단
export function commentOverlapsWithForm(
  commentLiElement: HTMLLIElement | null,
  commentFormRef: React.RefObject<HTMLFormElement>
) {
  if (!commentFormRef.current || !commentLiElement) {
    return false;
  }
  const commentLiRect = commentLiElement.getBoundingClientRect();
  const commentFormRect = commentFormRef.current.getBoundingClientRect();

  return commentLiRect.bottom - 15 >= commentFormRect.top;
}

export const fetchImages = async (path: string): Promise<string[]> => {
  const storage = getStorage();
  const listRef = ref(storage, `image/${path}`);
  const result = await listAll(listRef);

  const urlPromises = result.items.map((imageRef) => getDownloadURL(imageRef));
  return Promise.all(urlPromises);
};

// 파이어베이스에서 이미지 로드
// export const loadImages = async (path: string) => {
//   const urls = await fetchImages(path);

//   urls.map((url) => {
//     const img = new Image();
//     img.src = url;
//   });

//   const promises = urls.map((url: string) => {
//     return new Promise<void>((resolve, reject) => {
//       const img = new Image();
//       img.src = url;

//       img.onload = () => resolve();
//       img.onerror = (error) => {
//         console.error("Image preload error:", error);
//         console.error("Failed URL:", url);
//         reject(error);
//       };
//     });
//   });

//   return Promise.all(promises);
// };

export const loadImages = async (path: string) => {
  const urls = await fetchImages(path);
  return urls;
};

export const fetchAudios = async (path: string): Promise<string[]> => {
  const storage = getStorage();
  const listRef = ref(storage, `audio/${path}`);
  const result = await listAll(listRef);

  const urlPromises = result.items.map((audioRef) => getDownloadURL(audioRef));
  return Promise.all(urlPromises);
};

export const loadAudios = async (path: string) => {
  const urls = await fetchAudios(path);
  return urls;
};
