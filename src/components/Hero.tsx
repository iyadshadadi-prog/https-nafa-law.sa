import React from 'react';
import { motion } from 'motion/react';
import { Scale } from 'lucide-react';
import { Logo } from './Logo';

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-primary-900 text-white md:rounded-b-3xl">
      {/* Background Pattern */}
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-accent opacity-10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
        <div className="max-w-3xl flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <Logo className="w-32 h-32 md:w-40 md:h-40 text-accent mb-8" />
            <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-6">
              <span className="sr-only">شركة نفع للمحاماة والاستشارات القانونية - </span>
              ثقة تُبنى...<br />
              <span className="text-accent">وعدالة تُنجز</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl">
              ابدأ خطوتك القانونية الأولى معنا.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="inline-flex justify-center items-center px-8 py-3.5 bg-accent text-white font-bold text-sm hover:bg-accent/90 transition-colors rounded"
              >
                اطلـب استشــارتك القانونية
              </a>
              <a 
                href="#services" 
                className="inline-flex justify-center items-center px-8 py-3.5 border border-gray-600 text-white font-bold text-sm hover:bg-white/5 transition-colors rounded"
              >
                اكتشف خدماتنا
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
