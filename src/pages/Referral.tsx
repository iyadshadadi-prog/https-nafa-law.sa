import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Send, FileText, User, Phone, Mail } from 'lucide-react';

export function Referral() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const [formData, setFormData] = useState({
    referrerName: '',
    referrerPhone: '',
    referrerEmail: '',
    clientName: '',
    clientPhone: '',
    caseDetails: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("تم إرسال نموذج الإحالة:", formData);
    alert(`شكراً لك ${formData.referrerName}، تم استلام طلب الإحالة بنجاح. سنتواصل معك قريباً.`);
    setFormData({ 
      referrerName: '', 
      referrerPhone: '', 
      referrerEmail: '', 
      clientName: '', 
      clientPhone: '', 
      caseDetails: '' 
    });
  };

  return (
    <main className="pt-32 pb-24 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-primary-900 mb-6">
            برنامج شركاء نفع للإحالة
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
            نعتز في شركة نفع للمحاماة بالشراكات المهنية التي نبنيها مع زملائنا في القطاع القانوني والتجاري. نسعد باستقبال إحالاتكم وتقديم أفضل الخدمات القانونية لعملائكم، مع حفظ كامل حقوقكم.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
        >
          <div className="bg-primary-900 p-8 text-white text-center">
            <h2 className="text-2xl font-serif font-bold mb-2">نموذج الإحالة</h2>
            <p className="text-primary-100 text-sm">الرجاء تعبئة بياناتك وبيانات العميل المحال بدقة</p>
          </div>

          <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-12">
            
            {/* Referrer Details */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                <User className="w-5 h-5 text-accent" />
                <h3 className="text-lg font-bold text-primary-900">بيانات المحيل (مقدم الطلب)</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="referrerName" className="block text-sm font-bold text-primary-900 mb-2">الاسم / اسم الجهة</label>
                  <input
                    type="text"
                    id="referrerName"
                    required
                    value={formData.referrerName}
                    onChange={(e) => setFormData({...formData, referrerName: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors text-sm"
                    placeholder="أدخل اسمك أو اسم جهتك"
                  />
                </div>
                <div>
                  <label htmlFor="referrerPhone" className="block text-sm font-bold text-primary-900 mb-2">رقم الجوال</label>
                  <input
                    type="tel"
                    id="referrerPhone"
                    required
                    value={formData.referrerPhone}
                    onChange={(e) => setFormData({...formData, referrerPhone: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors text-sm"
                    placeholder="05XXXXXXXX"
                    dir="ltr"
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="referrerEmail" className="block text-sm font-bold text-primary-900 mb-2">البريد الإلكتروني</label>
                  <input
                    type="email"
                    id="referrerEmail"
                    required
                    value={formData.referrerEmail}
                    onChange={(e) => setFormData({...formData, referrerEmail: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors text-sm"
                    placeholder="example@email.com"
                    dir="ltr"
                  />
                </div>
              </div>
            </div>

            {/* Client Details */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                <FileText className="w-5 h-5 text-accent" />
                <h3 className="text-lg font-bold text-primary-900">بيانات العميل (المحال) وتفاصيل القضية</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="clientName" className="block text-sm font-bold text-primary-900 mb-2">اسم العميل المحال</label>
                  <input
                    type="text"
                    id="clientName"
                    required
                    value={formData.clientName}
                    onChange={(e) => setFormData({...formData, clientName: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors text-sm"
                    placeholder="اسم العميل"
                  />
                </div>
                <div>
                  <label htmlFor="clientPhone" className="block text-sm font-bold text-primary-900 mb-2">رقم جوال العميل</label>
                  <input
                    type="tel"
                    id="clientPhone"
                    required
                    value={formData.clientPhone}
                    onChange={(e) => setFormData({...formData, clientPhone: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors text-sm"
                    placeholder="05XXXXXXXX"
                    dir="ltr"
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="caseDetails" className="block text-sm font-bold text-primary-900 mb-2">نبذة مختصرة عن الموضوع / القضية</label>
                  <textarea
                    id="caseDetails"
                    required
                    rows={5}
                    value={formData.caseDetails}
                    onChange={(e) => setFormData({...formData, caseDetails: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none text-sm"
                    placeholder="يرجى كتابة تفاصيل موجزة عن طبيعة الاستشارة أو القضية التي ترغب بإحالتها"
                  ></textarea>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-primary-900 text-white py-4 px-6 rounded-lg font-bold text-sm hover:bg-primary-800 transition-colors flex justify-center items-center gap-2 group mt-8"
            >
              <span>إرسال الإحالة</span>
              <Send className="w-5 h-5 group-hover:-translate-x-1 transition-transform rtl:rotate-180" />
            </button>
            <p className="text-center text-xs text-gray-500 mt-4">
              نلتزم في شركة نفع للمحاماة بالمحافظة التامة على سرية بيانات المحيل والعميل.
            </p>
          </form>
        </motion.div>
      </div>
    </main>
  );
}
