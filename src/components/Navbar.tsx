import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'الرئيسية', href: '/#home' },
    { name: 'من نحن', href: '/#about' },
    { name: 'خدماتنا', href: '/#services' },
    { name: 'رؤيتنا', href: '/#vision' },
    { name: 'الأسئلة الشائعة', href: '/#faq' },
    { name: 'طلب إحالة', href: '/referral' },
  ];

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex-shrink-0 flex items-center gap-3">
            <a href="/#home" className="flex items-center gap-3 text-primary-900 hover:text-accent transition-colors">
              <Logo className="h-12 w-auto text-primary-900" />
              <div className="flex flex-col">
                <span className="font-serif font-bold text-xl leading-none text-primary-900">شركة نَفْع للمحاماة</span>
                <span className="text-[10px] text-accent font-medium tracking-widest mt-1">الاستشارات القانونية وأعمال التوثيق</span>
              </div>
            </a>
          </div>

          <nav className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              link.href.startsWith('/#') ? (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-500 hover:text-primary-900 font-medium text-sm transition-colors border-b-2 border-transparent hover:border-accent py-1"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-gray-500 hover:text-primary-900 font-medium text-sm transition-colors border-b-2 border-transparent hover:border-accent py-1"
                >
                  {link.name}
                </Link>
              )
            ))}
          </nav>

          <div className="hidden md:flex">
            <a 
              href="/#contact" 
              className="bg-primary-900 text-white hover:bg-primary-800 px-6 py-2.5 rounded text-sm font-bold transition-colors"
            >
              اطلب استشارتك
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary-900 hover:text-accent transition-colors p-2"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-surface border-b border-primary-900/10 absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              link.href.startsWith('/#') ? (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-3 text-base font-medium text-primary-900 hover:bg-primary-900/5 rounded-sm"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block px-3 py-3 text-base font-medium text-primary-900 hover:bg-primary-900/5 rounded-sm"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              )
            ))}
            <a 
              href="/#contact" 
              className="block w-full text-center mt-4 bg-primary-900 text-surface px-3 py-3 rounded-sm font-semibold"
              onClick={() => setIsOpen(false)}
            >
              تواصل معنا
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
