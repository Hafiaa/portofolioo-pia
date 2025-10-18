"use client";

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

export default function AboutSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-neutral-100">
              {/* Placeholder for profile image */}
              <div className="absolute inset-0 flex items-center justify-center text-neutral-400">
                <span className="text-lg">Profile Image</span>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900 mb-6">About Me</h2>
            <div className="prose text-neutral-600 mb-8">
              <p className="text-lg">
                I'm a multidisciplinary creative with a passion for visual storytelling. My work spans across design, photography, and event direction, always with a focus on creating meaningful and engaging experiences.
              </p>
              <p className="mt-4">
                With a background in visual arts and digital media, I bring a unique perspective to every project. I believe in the power of design to communicate ideas and evoke emotions, and I'm constantly exploring new ways to push creative boundaries.
              </p>
            </div>
            <Link 
              href="/about" 
              className="inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors"
            >
              More about me <ArrowRight className="ml-2" size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
