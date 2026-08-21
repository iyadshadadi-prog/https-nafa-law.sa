import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("تم إرسال نموذج التواصل:", formData);
    // Simulate sending data or just show an alert since it's a static demo
    alert(`شكراً لك ${formData.name}، تم استلام رسالتك وسيتم التواصل معك قريباً.`);
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-surface relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold text-accent uppercase tracking-wider mb-2 flex items-center gap-2">
              <span className="w-1 h-6 bg-accent rounded"></span>
              تواصل معنا
            </h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary-900 mb-8">
              نموذج التواصل السريع
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-primary-900 mb-2">الاسم الكريم</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors text-sm"
                  placeholder="أدخل اسمك هنا"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-bold text-primary-900 mb-2">رقم الجوال</label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors text-sm"
                  placeholder="05XXXXXXXX"
                  dir="ltr"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-primary-900 mb-2">تفاصيل الاستشارة أو الطلب</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none text-sm"
                  placeholder="كيف يمكننا مساعدتك؟"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-primary-900 text-white py-3.5 px-6 rounded-lg font-bold text-sm hover:bg-primary-800 transition-colors flex justify-center items-center gap-2 group"
              >
                <span>إرسال الطلب</span>
                <Send className="w-5 h-5 group-hover:-translate-x-1 transition-transform rtl:rotate-180" />
              </button>
            </form>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white border border-gray-100 text-primary-900 p-8 md:p-12 rounded-2xl flex flex-col justify-between shadow-sm"
          >
            <div>
              <h3 className="text-2xl font-serif font-bold mb-8 text-primary-900">معلومات التواصل</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-50 border border-gray-100 rounded-lg">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 text-sm text-gray-500 uppercase tracking-wider">الهاتف</h4>
                    <div className="flex flex-col gap-2">
                      <a href="tel:0568874304" className="text-primary-900 font-bold hover:text-accent transition-colors text-sm" dir="ltr">
                        056 887 4304
                      </a>
                      <a href="tel:0565569656" className="text-primary-900 font-bold hover:text-accent transition-colors text-sm" dir="ltr">
                        056 556 9656
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-50 border border-gray-100 rounded-lg flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-accent" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 text-sm text-gray-500 uppercase tracking-wider">واتساب</h4>
                    <div className="flex flex-col gap-2">
                      <a href="https://wa.me/966568874304" target="_blank" rel="noopener noreferrer" className="text-primary-900 font-bold hover:text-accent transition-colors text-sm" dir="ltr">
                        056 887 4304
                      </a>
                      <a href="https://wa.me/966565569656" target="_blank" rel="noopener noreferrer" className="text-primary-900 font-bold hover:text-accent transition-colors text-sm" dir="ltr">
                        056 556 9656
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-50 border border-gray-100 rounded-lg">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 text-sm text-gray-500 uppercase tracking-wider">البريد الإلكتروني</h4>
                    <a href="mailto:nafa.law.firm@gmail.com" className="text-primary-900 font-bold hover:text-accent transition-colors text-sm">
                      nafa.law.firm@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-50 border border-gray-100 rounded-lg">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 text-sm text-gray-500 uppercase tracking-wider">العنوان</h4>
                    <a 
                      href="https://www.google.com/maps/search/?api=1&query=شركة+نفع+للمحاماة+والاستشارات+القانونية،+الخالدية،+جدة" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary-900 font-bold hover:text-accent transition-colors block leading-relaxed text-xs"
                    >
                      اضغط هنا للوصول إلى موقعنا عبر خرائط جوجل
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-100">
              <h4 className="font-bold mb-4 text-xs text-gray-500">حساباتنا على مواقع التواصل الاجتماعي</h4>
              <div className="flex gap-4">
                <a 
                  href="https://x.com/nafa__sa?s=11" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="حسابنا على إكس (تويتر)"
                  className="w-10 h-10 bg-gray-50 border border-gray-100 rounded-lg flex items-center justify-center text-gray-400 hover:border-accent hover:text-accent transition-colors"
                >
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a 
                  href="https://www.tiktok.com/@salmanbinmohammed_?_r=1&_t=ZS-98Y7Q5iSTge" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="حسابنا على تيك توك"
                  className="w-10 h-10 bg-gray-50 border border-gray-100 rounded-lg flex items-center justify-center text-gray-400 hover:border-accent hover:text-accent transition-colors"
                >
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
                </a>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
