import Link from 'next/link';
import { Instagram, Mail, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-serif font-bold mb-4">Let's create something amazing together.</h2>
            <p className="text-neutral-300 max-w-md">
              Interested in working together or have a project in mind? I'd love to hear from you.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-neutral-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-neutral-300 hover:text-white transition-colors">About</Link></li>
              <li><Link href="/projects" className="text-neutral-300 hover:text-white transition-colors">Projects</Link></li>
              <li><Link href="/contact" className="text-neutral-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="mailto:hello@hafia.com" 
                className="text-neutral-300 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-neutral-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-400 text-sm">
            © {currentYear} Hafia. All rights reserved.
          </p>
          <p className="text-neutral-400 text-sm mt-4 md:mt-0">
            Built with Next.js, Tailwind CSS, and ♥
          </p>
        </div>
      </div>
    </footer>
  );
}
