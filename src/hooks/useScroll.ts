import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

function useScrollAnimation(
  containerRef1: React.RefObject<HTMLDivElement>,
  containerRef2: React.RefObject<HTMLDivElement>,
  lpRef: React.RefObject<HTMLDivElement>,
  albumRef: React.RefObject<HTMLDivElement>,
  boxRef1: React.RefObject<HTMLDivElement>,
  boxRef2: React.RefObject<HTMLDivElement>
) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger as any);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef1.current,
        endTrigger: containerRef1.current,
        start: "center center",
        end: "bottom top",
        markers: false,
        scrub: 1,
        toggleActions: "restart pause reverse none",
        pin: containerRef1.current,
      },
    });

    tl.to(lpRef.current, {
      x: 100,
      duration: 3,
      rotate: 180,
      scrub: 1,
    }).to(
      albumRef.current,
      {
        x: -100,
        duration: 3,
      },
      0 // the 0 here places the second tween at the beginning of the timeline
    );

    gsap.to(boxRef1.current, {
      scrollTrigger: {
        trigger: containerRef2.current,
        endTrigger: containerRef2.current,
        start: "100px center",
        end: "100px center",
        scrub: 1,
        markers: false,
      },
      y: -50,
      opacity: 1,
    });

    gsap.to(boxRef2.current, {
      scrollTrigger: {
        trigger: containerRef2.current,
        endTrigger: containerRef2.current,
        start: "250px center",
        end: "250px center",
        scrub: 1,
        markers: false,
      },
      y: -50,
      opacity: 1,
    });
  }, [containerRef1, containerRef2, lpRef, albumRef, boxRef1, boxRef2]);

  return {};
}

export default useScrollAnimation;
