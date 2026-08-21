import React from 'react';
import { motion } from 'motion/react';
import { Building2, ShieldCheck, Scale } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold text-accent uppercase tracking-wider mb-2 flex items-center gap-2">
              <span className="w-1 h-6 bg-accent rounded"></span>
              من نحن
            </h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary-900 mb-6 leading-tight">
              شركة نَفْع للمحاماة والاستشارات القانونية
            </h3>
            <p className="text-lg text-primary-800/80 mb-6 leading-relaxed">
              هي شركة من الشركات الناشئة بالمملكة العربية السعودية ومتخصصة بمزاولة مهنة المحاماة والاستشارات الشرعية والقانونية وأعمال التوثيق.
            </p>
            <p className="text-lg text-primary-800/80 mb-8 leading-relaxed">
              تهتم بتقديم الخدمات القانونية بصورة احترافية في إطار من المبادئ العليا والقيم، وتهتم بالارتقاء بأنشطة نظام الأعمال تواكباً لرؤية المملكة 2030م قانونياً.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="bg-primary-900 text-white p-8 rounded-2xl aspect-square flex flex-col justify-center items-center text-center">
              <Scale className="w-10 h-10 text-accent mb-4" />
              <h4 className="text-lg font-bold mb-2">خبرة قانونية</h4>
              <p className="text-xs text-gray-300">معرفة راسخة بالأنظمة واللوائح والإجراءات</p>
            </div>
            <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm aspect-square flex flex-col justify-center items-center text-center translate-y-8">
              <Building2 className="w-10 h-10 text-accent mb-4" />
              <h4 className="text-lg font-bold mb-2 text-primary-900">رؤية 2030</h4>
              <p className="text-xs text-gray-500">الارتقاء بأنشطة نظام الأعمال تواكباً مع الرؤية</p>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
