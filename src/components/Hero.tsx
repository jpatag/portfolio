'use client';

import { motion } from 'framer-motion';
import FloatingGeometry3D from './FloatingGeometry3D';

export default function Hero() {
  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    portfolioSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Unique Floating Geometry 3D Background */}
      <FloatingGeometry3D />
      
      <div className="container mx-auto px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Jacob Patag
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4">
            CS Senior passionate about building impactful software
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-400 mb-8">
            Seeking New Graduate Software Engineering roles for 2026
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
  
          </div>
        </motion.div>
      </div>
    </section>
  );
}
