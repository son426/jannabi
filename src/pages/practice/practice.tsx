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
import { wrapGrid } from "animate-css-grid";
import { regularData3 } from "@/data/meta/regular3";
import Draggable, { DraggableData } from "react-draggable";
import Spinner from "@/data/images/spinner.gif";
import Soundwave from "@/components/soundwave";

// svg

function Practice() {
  const [stop, setStop] = useState(false);

  return (
    <>
      <button onClick={() => setStop((prev) => !prev)}>stop</button>
    </>
  );
}

// 드래그
// function Practice() {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [menuVisible, setMenuVisible] = useState(false);
//   const [dragged, setDragged] = useState(false); // State to track if drag has occurred

//   const handleDrag = (data: DraggableData) => {
//     setPosition({ x: data.x, y: data.y });
//     setDragged(true); // Set to true when drag starts
//   };
//   const handleClick = () => {
//     if (!dragged) {
//       setMenuVisible((prev) => !prev);
//     }
//     setDragged(false);
//   };

//   return (
//     <>
//       <Draggable onDrag={(e, data) => handleDrag(data)}>
//         <S.DragDiv1 onClick={handleClick}>
//           <div>draggable box</div>
//           <div>
//             x:{position.x.toFixed(0)} y:{position.y.toFixed(0)}
//           </div>
//         </S.DragDiv1>
//       </Draggable>
//       {menuVisible && <S.MenuDiv></S.MenuDiv>}
//       <S.DragDiv1>123</S.DragDiv1>
//       <S.DragDiv1>123</S.DragDiv1>
//     </>
//   );
// }

// // line break 애니메이션
// function Practice() {
//   const [testBoolean, setTestBoolean] = useState<boolean>(false);
//   const [size, setSize] = useState<string>("33%");
//   const [nowIndex, setNowIndex] = useState<number>(0);
//   const [infoVisible, setInfoVisible] = useState<boolean>(true);

//   const albumData = regularData3;

//   const gridRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (gridRef.current)
//       wrapGrid(gridRef.current, {
//         duration: 500,
//       });
//   }, []);

//   return (
//     <>
//       <S.Container ref={gridRef} isboolean={testBoolean}>
//         {regularData3.map((album, index) => (
//           <S.CardDiv
//             key={index}
//             onClick={() => {
//               setNowIndex(index);
//             }}
//             isboolean={index === nowIndex}
//             img={album.coverImg}
//             className={index === nowIndex ? "expanded" : ""}
//           >
//             {index === nowIndex && (
//               <S.FocusedCardInfo isboolean={index === nowIndex}>
//                 <S.CardRow1 isboolean={index === nowIndex}>
//                   <div>Track {album.index}</div>
//                   <div>{album.playTime}</div>
//                 </S.CardRow1>
//                 <S.CardRow2 isboolean={index === nowIndex}>
//                   <S.Column1>
//                     <div className="kor">{album.title}</div>
//                     <div className="eng">{album.engTitle}</div>
//                   </S.Column1>
//                 </S.CardRow2>

//                 {index === nowIndex && (
//                   <S.CardRow4>
//                     <S.CardRowColumn1>
//                       <div>{album?.description}</div>
//                     </S.CardRowColumn1>
//                     <S.CardRowColumn2>
//                       <div className="row1">전체 가사보기</div>
//                       <div className="row2">{album?.lyrics}</div>
//                     </S.CardRowColumn2>
//                   </S.CardRow4>
//                 )}
//               </S.FocusedCardInfo>
//             )}
//             {index !== nowIndex && (
//               <S.CardInfo isboolean={index === nowIndex}>
//                 <S.CardRow1 isboolean={index === nowIndex}>
//                   <div>Track {album.index}</div>
//                   <div>{album.playTime}</div>
//                 </S.CardRow1>
//                 <S.CardRow2 isboolean={index === nowIndex}>
//                   <S.Column1>
//                     <div className="kor">{album.title}</div>
//                     <div className="eng">{album.engTitle}</div>
//                   </S.Column1>
//                 </S.CardRow2>

//                 {index === nowIndex && (
//                   <S.CardRow4>
//                     <S.CardRowColumn1>
//                       <div>{album?.description}</div>
//                     </S.CardRowColumn1>
//                     <S.CardRowColumn2>
//                       <div className="row1">전체 가사보기</div>
//                       <div className="row2">{album?.lyrics}</div>
//                     </S.CardRowColumn2>
//                   </S.CardRow4>
//                 )}
//               </S.CardInfo>
//             )}
//           </S.CardDiv>
//         ))}
//       </S.Container>
//     </>
//   );
// }

// // gsap
// function Practice() {
//   const [scrollHeight, setScrollHeight] = useState<number>(0);
//   const rootRef = useRef<HTMLDivElement>(null);
//   const boxRef1 = useRef<HTMLDivElement>(null);
//   const boxRef2 = useRef<HTMLDivElement>(null);
//   const boxRef3 = useRef<HTMLDivElement>(null);
//   const boxRef4 = useRef<HTMLDivElement>(null);
//   const boxRef5 = useRef<HTMLDivElement>(null);

//   //

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger as any);
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: boxRef1.current,
//         endTrigger: boxRef2.current,
//         start: "center center",
//         end: "bottom center",
//         markers: true,
//         scrub: 1,
//         toggleActions: "restart pause reverse none",
//         pin: boxRef1.current,
//       },
//     });

//     tl.to(boxRef3.current, {
//       x: 50,
//       duration: 3,
//       rotate: 360,
//       scrub: 1,
//     }).to(
//       boxRef2.current,
//       {
//         x: -50,
//         duration: 3,
//       },
//       0 // the 0 here places the second tween at the beginning of the timeline
//     );
//   }, []);

//   return (
//     <>
//       <S.Container ref={rootRef}>
//         <S.Container1 ref={boxRef1}>
//           <S.Div2 ref={boxRef2}></S.Div2>
//           <S.Div3 ref={boxRef3}></S.Div3>
//         </S.Container1>
//         <S.Container2 ref={boxRef4}>
//           <S.Div4 ref={boxRef5}></S.Div4>
//         </S.Container2>
//       </S.Container>
//     </>
//   );
// }

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
