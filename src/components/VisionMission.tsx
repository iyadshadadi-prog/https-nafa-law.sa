import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Compass, Heart } from 'lucide-react';

export function VisionMission() {
  return (
    <section id="vision" className="py-24 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-accent uppercase tracking-wider mb-2 flex items-center justify-center gap-2">
            <span className="w-1 h-6 bg-accent rounded"></span>
            مبادئنا
          </h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary-900 mb-6">
            رسالتنا ورؤيتنا وأهدافنا
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-surface/5 border border-surface/10 p-8 md:p-10 rounded-sm backdrop-blur-sm"
          >
            <div className="flex items-center gap-4 mb-4 p-3 bg-gray-50 rounded-lg inline-flex">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-gray-200 text-accent">
                <Compass className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-primary-900">رسالتنا</h4>
            </div>
            <p className="text-gray-600 leading-relaxed text-xs">
              الالتزام بتقديم حلول قانونية مبتكرة وموثوقة لضمان حماية الحقوق وبناء علاقات طويلة الأمد مع عملائنا. نسعى لتحقيق العدالة وتقديم خدمات تتوافق مع احتياجات وتطلعات عملائنا، وتوفير الاستشارات الشاملة التي تقوم على الشفافية والاحترام المتبادل.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-surface/5 border border-surface/10 p-8 md:p-10 rounded-sm backdrop-blur-sm"
          >
            <div className="flex items-center gap-4 mb-4 p-3 bg-gray-50 rounded-lg inline-flex">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-gray-200 text-accent">
                <Eye className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-primary-900">رؤيتنا</h4>
            </div>
            <p className="text-gray-600 leading-relaxed text-xs">
              أن تكون الشركة في مصاف مكاتب المحاماة المتميزة في المملكة العربية السعودية بشكل دائم، ونحرص في سبيل تحقق الرؤية بالتطور المستمر واستقطاب المواهب واستحداث الأقسام المتخصصة لتقديم الخدمات وفق أعلى المعايير المهنية وتحقيق العدالة في المجتمع بالتثقيف القانوني وحماية وإعادة الحقوق لأصحابها.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-surface/5 border border-surface/10 p-8 md:p-10 rounded-sm backdrop-blur-sm"
          >
            <div className="flex items-center gap-4 mb-4 p-3 bg-gray-50 rounded-lg inline-flex">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-gray-200 text-accent">
                <Target className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-primary-900">أهدافنا</h4>
            </div>
            <p className="text-gray-600 leading-relaxed text-xs">
              تهدف شركة نفع للمحاماة والاستشارات القانونية إلى تلبية احتياجات العملاء بشكل مرضي من خلال تقديم الخدمات القانونية بجودة ومهنية عالية مع الاستمرار في مواكبة التطورات المختلفة والحفاظ على خصوصية العملاء وحماية سرية بياناتهم.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
