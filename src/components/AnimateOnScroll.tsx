'use client';

import { motion } from 'framer-motion';

interface AnimateOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

export function AnimateOnScroll({
  children,
  className = '',
  delayMs = 0,
  direction = 'up',
}: AnimateOnScrollProps) {
  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { y: 35, opacity: 0 };
      case 'down':
        return { y: -35, opacity: 0 };
      case 'left':
        return { x: 40, opacity: 0 };
      case 'right':
        return { x: -40, opacity: 0 };
      case 'none':
        return { opacity: 0, scale: 0.95 };
      default:
        return { y: 35, opacity: 0 };
    }
  };

  return (
    <motion.div
      initial={getInitialPosition()}
      whileInView={{
        x: 0,
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.6,
          delay: delayMs / 1000,
          ease: [0.22, 1, 0.36, 1],
        },
      }}
      viewport={{ once: false, amount: 0.15 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
