import { useState, useRef, useEffect, useContext } from "react";
import * as S from "./practice.style";

import { Desktop, Mobile, Tablet } from "../../components/mediaquery";

function Practice() {
  const [scrollHeight, setScrollHeight] = useState<number>(0);
  const [isScrolledMany, setIsScrolledMany] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollHeight(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsScrolledMany(scrollHeight >= 1000);
  }, [scrollHeight]);

  return (
    <>
      <div>123</div>
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
