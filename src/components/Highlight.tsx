import React from 'react';
import { motion } from 'motion/react';
import { Award } from 'lucide-react';

export function Highlight() {
  return (
    <section className="py-24 bg-primary-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('/cubes.png')] invert"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <Award className="w-16 h-16 text-accent mb-6" />
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
            نَفْع للمحاماة والاستشارات القانونية
          </h2>
          <div className="w-24 h-1 bg-accent/50 mx-auto mb-8"></div>
          <p className="text-2xl md:text-3xl font-medium text-gray-300 leading-relaxed max-w-2xl">
            نخبةٌ متميزةٌ من المحامين والمستشارين في جميع المجالات القانونية.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
