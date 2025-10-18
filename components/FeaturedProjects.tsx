"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

export default function FeaturedProjects() {
  const projects = [
    {
      title: "Event Branding",
      description: "Complete branding and visual identity for a tech conference.",
      category: "Branding",
      imageUrl: "/images/project-1.jpg",
      slug: "event-branding"
    },
    {
      title: "Photography Series",
      description: "A personal project exploring urban landscapes and architecture.",
      category: "Photography",
      imageUrl: "/images/project-2.jpg",
      slug: "photography-series"
    },
    {
      title: "Web Design",
      description: "Modern and responsive website for a creative agency.",
      category: "Web Design",
      imageUrl: "/images/project-3.jpg",
      slug: "web-design"
    },
    {
      title: "Editorial Design",
      description: "Layout and design for a contemporary art magazine.",
      category: "Print",
      imageUrl: "/images/project-4.jpg",
      slug: "editorial-design"
    }
  ];

  return (
    <section className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900 mb-4">Featured Work</h2>
          <p className="text-neutral-600">A selection of my latest projects that showcase my skills and creative approach.</p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection key={project.slug} delay={0.1 * (index % 2 === 0 ? index : index + 1)}>
              <div className="group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-shadow h-full">
                <Link href={`/projects/${project.slug}`} className="block h-full">
                  <div className="relative h-64 w-full overflow-hidden">
                    <div className="absolute inset-0 bg-neutral-200"></div>
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white font-medium flex items-center">
                        View Project <ArrowRight className="ml-2" size={16} />
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="text-sm font-medium text-primary">{project.category}</span>
                    <h3 className="mt-1 text-xl font-semibold text-neutral-900">{project.title}</h3>
                    <p className="mt-2 text-neutral-600">{project.description}</p>
                  </div>
                </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>
        
        <AnimatedSection className="text-center mt-16">
          <Link 
            href="/projects" 
            className="inline-flex items-center px-6 py-3 border-2 border-neutral-900 text-neutral-900 rounded-full font-medium hover:bg-neutral-100 transition-colors"
          >
            View All Projects <ArrowRight className="ml-2" size={18} />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
