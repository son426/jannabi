import { styled } from "styled-components";
import backImg from "./backgreen.png";
import * as S from "./regularDetailPage1.style";
import { song } from "./data";
import { useState, useEffect, useRef } from "react";

function RegularDetailPage1() {
  const [isVisible, setIsVisible] = useState(true);
  const [currentTab, setCurrentTab] = useState<any>();

  const contentRef = useRef<HTMLDivElement[]>([]);
  const scrollYRef = useRef<number>(0);

  const TABDATA1 = ["1번", "2번", "3번", "4번", "5번"];
  const TABDATA2 = ["6번", "7번", "8번", "9번", "10번"];

  useEffect(() => {
    setCurrentTab(contentRef.current[0]);
  }, []);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > scrollYRef.current) {
  //       // 위로 스크롤
  //       setIsVisible(false);
  //     } else {
  //       // 위로 스크롤
  //       console.log("위로 스크롤");
  //       setIsVisible(true);
  //     }
  //     // 현재 스크롤 위치를 참조값으로 업데이트
  //     scrollYRef.current = window.scrollY;
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <>
      <S.BackgroundDiv />
      <S.Index isOn={isVisible}>
        <S.IndexTop>
          {TABDATA1.map((data, index) => (
            <S.IndexMenu
              key={index}
              onClick={() => {
                contentRef.current[index].scrollIntoView({
                  behavior: "smooth",
                });
                setCurrentTab(contentRef.current[index]);
              }}
              selected={contentRef.current[index] === currentTab}
            >
              {data}
            </S.IndexMenu>
          ))}
        </S.IndexTop>
        <S.IndexBottom>
          {TABDATA2.map((data, index) => (
            <S.IndexMenu
              key={index}
              onClick={() => {
                contentRef.current[index + 5].scrollIntoView({
                  behavior: "smooth",
                });
                setCurrentTab(contentRef.current[index + 5]);
              }}
              selected={contentRef.current[index + 5] === currentTab}
            >
              {data}
            </S.IndexMenu>
          ))}
        </S.IndexBottom>
      </S.Index>
      <div style={{ marginTop: "10vh" }}></div>
      {/* margin 용도 div */}
      <S.ContentDiv ref={(el: HTMLDivElement) => (contentRef.current[0] = el)}>
        1번 콘텐츠
      </S.ContentDiv>
      <S.ContentDiv ref={(el: HTMLDivElement) => (contentRef.current[1] = el)}>
        2번 콘텐츠
      </S.ContentDiv>
      <S.ContentDiv ref={(el: HTMLDivElement) => (contentRef.current[2] = el)}>
        3번 콘텐츠
      </S.ContentDiv>
      <S.ContentDiv ref={(el: HTMLDivElement) => (contentRef.current[3] = el)}>
        4번 콘텐츠
      </S.ContentDiv>
      <S.ContentDiv ref={(el: HTMLDivElement) => (contentRef.current[4] = el)}>
        5번 콘텐츠
      </S.ContentDiv>
      <S.ContentDiv ref={(el: HTMLDivElement) => (contentRef.current[5] = el)}>
        6번 콘텐츠
      </S.ContentDiv>
      <S.ContentDiv ref={(el: HTMLDivElement) => (contentRef.current[6] = el)}>
        7번 콘텐츠
      </S.ContentDiv>
      <S.ContentDiv ref={(el: HTMLDivElement) => (contentRef.current[7] = el)}>
        8번 콘텐츠
      </S.ContentDiv>
      <S.ContentDiv ref={(el: HTMLDivElement) => (contentRef.current[8] = el)}>
        9번 콘텐츠
      </S.ContentDiv>
      <S.ContentDiv ref={(el: HTMLDivElement) => (contentRef.current[9] = el)}>
        10번 콘텐츠
      </S.ContentDiv>
    </>
  );
}

export default RegularDetailPage1;
