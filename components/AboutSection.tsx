"use client";

import { motion } from "framer-motion";
import Link from 'next/link';

export default function AboutSection() {
  const stats = [
    { value: "5+", label: "Years Experience" },
    { value: "50+", label: "Projects Completed" },
    { value: "30+", label: "Happy Clients" }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <motion.div 
            className="lg:col-span-7 order-2 lg:order-1"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ 
              opacity: 1, 
              x: 0,
              transition: { 
                duration: 0.8, 
                ease: [0.16, 1, 0.3, 1] 
              } 
            }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="relative w-full h-[400px] lg:h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-neutral-100 to-neutral-200">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-neutral-300 text-xl">About Me</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/30 via-neutral-900/0 to-transparent" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="lg:col-span-5 order-1 lg:order-2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              transition: { 
                duration: 0.8, 
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1] 
              } 
            }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="text-sm font-medium text-neutral-500 uppercase tracking-wider inline-block">
                  About Me
                </span>
                <h2 className="text-4xl md:text-5xl font-playfair font-medium text-neutral-900 leading-tight">
                  Crafting meaningful experiences
                </h2>
              </div>

              <div className="space-y-6 text-neutral-600 leading-relaxed">
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

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                {stats.map((stat, index) => (
                  <motion.div 
                    key={index}
                    className="p-4 bg-neutral-50 rounded-xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ 
                      opacity: 1, 
                      y: 0,
                      transition: { 
                        delay: 0.3 + (index * 0.1),
                        duration: 0.5,
                        ease: [0.16, 1, 0.3, 1] 
                      } 
                    }}
                    viewport={{ once: true }}
                  >
                    <p className="text-2xl font-bold text-neutral-900">{stat.value}</p>
                    <p className="text-sm text-neutral-500 mt-1">{stat.label}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                className="pt-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    delay: 0.5,
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1] 
                  } 
                }}
                viewport={{ once: true }}
              >
                <Link
                  href="/about"
                  className="group inline-flex items-center text-base font-medium text-neutral-900 hover:text-neutral-700 transition-colors"
                >
                  More about me
                  <motion.span 
                    className="ml-2 inline-block"
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
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
