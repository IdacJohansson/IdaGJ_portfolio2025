import { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

export const EncryptedText = ({ text, interval }) => {
  const [outputText, setOutputText] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  const chars = '"!@#$%^&*()_+-=[]{}|;:,.<>?/∆ΣØΞΨÆ¤¥£¢"';

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      i++;
      if (i <= text.length) {
        setOutputText(text.slice(0, i));
      } else {
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [text, interval]);

  const remainder =
    outputText.length < text.length
      ? text
          .slice(outputText.length)
          .split("")
          .map(() => chars[Math.floor(Math.random() * chars.length)])
          .join("")
      : "";

  if (!isMounted) {
    return null;
  }

  const animatedText = outputText + remainder;

  return (
    <div className="d-flex justify-content-center align-items-center heading animate__animated animate__fadeIn w-100">
      <SyntaxHighlighter
        language="json"
        wrapLines={true}
        wrapLongLines={true}
        showLineNumbers={true}
        className="custom-style"
        customStyle={{
          fontSize: "12px",
        }}
        codeTagProps={{
          style: {
            color: "black",
          },
        }}
      >
        {animatedText}
      </SyntaxHighlighter>
    </div>
  );
};
