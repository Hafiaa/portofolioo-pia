"use client";

import { motion } from "framer-motion";
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: 'Project One',
    category: 'UI/UX Design',
    year: '2024',
    image: '/project1.jpg',
    slug: 'project-one'
  },
  {
    id: 2,
    title: 'Project Two',
    category: 'Photography',
    year: '2023',
    image: '/project2.jpg',
    slug: 'project-two'
  },
  {
    id: 3,
    title: 'Project Three',
    category: 'Event Design',
    year: '2023',
    image: '/project3.jpg',
    slug: 'project-three'
  },
  {
    id: 4,
    title: 'Project Four',
    category: 'Branding',
    year: '2023',
    image: '/project4.jpg',
    slug: 'project-four'
  }
];

export default function FeaturedProjects() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-medium text-neutral-500 uppercase tracking-wider">Featured Work</span>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-neutral-900 mt-2 mb-6">
            Selected Projects
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            A selection of my recent work across various creative disciplines.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-shadow h-full">
                <Link href={`/work/${project.slug}`} className="block">
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-neutral-100">
                    <div className="absolute inset-0 flex items-center justify-center text-neutral-300">
                      {project.title}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <span className="text-sm text-white/80">{project.category}</span>
                        <h3 className="text-xl font-medium text-white mt-1">{project.title}</h3>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <h3 className="font-medium text-neutral-900 group-hover:text-neutral-600 transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-sm text-neutral-500">{project.year}</span>
                  </div>
                </Link>
                <p className="mt-2 text-neutral-600">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link
            href="/work"
            className="inline-flex items-center text-sm font-medium text-neutral-900 hover:text-neutral-600 transition-colors group"
          >
            View all projects
            <svg
              className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
