import { useState, useEffect } from "react";
export const useParallax = (distance, direction = "left") => {
    const [offset, setOffset] = useState(0);
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollPos = window.scrollY;
        setOffset(direction === "left" ? -scrollPos * distance :  scrollPos * distance);
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [distance, direction]);
  
    return direction === "left" ? -offset : offset;
  }