import { useEffect, useState } from "react";

interface useIntersectionObserverProps {
  root?: null;
  rootMargin?: string;
  threshold?: number;
  onIntersect: IntersectionObserverCallback;
}

const useIntersectionObserver = ({
  root,
  rootMargin = "0px",
  threshold = 0,
  onIntersect,
}: useIntersectionObserverProps) => {
  const [targets, setTargets] = useState<HTMLElement[] | null | undefined>(
    null
  );

  useEffect(() => {
    if (!targets?.length) return;

    const observer: IntersectionObserver = new IntersectionObserver(
      onIntersect,
      { root, rootMargin, threshold }
    );

    targets.forEach((target) => observer.observe(target));

    return () => targets.forEach((target) => observer.unobserve(target));
  }, [onIntersect, root, rootMargin, targets, threshold]);

  const addTarget = (target: HTMLElement) => {
    setTargets((prevTargets) => [...(prevTargets as HTMLElement[]), target]);
  };

  return { addTarget };
};

export default useIntersectionObserver;
