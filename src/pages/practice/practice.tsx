import { useState, useRef, useEffect } from "react";
import { BackgroundDiv, TestDiv } from "./practice.style";

function Practice() {
  const [currentText, setCurrentText] = useState("");

  const textRef = useRef("123456");
  const indexRef = useRef<number>(0);

  useEffect(() => {
    if (indexRef.current < textRef.current.length) {
      setCurrentText((prev) => prev + textRef.current.charAt(indexRef.current));
      indexRef.current++;
    }
  }, [currentText]);

  return (
    <>
      <TestDiv>{currentText}</TestDiv>
    </>
  );
}

export default Practice;
