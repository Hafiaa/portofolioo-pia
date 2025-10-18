import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  slug: string;
  className?: string;
}

export default function ProjectCard({
  title,
  description,
  category,
  imageUrl,
  slug,
  className = '',
}: ProjectCardProps) {
  return (
    <motion.div
      className={`group relative overflow-hidden rounded-2xl bg-white shadow-md transition-shadow hover:shadow-xl ${className}`}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <Link href={`/projects/${slug}`} className="block h-full">
        <div className="relative h-64 w-full overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-white font-medium flex items-center">
              View Project <ArrowRight className="ml-2" size={16} />
            </span>
          </div>
        </div>
        <div className="p-6">
          <span className="text-sm font-medium text-primary">{category}</span>
          <h3 className="mt-1 text-xl font-semibold text-neutral-900">{title}</h3>
          <p className="mt-2 text-neutral-600">{description}</p>
        </div>
      </Link>
    </motion.div>
  );
}

interface ProjectDetailProps {
  title: string;
  description: string;
  year: string;
  role: string;
  client: string;
  images: string[];
  content: string;
}

export function ProjectDetail({
  title,
  description,
  year,
  role,
  client,
  images,
  content,
}: ProjectDetailProps) {
  return (
    <article className="max-w-5xl mx-auto">
      <AnimatedDiv className="mb-16">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 mb-4">
            {title}
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl">{description}</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-sm font-medium text-neutral-500 mb-1">Year</h3>
            <p className="text-neutral-800">{year}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-neutral-500 mb-1">Role</h3>
            <p className="text-neutral-800">{role}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-neutral-500 mb-1">Client</h3>
            <p className="text-neutral-800">{client}</p>
          </div>
        </div>
      </AnimatedDiv>

      <div className="space-y-16">
        {images.map((image, index) => (
          <AnimatedDiv key={index} delay={(index + 1) * 0.1}>
            <div className="relative w-full h-96 md:h-[600px] rounded-2xl overflow-hidden">
              <Image
                src={image}
                alt={`${title} - Image ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 80vw"
                priority={index < 2}
              />
            </div>
          </AnimatedDiv>
        ))}
      </div>

      <AnimatedDiv className="prose prose-lg max-w-3xl mx-auto my-16">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </AnimatedDiv>
    </article>
  );
}

// Helper component for animated sections
function AnimatedDiv({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px 0px' }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
