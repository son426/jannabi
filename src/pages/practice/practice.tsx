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
import { ScrollTrigger } from "gsap/all";

function Practice() {
  const [scrollHeight, setScrollHeight] = useState<number>(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const boxRef1 = useRef<HTMLDivElement>(null);
  const boxRef2 = useRef<HTMLDivElement>(null);
  const boxRef3 = useRef<HTMLDivElement>(null);
  const boxRef4 = useRef<HTMLDivElement>(null);

  //

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Our animations can use selector text like ".box"
      // this will only select '.box' elements that are children of the component
      gsap.registerPlugin(ScrollTrigger as any);

      gsap.to(boxRef3.current, {
        scrollTrigger: {
          trigger: boxRef1.current,
          endTrigger: boxRef1.current,
          start: "0px 0px",
          end: "1000px 300px",
          markers: true,
          scrub: 1,
          // 속도인듯. true하면 엄청 빠르고, 숫자 크게 줄수록 느려짐.
          // 그리고 scrub 하면 역스크롤할때 되돌아가는 것도 되는듯.
          toggleActions: "restart pause reverse none", //
          pin: boxRef1.current, // 스크롤하는동안 pinning
        },
        x: 50, //
      });
    }, rootRef); // <- IMPORTANT! Scopes selector text

    return () => ctx.revert(); // cleanup
  }, []);

  return (
    <>
      <S.Container ref={rootRef}>
        <S.Container1 ref={boxRef1}>
          <S.Div2 ref={boxRef2}></S.Div2>
          <S.Div3 ref={boxRef3}></S.Div3>
        </S.Container1>
        <S.Container2 ref={boxRef4}></S.Container2>
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
