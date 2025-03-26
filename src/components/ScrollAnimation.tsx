import React, { ReactNode } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

interface ScrollAnimationProps {
  children: ReactNode;
  threshold?: number;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  once?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  threshold = 0.1,
  delay = 0,
  duration = 0.5,
  direction = 'up',
  distance = 50,
  once = true,
  className,
  style
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: once,
    threshold: threshold,
  });

  // Determina a direção da animação
  const getDirectionOffset = () => {
    switch (direction) {
      case 'up':
        return { y: distance };
      case 'down':
        return { y: -distance };
      case 'left':
        return { x: distance };
      case 'right':
        return { x: -distance };
      case 'none':
        return {};
      default:
        return { y: distance };
    }
  };

  const initial = {
    opacity: 0,
    ...getDirectionOffset(),
  };

  const animate = {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: duration,
      delay: delay,
      ease: 'easeOut',
    },
  };

  useEffect(() => {
    if (inView) {
      controls.start(animate);
    } else if (!once) {
      controls.start(initial);
    }
  }, [controls, inView, once, animate, initial]);

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={controls}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation; 