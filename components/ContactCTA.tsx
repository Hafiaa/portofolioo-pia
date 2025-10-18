"use client";

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

export default function ContactCTA() {
  return (
    <section className="py-24 bg-neutral-900 text-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Let's work together</h2>
          <p className="text-xl text-neutral-300 mb-10 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential collaboration? I'd love to hear from you.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center px-8 py-4 bg-white text-neutral-900 rounded-full font-medium hover:bg-neutral-100 transition-colors"
          >
            Get in Touch <ArrowRight className="ml-2" size={18} />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
