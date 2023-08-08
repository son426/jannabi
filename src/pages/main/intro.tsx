import { useEffect, useRef, useState } from "react";
import { styled, keyframes, css } from "styled-components";
import { useRecoilState } from "recoil";
import { isIntroAtom } from "../../constants/atom";

const fadeOutAnimation = keyframes`
    0%{
        opacity : 1;
    }
    100% {
        opacity : 0;
        pointer-events:none;
    }
`;

const Wrapper = styled.div<{ end: boolean }>`
  position: fixed;
  z-index: 1;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  animation: ${({ end }) =>
    end
      ? css`
          ${fadeOutAnimation} 1s ease-in forwards
        `
      : "none"};
`;

const TextDiv = styled.div<{ end: boolean }>`
  @media screen and (min-width: 501px) {
    font-size: 3rem;
  }
  @media screen and (max-width: 500px) {
    // 모바일
    font-size: 2rem;
  }

  color: white;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  width: 100%;
  font-weight: 600;
  position: fixed;
  z-index: 999;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  animation: ${({ end }) =>
    end
      ? css`
          ${fadeOutAnimation} 1s ease-in-out 1s forwards
        `
      : "none"};
`;

function Intro() {
  const textRef1 = useRef<string>("Welcome to");
  const textRef2 = useRef<string>("Jannabi World");
  const indexRef1 = useRef<number>(0);
  const indexRef2 = useRef<number>(0);

  const [isIntro, setIsIntro] = useRecoilState(isIntroAtom);

  const [text1, setText1] = useState<string>("");
  const [text2, setText2] = useState<string>("");
  const [end, setEnd] = useState<boolean>(false);

  // 텍스트 칠때 코드
  // const intervalRef1 = useRef<NodeJS.Timer | null>(null);
  // const intervalRef2 = useRef<NodeJS.Timer | null>(null);

  // useEffect(() => {
  //   if (indexRef1.current < textRef1.current.length) {
  //     intervalRef1.current = setInterval(() => {
  //       setText1(text1 + textRef1.current[indexRef1.current]);
  //       indexRef1.current++;
  //     }, 200);
  //   }

  //   if (indexRef1.current === textRef1.current.length) {
  //     clearInterval(intervalRef1.current!);
  //     intervalRef2.current = setInterval(() => {
  //       setText2(text2 + textRef2.current[indexRef2.current]);
  //       indexRef2.current++;
  //     }, 100);
  //   }

  //   return () => clearInterval(intervalRef1.current!);
  // }, [text1]);

  // useEffect(() => {
  //   if (indexRef2.current > 0) {
  //     if (indexRef2.current < textRef2.current.length) {
  //       intervalRef2.current = setInterval(() => {
  //         setText2(text2 + textRef2.current[indexRef2.current]);
  //         indexRef2.current++;
  //       }, 100);
  //     }

  //     if (indexRef2.current === textRef2.current.length) {
  //       clearInterval(intervalRef2.current!);
  //       setEnd(true);
  //       setTimeout(() => {
  //         setIsIntro(false);
  //       }, 6000);
  //     }
  //   }

  //   return () => clearInterval(intervalRef2.current!);
  // }, [text2]);

  useEffect(() => {
    setEnd(true);
    setTimeout(() => setIsIntro(false), 2500);
  }, []);

  return (
    <>
      <Wrapper end={end}>
        {/* <TextDiv end={end}>
          <p>{text1}</p>
          <p>{text2}</p>
        </TextDiv> */}
      </Wrapper>
    </>
  );
}

export default Intro;
