import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}[]|:;"<>,.?/';

export default function DecryptText({ text, className = '', duration = 1000 }) {
  const [displayText, setDisplayText] = useState('');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const hasStarted = useRef(false);

  useEffect(() => {
    if (!isInView || hasStarted.current) return;
    hasStarted.current = true;

    let iteration = 0;
    const maxIterations = text.length;
    const intervalTime = duration / maxIterations;

    const interval = setInterval(() => {
      setDisplayText((prev) => {
        return text
          .split('')
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('');
      });

      if (iteration >= text.length) {
        clearInterval(interval);
      }
      
      iteration += 1 / 3; // slows down the reveal slightly for visual effect
    }, intervalTime);

    return () => clearInterval(interval);
  }, [isInView, text, duration]);

  return (
    <span ref={ref} className={`font-mono ${className}`}>
      {isInView ? displayText : ''}
    </span>
  );
}
