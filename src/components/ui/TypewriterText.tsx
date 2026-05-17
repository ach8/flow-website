import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypewriterTextProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 2000
}) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  // Blinking cursor effect
  useEffect(() => {
    const timeout2 = setTimeout(() => setBlink((prev) => !prev), 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  useEffect(() => {
    if (index === words.length) {
      setIndex(0);
      return;
    }

    if (subIndex === words[index].length + 1 && !isDeleting) {
      setTimeout(() => setIsDeleting(true), pauseTime);
      return;
    }

    if (subIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, Math.max(isDeleting ? deletingSpeed : typingSpeed, parseInt((Math.random() * 50).toFixed(0))));

    return () => clearTimeout(timeout);
  }, [subIndex, index, isDeleting, words, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className="inline-flex">
      {words[index].substring(0, subIndex)}
      <motion.span
        animate={{ opacity: blink ? 1 : 0 }}
        transition={{ duration: 0.1 }}
        className="w-[2px] h-[1em] bg-blue-400 ml-[1px] inline-block -mb-1"
      />
    </span>
  );
};

export default TypewriterText;
