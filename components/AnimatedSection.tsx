'use client';

import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';

const variants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
}

export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
  id,
}: AnimatedSectionProps) {
  return (
    <motion.section
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px 0px' }}
      custom={delay}
      variants={variants}
    >
      {children}
    </motion.section>
  );
}

export function AnimatedDiv({
  children,
  className = '',
  delay = 0,
  id,
}: AnimatedSectionProps) {
  return (
    <motion.div
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px 0px' }}
      custom={delay}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
