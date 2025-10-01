'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface TimelineEvent {
  id: number;
  date: string;
  period: string;
  title: string;
  organization: string;
  location: string;
  type: 'education' | 'internship' | 'teaching';
  highlights: string[];
  logo?: string;
  emoji?: string;
  color: string;
}

const timeline: TimelineEvent[] = [
  {
    id: 1,
    date: 'May 2025 – Aug 2025',
    period: 'Summer 2025',
    title: 'Software Engineer Intern',
    organization: 'Oracle Corporation',
    location: 'Seattle, WA',
    type: 'internship',
    highlights: [
      'Built **REST APIs** with **Python/FastAPI** and internal **gRPC services** to handle high-volume healthcare data ingestion',
      'Implemented **async processing pipelines** to handle concurrent patient data streams from multiple sources',
      'Set up observability stack with **Prometheus and Grafana** to monitor service health and track **SLOs** in real-time',
      'Wrote comprehensive test suites with **pytest** to ensure reliability and catch regressions early',
      'Automated deployment pipelines using **OCI DevOps** and **Terraform** for consistent infrastructure provisioning'
    ],
    logo: '/logos/oracle.png',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 2,
    date: 'Jun 2024 – Aug 2024',
    period: 'Summer 2024',
    title: 'Software Engineer Intern',
    organization: 'L3Harris Technologies',
    location: 'Herndon, VA',
    type: 'internship',
    highlights: [
      'Developed an **end-to-end ML platform** for automated satellite imagery analysis using **YOLOv8** and **PyTorch**',
      'Fine-tuned **computer vision models** on **50k+ labeled satellite images** to detect objects and patterns',
      'Built a **full-stack application** with **React and TypeScript** that lets analysts review and validate predictions',
      'Containerized the inference pipeline with **Docker** for reproducible deployments across environments',
      'Worked with defense analysts to understand their workflow and iterate on the tool based on real feedback'
    ],
    logo: '/logos/l3harris.png',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 3,
    date: 'Aug 2023 – May 2024',
    period: 'Academic Year 2023-24',
    title: 'Teaching Assistant',
    organization: 'University of Florida, CISE Department',
    location: 'Gainesville, FL',
    type: 'teaching',
    highlights: [
      'Taught **Python fundamentals**, **data structures**, and **debugging techniques** to **80+ students** in weekly labs',
      'Helped students develop **problem-solving skills** by breaking down complex programming challenges',
      'Mentored peers through **office hours**, **code reviews**, and one-on-one sessions to build their confidence',
      'Created supplemental materials and practice problems to reinforce key concepts'
    ],
    emoji: "👩‍🏫",
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 4,
    date: 'Aug 2022 – May 2026',
    period: '2022 - Present',
    title: 'Bachelor of Science in Computer Science',
    organization: 'University of Florida',
    location: 'Gainesville, FL',
    type: 'education',
    highlights: [
      '**GPA: 3.8/4.0** — consistently on the **Dean\'s List**',
      'Deep dive into systems: **Distributed Systems**, **Operating Systems**, **Computer Networks**, **Databases**',
      'Machine Learning foundations: Built **classifiers**, **NLP models**, and **neural networks** from scratch',
      'Hands-on with **cloud infrastructure**, **containerization**, and modern **DevOps** practices'
    ],
    emoji: '🎓',
    color: 'from-blue-500 to-cyan-500'
  }
];

export default function Experience() {
  return (
    <section id="experience" className="min-h-screen py-20 px-6 bg-gradient-to-b from-transparent to-blue-50/30 dark:to-blue-950/10">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            My Journey
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            From classroom to cloud infrastructure
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 opacity-30" />

          <div className="space-y-12">
            {timeline.map((event, index) => {
              const isLeft = index % 2 === 0;
              
              return (
                <motion.div
                  key={event.id}  
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`relative flex flex-col md:flex-row gap-8 items-center ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                      viewport={{ once: true }}
                      className={`w-16 h-16 rounded-full bg-gradient-to-br ${event.color} flex items-center justify-center text-3xl shadow-lg ring-4 ring-white dark:ring-gray-900`}
                    >
                      {event.logo ? (
                        <Image
                          src={event.logo}
                          alt={`${event.organization} logo`}
                          width={48}
                          height={48}
                          className="object-contain"
                        />
                      ) : (
                        event.emoji
                      )}
                    </motion.div>
                  </div>

                  {/* Content Card */}
                  <div className={`flex-1 ml-24 md:ml-0 ${isLeft ? 'md:text-right md:pr-16' : 'md:pl-16'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      transition={{ duration: 0.2 }}
                      className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-shadow"
                    >
                      <div className={`flex flex-col gap-2 mb-4 ${isLeft ? 'md:items-end' : 'md:items-start'}`}>
                        <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-800 dark:text-blue-100 rounded-full text-sm font-semibold">
                          {event.period}
                        </span>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {event.title}
                        </h3>
                        <p className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                          {event.organization}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
                          <span>📍</span> {event.location}
                        </p>
                        <p className="text-xs text-gray-400 dark:text-gray-500">
                          {event.date}
                        </p>
                      </div>

                      <ul className={`space-y-2 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
                        {event.highlights.map((highlight, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: isLeft ? 20 : -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 + i * 0.1 }}
                            viewport={{ once: true }}
                            className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed flex items-start gap-2"
                          >
                            <span className="text-blue-500 flex-shrink-0 mt-1">•</span>
                            <span>
                              {highlight.split('**').map((part, j) => 
                                j % 2 === 0 ? part : <strong key={j} className="font-semibold text-gray-900 dark:text-white">{part}</strong>
                              )}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>

                  {/* Spacer for alignment */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
