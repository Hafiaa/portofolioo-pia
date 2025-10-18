"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

export default function HeroSection() {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 sm:py-32">
        <AnimatedSection className="max-w-4xl">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-neutral-900 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Hi, I'm Hafia — a multidisciplinary creative exploring design,
            photography, and event experiences.
          </motion.h1>
        </AnimatedSection>
      </div>
    </section>
  );
}
