import { useEffect, useRef, useState } from "react";

// 재사용성을 고려하면 handleScroll를 인자로 받을 수도 있을 듯.

export function useScroll() {
  const [isVisible, setIsVisible] = useState(true); // scroll 관련

  const beforePosition = useRef(document.documentElement.scrollTop);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const handleScroll = () => {
    const afterPosition = document.documentElement.scrollTop;

    if (afterPosition > 500) {
      if (beforePosition.current < afterPosition) {
        clearTimeout(timeoutRef.current);

        // Delay the execution of callback1
        timeoutRef.current = setTimeout(() => {
          setIsVisible(false);
        }, 5);
      } else {
        // 스크롤 위로 할때 보이게
        setIsVisible(true);
      }
    } else {
      // 젤 윗부분
    }
    beforePosition.current = afterPosition;
  };

  // index visible 처리
  // 스크롤 down 할 때 없어지고
  // 스크롤 up 할 때 보이고
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { isVisible };
}
