import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "كيف يمكنني التواصل مع المكتب وطلب خدمة قانونية؟",
    answer: "يمكنك التواصل معنا عبر أرقام الواتساب الموضحة في الموقع، أو إرسال بريد إلكتروني، أو زيارة مكتبنا عبر الموقع المرفق في خرائط جوجل للحصول على الاستشارة المبدئية."
  },
  {
    question: "هل يتم تقييم القضية قبل البدء بالإجراءات القانونية؟",
    answer: "نعم، نحرص في شركة نفع على دراسة كل قضية بعناية وتحليل جميع جوانبها القانونية قبل البدء بأي إجراء، لوضع الاستراتيجية الأنسب لحماية مصالحك."
  },
  {
    question: "كيف أعرف آخر التطورات في قضيتي؟",
    answer: "نقوم بتزويد عملائنا بتقارير دورية وتحديثات مستمرة عبر قنوات التواصل المعتمدة (الواتساب، البريد الإلكتروني، أو ناجز) لضمان بقائهم على اطلاع دائم."
  },
  {
    question: "هل يمكن الحصول على استشارة قانونية قبل رفع الدعوى؟",
    answer: "بالتأكيد، تقديم الاستشارات القانونية والشرعية (الشفوية والمكتوبة) هو إحدى خدماتنا الأساسية لمعرفة الموقف القانوني بدقة قبل اتخاذ أي خطوة."
  },
  {
    question: "ما المستندات المطلوبة لبدء العمل على القضية؟",
    answer: "تختلف المستندات بناءً على نوع القضية، وسيتم تزويدك بقائمة دقيقة ومفصلة بالمتطلبات أثناء الاستشارة الأولى أو بعد التقييم المبدئي."
  },
  {
    question: "كم تستغرق مدة إنجاز القضية؟",
    answer: "المدة الزمنية تعتمد على نوع القضية ودرجة تعقيدها ومجريات المحاكم والجهات المختصة. نلتزم دائماً بمتابعة القضايا لضمان إنجازها في أسرع وقت ممكن نظامياً."
  },
  {
    question: "هل المعلومات التي أقدمها للمكتب تبقى سرية؟",
    answer: "نعم، السرية التامة هي من أهم قيمنا الأساسية. نضمن حماية خصوصية بيانات عملائنا وعدم إفشاء أي معلومات لأي طرف ثالث دون موافقة قانونية."
  },
  {
    question: "هل يمكن متابعة القضية دون الحضور إلى المكتب؟",
    answer: "نعم، نقدم خدمات قانونية عن بعد تشمل الاستشارات الفورية عبر الهاتف، ومتابعة القضايا إلكترونياً عبر منصة ناجز، مما يوفر وقتك وجهدك."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-surface">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-accent uppercase tracking-wider mb-2 flex items-center justify-center gap-2">
            <span className="w-1 h-6 bg-accent rounded"></span>
            استفسارات
          </h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary-900 mb-6">
            الأسئلة الشائعة
          </h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="border border-gray-100 rounded-2xl bg-white overflow-hidden shadow-sm"
            >
              <button
                className="w-full px-6 py-5 text-right flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-bold text-sm md:text-base text-primary-900">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-accent transition-transform duration-300 ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 pt-1 text-gray-500 text-sm leading-relaxed border-t border-gray-50">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
