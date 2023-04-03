import React, { useEffect, useState } from "react";
import {
  CustomCursorTracker,
  CustomCursorContainer,
} from "../styles/global/Cursor";

const CustomCursor = (colour) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <CustomCursorContainer
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      />
      <CustomCursorTracker
        style={{
          transform: `translate(${position.x - 10}px, ${position.y - 10}px)`,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
};

export default CustomCursor;
