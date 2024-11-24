import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top
  }, [pathname]);

  useEffect(() => {
    const storedScrollPosition = sessionStorage.getItem("scrollPosition");
    if (storedScrollPosition) {
      const [x, y] = storedScrollPosition.split(",").map(Number);
      window.scrollTo(x, y);
    }

    const saveScrollPosition = () => {
      const { scrollX, scrollY } = window;
      sessionStorage.setItem("scrollPosition", `${scrollX},${scrollY}`);
    };

    window.addEventListener("beforeunload", saveScrollPosition);
    return () => {
      window.removeEventListener("beforeunload", saveScrollPosition);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default ScrollToTop;
