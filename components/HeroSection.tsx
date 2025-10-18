"use client";

import { motion } from "framer-motion";
import Link from 'next/link';

export default function HeroSection() {
  const skills = [
    { name: 'UI/UX Design', year: '2024' },
    { name: 'Photography', year: '2024' },
    { name: 'Event Design', year: '2024' }
  ];

  return (
    <section className="min-h-screen flex items-center bg-white relative overflow-hidden py-20 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 40 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: { 
                duration: 0.8, 
                ease: [0.16, 1, 0.3, 1] 
              } 
            }}
          >
            <div className="space-y-8">
              <div>
                <motion.span 
                  className="text-sm font-medium text-neutral-500 uppercase tracking-wider inline-block mb-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Hello, I'm
                </motion.span>
                <motion.h1 
                  className="text-5xl md:text-6xl lg:text-7xl xl:text-7.5xl font-playfair font-medium text-neutral-900 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  Hafia
                </motion.h1>
                <motion.p 
                  className="mt-6 text-xl text-neutral-600 leading-relaxed max-w-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  A <span className="font-medium text-neutral-900">multidisciplinary creative</span> based in Indonesia, 
                  crafting meaningful experiences through design, photography, and events.
                </motion.p>
              </div>

              <motion.div 
                className="flex flex-wrap gap-8 mt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Link
                  href="#work"
                  className="group inline-flex items-center justify-center px-8 py-4 border-2 border-neutral-900 rounded-full text-base font-medium text-neutral-900 hover:bg-neutral-900 hover:text-white transition-all duration-300"
                >
                  <span>View My Work</span>
                  <motion.span 
                    className="ml-3 inline-block"
                    initial={{ x: 0 }}
                    whileHover={{ x: 6 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="group-hover:translate-x-1 transition-transform duration-300"
                    >
                      <path
                        d="M5 12H19M19 12L12 5M19 12L12 19"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.span>
                </Link>
                
                <div className="flex items-center">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((item) => (
                      <div 
                        key={item}
                        className="w-8 h-8 rounded-full border-2 border-white"
                        style={{
                          backgroundColor: ['#0047FF', '#00B4D8', '#FF6B6B'][item - 1],
                          zIndex: 4 - item
                        }}
                      />
                    ))}
                  </div>
                  <span className="ml-3 text-sm text-neutral-500">
                    Available for freelance work
                  </span>
                </div>
              </motion.div>

              <motion.div 
                className="pt-8 mt-12 border-t border-neutral-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <p className="text-sm text-neutral-500 mb-4">Currently working with</p>
                <div className="flex flex-wrap gap-6">
                  {skills.map((skill, index) => (
                    <div key={index} className="flex items-center">
                      <span className="text-neutral-900 font-medium">{skill.name}</span>
                      <span className="mx-2 text-neutral-300">/</span>
                      <span className="text-neutral-500">{skill.year}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Portrait Image - Placeholder */}
          <motion.div 
            className="lg:col-span-5 relative h-[500px] lg:h-[600px] xl:h-[700px] rounded-2xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              transition: { 
                duration: 0.8, 
                delay: 0.3,
                ease: [0.16, 1, 0.3, 1] 
              } 
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-100 to-neutral-200 flex items-center justify-center">
              <div className="text-neutral-300 text-xl">Portrait</div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/30 via-neutral-900/0 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
