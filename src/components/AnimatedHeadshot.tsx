'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AnimatedHeadshot() {
  // Generate stable random values once during component mount


  return (
    <div className="relative w-full h-96">
      
      
      {/* Main image with hover effects */}
      <motion.div
        whileHover={{ 
          scale: 1.05, 
          rotateZ: 2,
          rotateY: 5,
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative z-10 mx-auto"
        style={{ 
          transformStyle: 'preserve-3d',
          perspective: '1000px'
        }}
      >
        {/* Glow effect behind image */}
        <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
        
        <Image
          src="/jacob-headshot.jpg"
          alt="Jacob Patag - Software Engineer"
          width={400}
          height={400}
          className="rounded-2xl object-cover w-full h-96 shadow-2xl relative"
          priority
        />
        
      </motion.div>
    </div>
  );
}