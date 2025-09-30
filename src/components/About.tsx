'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Hi! I&apos;m a passionate developer with a love for creating unique and engaging web experiences.
                I specialize in modern web technologies and always strive to push the boundaries of what&apos;s possible.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source projects,
                and sharing knowledge with the developer community.
              </p>
              <div className="flex flex-wrap gap-3">
                {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Three.js'].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl h-96 flex items-center justify-center">
              <p className="text-white text-xl font-semibold">Your Photo Here</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
