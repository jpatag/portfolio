'use client';

import { motion } from 'framer-motion';

interface Accomplishment {
  id: number;
  year: string;
  title: string;
  description: string;
  icon: string;
}

const accomplishments: Accomplishment[] = [
  {
    id: 1,
    year: '2024',
    title: 'Achievement One',
    description: 'Description of your major accomplishment',
    icon: '🏆'
  },
  {
    id: 2,
    year: '2023',
    title: 'Achievement Two',
    description: 'Another significant milestone in your journey',
    icon: '🎯'
  },
  {
    id: 3,
    year: '2022',
    title: 'Achievement Three',
    description: 'A notable recognition or certification',
    icon: '⭐'
  },
];

export default function Accomplishments() {
  return (
    <section id="accomplishments" className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-5xl font-bold mb-12 text-center">Accomplishments</h2>
        <div className="space-y-8">
          {accomplishments.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-6 items-start"
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-3xl">
                  {item.icon}
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-2">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm font-semibold">
                    {item.year}
                  </span>
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
