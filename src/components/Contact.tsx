'use client';

import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen py-20 px-6 bg-gray-50 dark:bg-gray-900 flex items-center">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-12 text-center">Get In Touch</h2>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
            <p className="text-center text-lg text-gray-600 dark:text-gray-300 mb-8">
              I&apos;m always open to new opportunities and collaborations. Feel free to reach out!
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a
                href="mailto:your.email@example.com"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-center hover:shadow-lg transition-shadow"
              >
                Email Me
              </a>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-full font-semibold text-center hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-full font-semibold text-center hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
