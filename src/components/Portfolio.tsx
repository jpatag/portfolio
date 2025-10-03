'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  link?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Idioma',
    description: 'iOS language learning app that leverages LLMs to simplify international news articles to different CEFR proficiency levels (A2-C1), helping users read authentic content in their target language.',
    tags: ['Swift', 'TypeScript', 'OpenAI API', 'Langchain', 'Firebase', 'Firestore', 'NewsAPI', 'Node.js'],
    image: '/projects/idioma.png',
    link: 'https://github.com/jpatag/Idioma-ios'
  },
  {
    id: 2,
    title: 'Personal Website',
    description: 'The website you are currently viewing!',
    tags: ['Three.js', 'React', 'TypeScript', 'Framer Motion', 'Tailwind CSS'],
    image: '/projects/website.png',
    link: 'https://github.com/jpatag/portfolio'
  }
  
];

export default function Portfolio() {
  return (
    <section id="projects" className="min-h-screen pt-20 pb-8 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-5xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow"
            >
              <div className="relative h-64 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg mb-6 overflow-hidden">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <p className="text-white font-semibold">Project Image</p>
                  </div>
                )}
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
