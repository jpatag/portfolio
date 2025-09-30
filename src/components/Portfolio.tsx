'use client';

import { motion } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Project One',
    description: 'A stunning web application built with Next.js and React',
    tags: ['Next.js', 'React', 'Tailwind'],
    link: '#'
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'An interactive 3D experience using Three.js',
    tags: ['Three.js', 'WebGL', 'React'],
    link: '#'
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'A full-stack application with modern architecture',
    tags: ['TypeScript', 'Node.js', 'MongoDB'],
    link: '#'
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="min-h-screen py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-5xl font-bold mb-12 text-center">Portfolio</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow"
            >
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg mb-4 flex items-center justify-center">
                <p className="text-white font-semibold">Project Image</p>
              </div>
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
                >
                  View Project →
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
