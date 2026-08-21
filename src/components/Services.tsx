import React from 'react';
import { motion } from 'motion/react';
import { 
  FileText, 
  Scale, 
  ClipboardCheck, 
  BookOpen, 
  MessageCircle, 
  Coins, 
  Building, 
  ShieldAlert, 
  Network, 
  GraduationCap, 
  Laptop, 
  PenTool, 
  Briefcase
} from 'lucide-react';

const services = [
  {
    title: "صياغة وإعداد العقود",
    description: "إعداد وتدقيق العقود، ومراجعة اللوائح الداخلية للشركات والإشراف على العمال من ناحية تدقيق عقود العمل وتحديد المخالفات.",
    icon: FileText
  },
  {
    title: "التقاضي والتمثيل القانوني",
    description: "المرافعة عن العملاء وتمثيلهم لدى كافة المحاكم الشرعية، ديوان المظالم، اللجان القضائية، واللجان شبه القضائية.",
    icon: Scale
  },
  {
    title: "الاستشارات القانونية",
    description: "تقديم الاستشارات الشفوية والمكتوبة لمعرفة حكم النظام والشرع والوقوف على احتمالات صدور الحكم لصالح طالب الاستشارة.",
    icon: MessageCircle
  },
  {
    title: "تأسيس وخدمات الشركات",
    description: "تأسيس الشركات بأنواعها، تحويلها، اندماجها، وتصفيتها، بالإضافة إلى صياغة عقود التأسيس واستخراج السجل التجاري.",
    icon: Building
  },
  {
    title: "إعداد وصياغة المذكرات",
    description: "إعداد وصياغة كافة أنواع اللوائح والمذكرات بمواجهة المحاكم: المذكرات الجوابية، تحرير الدعاوى، الإلحاقية، والاستئناف.",
    icon: BookOpen
  },
  {
    title: "تحصيل الديون",
    description: "تحصيل الديون والمتعثرات المالية المستحقة لدى الغير أمام محكمة التنفيذ من سندات كالشيكات وسندات الأمر والكمبيالة.",
    icon: Coins
  },
  {
    title: "العلامة التجارية والملكية الفكرية",
    description: "تسجيل العلامات ومتابعتها، الدفاع عنها، وحماية منتجات العملاء من التقليد أمام إدارة الغش التجاري بوزارة التجارة.",
    icon: ShieldAlert
  },
  {
    title: "مراجعة اللوائح والحوكمة",
    description: "مراجعة اللوائح الداخلية من النواحي القانونية، وتقديم الحوكمة لتنظيم السياسات الداخلية للمنشأة والرقابة عليها.",
    icon: Network
  },
  {
    title: "تصفية التركات",
    description: "تصفية التركات من خلال حصر الورثة والتركة والحراسة القضائية وتهيئة التركة للتصفية.",
    icon: Briefcase
  },
  {
    title: "خدمات التوثيق",
    description: "خدمات التوثيق بموجب ترخيص من وزارة العدل: إصدار الوكالات، الإفراغ العقاري، وتوثيق العقود.",
    icon: PenTool
  },
  {
    title: "خدمات قانونية عن بعد",
    description: "استشارات فورية عبر الهاتف، ومتابعة القضايا إلكترونيًا عبر منصة ناجز.",
    icon: Laptop
  },
  {
    title: "التطوير والتدريب",
    description: "تدريب المقبلين على مهنة المحاماة وإعداد الدورات التدريبية والتثقيفية عن الأنظمة لإنشاء جيل قانوني متكامل.",
    icon: GraduationCap
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-accent uppercase tracking-wider mb-2 flex items-center justify-center gap-2">
            <span className="w-1 h-6 bg-accent rounded"></span>
            خدماتنا
          </h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary-900 mb-6">
            نوفّر لعملائنا مجموعة متكاملة من الخدمات القانونية
          </h3>
          <p className="text-lg text-primary-800/70">
            تغطي أبرز التخصصات النظامية، مع التزام كامل بالدقة، السرية، وجودة التمثيل القانوني.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
                <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white p-6 border border-gray-100 rounded-2xl hover:border-accent transition-all group"
              >
                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-4 text-accent border border-gray-100">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-primary-900 mb-2">{service.title}</h4>
                <p className="text-gray-500 leading-relaxed text-xs md:text-sm">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
