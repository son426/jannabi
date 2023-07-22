import { useState, useRef, useEffect, useContext } from "react";
import * as S from "./practice.style";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { Desktop, Mobile, Tablet } from "../../components/mediaquery";
import { ThemeContext } from "styled-components";

function Practice() {
  return (
    <>
      <Desktop>
        <p>컴퓨터</p>
      </Desktop>
      <Tablet>
        <p>태블릿</p>
      </Tablet>
      <Mobile>
        <p>모바일</p>
      </Mobile>
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
