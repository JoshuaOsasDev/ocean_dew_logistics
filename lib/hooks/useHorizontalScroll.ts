// hooks/useHorizontalScroll.ts (or utils/useHorizontalScroll.ts)
import { useState, useEffect, useRef, RefObject } from "react";

interface UseHorizontalScrollReturn {
  scrollRef: RefObject<HTMLDivElement | null>;
  showLeftArrow: boolean;
  showRightArrow: boolean;
  scrollLeft: () => void;
  scrollRight: () => void;
  checkScroll: () => void;
}

export function useHorizontalScroll(
  scrollAmount: number = 200,
): UseHorizontalScrollReturn {
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 5);
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  return {
    scrollRef,
    showLeftArrow,
    showRightArrow,
    scrollLeft,
    scrollRight,
    checkScroll,
  };
}
