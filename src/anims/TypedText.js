import { useState, useEffect } from "react";

const TypedText = ({ text }) => {
  const [typedText, setTypedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTypedText(text.slice(0, textIndex));
      setTextIndex((prevIndex) => prevIndex + 1);
    }, 100);
    return () => clearInterval(interval);
  }, [text, textIndex]);

  return <span>{typedText}</span>;
};

export default TypedText;
