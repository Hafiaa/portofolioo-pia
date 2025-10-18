"use client";

import { motion } from "framer-motion";
import Link from 'next/link';

export default function AboutSection() {
  return (
    <section className="py-20 lg:py-32 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div 
            className="relative w-full h-[400px] lg:h-[500px] rounded-2xl overflow-hidden"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="absolute inset-0 bg-neutral-100 flex items-center justify-center">
              <span className="text-neutral-300">About Image</span>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <span className="text-sm font-medium text-neutral-500 uppercase tracking-wider">About Me</span>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-neutral-900">
                Crafting meaningful experiences
              </h2>
            </div>

            <div className="space-y-4 text-neutral-600 leading-relaxed">
              <p>
                I'm a multidisciplinary creative with a passion for creating beautiful, functional, and meaningful work. 
                My approach combines aesthetic sensibility with strategic thinking to deliver solutions that not only 
                look great but also drive results.
              </p>
              
              <p>
                With a background in design and photography, I bring a unique perspective to every project, 
                ensuring that each piece tells a compelling story and creates a lasting impression.
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center text-sm font-medium text-neutral-900 hover:text-neutral-600 transition-colors group"
              >
                More about me
                <svg
                  className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
