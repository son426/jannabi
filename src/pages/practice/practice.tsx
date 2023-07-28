import {
  useState,
  useRef,
  useEffect,
  useContext,
  useLayoutEffect,
} from "react";
import * as S from "./practice.style";
import { Desktop, Mobile, Tablet } from "../../components/mediaquery";
import { gsap } from "gsap";

function Practice() {
  const [scrollHeight, setScrollHeight] = useState<number>(0);
  const boxRef1 = useRef<HTMLDivElement>(null);
  const boxRef2 = useRef<HTMLDivElement>(null);
  const boxRef3 = useRef<HTMLDivElement>(null);
  const boxRef4 = useRef<HTMLDivElement>(null);

  //

  // useEffect(() => {
  //   gsap.to(boxRef1.current, {
  //     scrollTrigger: {
  //       trigger: boxRef1.current,
  //       markers: true,
  //       start: "top center",
  //       scrub: true,
  //     },
  //     x: 400,
  //     duration: 4,
  //   });
  // }, [scrollHeight]);

  return (
    <>
      <S.Container>
        <S.Div1 ref={boxRef1}></S.Div1>
        <S.MarginDiv ref={boxRef3}></S.MarginDiv>
        <S.Div2 ref={boxRef2}></S.Div2>

        <S.ScrollDiv ref={boxRef4}></S.ScrollDiv>
      </S.Container>
    </>
  );
}

// function Practice() {
//   const cards = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

//   const [currentIndex, setCurrentIndex] = useState(1);

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex - 1 < 0 ? cards.length - 1 : prevIndex - 1
//     );
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
//   };

//   return (
//     <>
//       <Desktop>
//         <>
//           <S.CardContainer nowIndex={currentIndex}>
//             {cards.map((card, index) => (
//               <S.Card key={card.id} iscenter={index === currentIndex}>
//                 {card.id}
//               </S.Card>
//             ))}
//           </S.CardContainer>
//           <button onClick={handlePrev}>Prev</button>
//           <button onClick={handleNext}>Next</button>
//         </>
//       </Desktop>
//       <Tablet>
//         <p>태블릿</p>
//       </Tablet>
//       <Mobile>
//         <>
//           <S.Div1>
//             123
//             <S.Div2>
//               <S.Div3></S.Div3>
//             </S.Div2>
//           </S.Div1>
//         </>
//       </Mobile>
//     </>
//   );
// }

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
