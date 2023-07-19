import { useEffect, useRef, useState } from "react";
import { styled, keyframes, css } from "styled-components";

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
          ${fadeOutAnimation} 3s ease-in 2s forwards
        `
      : "none"};
`;

const TextDiv = styled.div<{ end: boolean }>`
  color: white;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  font-size: 3rem;
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
          ${fadeOutAnimation} 2s ease-in-out forwards
        `
      : "none"};
`;

function Intro() {
  const textRef1 = useRef<string>("Welcome to");
  const textRef2 = useRef<string>("Jannabi World");
  const indexRef1 = useRef<number>(0);
  const indexRef2 = useRef<number>(0);

  const [text1, setText1] = useState<string>("");
  const [text2, setText2] = useState<string>("");
  const [end, setEnd] = useState<boolean>(false);

  const intervalRef1 = useRef<NodeJS.Timer | null>(null);
  const intervalRef2 = useRef<NodeJS.Timer | null>(null);

  useEffect(() => {
    if (indexRef1.current < textRef1.current.length) {
      intervalRef1.current = setInterval(() => {
        setText1(text1 + textRef1.current[indexRef1.current]);
        indexRef1.current++;
      }, 200);
    }

    if (indexRef1.current === textRef1.current.length) {
      clearInterval(intervalRef1.current!);
      intervalRef2.current = setInterval(() => {
        setText2(text2 + textRef2.current[indexRef2.current]);
        indexRef2.current++;
      }, 100);
    }

    return () => clearInterval(intervalRef1.current!);
  }, [text1]);

  useEffect(() => {
    if (indexRef2.current > 0) {
      if (indexRef2.current < textRef2.current.length) {
        intervalRef2.current = setInterval(() => {
          setText2(text2 + textRef2.current[indexRef2.current]);
          indexRef2.current++;
        }, 100);
      }

      if (indexRef2.current === textRef2.current.length) {
        clearInterval(intervalRef2.current!);
        setEnd(true);
      }
    }

    return () => clearInterval(intervalRef2.current!);
  }, [text2]);

  return (
    <>
      <Wrapper end={end}>
        <TextDiv end={end}>
          <p>{text1}</p>
          <p>{text2}</p>
        </TextDiv>
      </Wrapper>
    </>
  );
}

export default Intro;
