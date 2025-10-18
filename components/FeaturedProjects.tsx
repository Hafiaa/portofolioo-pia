"use client";

import { motion } from "framer-motion";
import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: "Bold Branding",
    category: "Brand Identity",
    year: "2024",
    slug: "bold-branding",
    color: "#0047FF"
  },
  {
    id: 2,
    title: "Minimal Web Design",
    category: "Web Design",
    year: "2024",
    slug: "minimal-web-design",
    color: "#00B4D8"
  },
  {
    id: 3,
    title: "Editorial Design",
    category: "Print",
    year: "2023",
    slug: "editorial-design",
    color: "#FF6B6B"
  },
];

export default function FeaturedProjects() {
  return (
    <section className="py-24 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-sm font-medium text-neutral-500 tracking-wider block mb-3">
            Selected Works
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-medium text-neutral-900 leading-tight max-w-4xl">
            A curated selection of my best work
          </h2>
        </motion.div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="group relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: { 
                  duration: 0.8, 
                  ease: [0.16, 1, 0.3, 1],
                  delay: index * 0.1
                } 
              }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Link href={`/work/${project.slug}`} className="block">
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-md transition-all duration-500">
                  {/* Project Image Placeholder */}
                  <div 
                    className="aspect-[4/3] w-full relative overflow-hidden"
                    style={{ backgroundColor: `${project.color}10` }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div 
                        className="w-32 h-32 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: project.color }}
                        initial={{ scale: 0.9, opacity: 0.8 }}
                        whileHover={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <span className="text-white font-medium text-lg">
                          {project.title.split(' ')[0]}
                        </span>
                      </motion.div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-playfair font-medium text-neutral-900 group-hover:text-neutral-700 transition-colors">
                          {project.title}
                        </h3>
                        <p className="mt-1 text-neutral-500">
                          {project.category} • {project.year}
                        </p>
                      </div>
                      <motion.span 
                        className="text-neutral-400 group-hover:text-neutral-900 transition-colors text-2xl"
                        initial={{ x: 0 }}
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.3 }}
                      >
                        →
                      </motion.span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link
            href="/work"
            className="group inline-flex items-center justify-center px-8 py-4 border-2 border-neutral-900 rounded-full text-base font-medium text-neutral-900 hover:bg-neutral-900 hover:text-white transition-all duration-300"
            aria-label="View all projects"
          >
            <span>View All Projects</span>
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
        </motion.div>
      </div>
    </section>
  );
}
