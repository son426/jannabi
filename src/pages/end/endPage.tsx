import { useEffect, useRef, useState } from "react";
import * as S from "./endPage.style";

function EndPage() {
  const ment1 = "안녕하세요";
  const ment2 = "잔나비입니다.";
  const [text1, setText1] = useState<string>("");
  const [text2, setText2] = useState<string>("");
  const [count1, setCount1] = useState<number>(0);
  const [count2, setCount2] = useState<number>(0);

  const intervalRef1 = useRef<NodeJS.Timer | null>(null);
  const intervalRef2 = useRef<NodeJS.Timer | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    intervalRef1.current = setInterval(() => {
      setText1(text1 + ment1[count1]);
      setCount1((prev) => prev + 1);
    }, 100);

    if (count1 === ment1.length) {
      clearInterval(intervalRef1.current);
    }

    return () => {
      clearInterval(intervalRef1.current!);
    };
  }, [text1]);

  return (
    <>
      <div>{text1}</div>
      <div>{text2}</div>
    </>
  );
}

export default EndPage;
