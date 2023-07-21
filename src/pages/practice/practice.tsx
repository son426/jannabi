import { useState, useRef, useEffect } from "react";
import * as S from "./practice.style";
import { Canvas } from "@react-three/fiber";

function Practice() {
  return (
    <>
      <S.TestDiv></S.TestDiv>
      <S.Div style={{ opacity: 0.99 }}>
        <span className="red">1</span>
      </S.Div>
      <S.Div>
        <span className="green">2</span>
      </S.Div>
      <S.Div>
        <span className="blue">3</span>
      </S.Div>
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
