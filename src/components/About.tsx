'use client';

import { motion } from 'framer-motion';
import AnimatedHeadshot from './AnimatedHeadshot';

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
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 dark:text-gray-300">
               I&apos;m a passionate software developer with a strong focus on Cloud, AI, and full-stack development. I enjoy exploring cutting-edge technologies and finding creative ways to leverage AI to solve real-world problems. My work often bridges the gap between scalable back-end systems and engaging front-end experiences, and I thrive on building solutions that are both impactful and innovative.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                When I&apos;m not coding, you&apos;ll usually find me at the gym, out with my camera doing photography, or picking up my guitar to unwind. I love balancing my passion for tech with creative outlets that keep me curious and energized.
              </p>
            </div>
            <AnimatedHeadshot />
          </div>
          
          {/* Skills Section */}
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-6">Skills & Technologies</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                'Python',
                'TypeScript',
                'C++',
                'Java',
                'Swift',
                'Full-Stack Development',
                'Mobile App Development',
                'REST & gRPC APIs',
                'Machine Learning',
                'LLMs & AI',
                'Cloud Infrastructure',
                'Databases',
                'DevOps & CI/CD',
                'Docker & Terraform',
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
