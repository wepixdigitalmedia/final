import { useState, useEffect, useCallback } from "react";

const phrases = [
  "We build brands that people actually remember.",
  "We create campaigns that print money.",
  "We turn followers into paying customers.",
  "We make your competitors lose sleep.",
  "We craft stories that stop the scroll.",
];

export function useTypewriter(typingSpeed = 60, deletingSpeed = 35, pauseDuration = 2000) {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  // Blinking cursor
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  const currentPhrase = phrases[currentPhraseIndex];

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText === currentPhrase) {
      // Pause at full text then start deleting
      timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
    } else if (isDeleting && displayText === "") {
      // Move to next phrase
      setIsDeleting(false);
      setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
    } else if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayText(currentPhrase.substring(0, displayText.length - 1));
      }, deletingSpeed);
    } else {
      timeout = setTimeout(() => {
        setDisplayText(currentPhrase.substring(0, displayText.length + 1));
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentPhrase, typingSpeed, deletingSpeed, pauseDuration]);

  return { displayText, showCursor };
}
