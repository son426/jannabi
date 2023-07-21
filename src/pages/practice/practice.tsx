import { useState, useRef, useEffect } from "react";
import * as S from "./practice.style";
import { Canvas } from "@react-three/fiber";

function Practice() {
  return (
    <>
      <S.TestDiv>
        <S.Div1></S.Div1>
        <S.Div2></S.Div2>
        <S.Div3></S.Div3>
      </S.TestDiv>
    </>
  );
}

// // 123456 차례대로 찍었을 때, 13456 나오는 문제
// function Practice() {
//   const [currentText, setCurrentText] = useState("");

//   const textRef = useRef("123456");
//   const indexRef = useRef<number>(0);

//   useEffect(() => {
//     if (indexRef.current < textRef.current.length) {
//       setCurrentText((prev) => prev + textRef.current.charAt(indexRef.current));
//       indexRef.current++;
//     }
//   }, [currentText]);

//   return (
//     <>
//       <TestDiv>{currentText}</TestDiv>
//     </>
//   );
// }

export default Practice;
