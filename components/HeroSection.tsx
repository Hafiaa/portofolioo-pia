"use client";

import { motion } from "framer-motion";
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center bg-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/texture.png')] opacity-5 mix-blend-multiply" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <div className="space-y-8 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <div className="space-y-2 mb-6">
              <span className="text-sm font-medium text-neutral-500 uppercase tracking-wider">Hello, I'm</span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold text-neutral-900 leading-tight">
                Hafia
              </h1>
            </div>
            
            <div className="space-y-4 max-w-2xl">
              <p className="text-xl text-neutral-600 leading-relaxed">
                A <span className="font-medium text-neutral-900">multidisciplinary creative</span> based in Indonesia, 
                crafting meaningful experiences through design, photography, and events.
              </p>
              
              <div className="flex items-center space-x-4 pt-2">
                <div className="w-2 h-2 rounded-full bg-green-400"></div>
                <span className="text-sm text-neutral-500">Available for freelance work</span>
              </div>
            </div>
            
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="pt-4"
          >
            <a
              href="#work"
              className="px-6 py-3 border border-neutral-900 hover:bg-neutral-900 hover:text-white transition-all duration-300 text-base font-medium inline-flex items-center group"
            >
              View My Work
              <svg
                className="ml-3 w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            
            <div className="mt-8 flex flex-wrap gap-4">
              {[
                { name: 'UI/UX Design', year: '2024' },
                { name: 'Photography', year: '2024' },
                { name: 'Event Design', year: '2024' }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <span className="text-sm text-neutral-500">{item.year}</span>
                  <span className="text-sm text-neutral-900 font-medium">/</span>
                  <span className="text-sm text-neutral-900 font-medium">{item.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Portrait Image - Placeholder */}
        <motion.div 
          className="relative w-full h-[500px] lg:h-[700px] rounded-3xl overflow-hidden shadow-2xl bg-neutral-100 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-neutral-300 text-lg">Portrait Image</div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/20 via-transparent to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
