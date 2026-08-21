import React from 'react';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="bg-primary-900 border-t border-gray-800 py-12 text-white text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <Logo className="h-16 w-auto mb-6 text-accent opacity-90" />
          <h2 className="text-xl font-serif font-bold mb-2">شركة نَفْع للمحاماة والاستشارات القانونية</h2>
          <p className="text-gray-400 text-sm max-w-md mx-auto mb-8">
            نخبة متميزة من المحامين والمستشارين. نسعى دائماً لتقديم أفضل الخدمات القانونية.
          </p>
          <div className="w-24 h-px bg-gray-800 mx-auto mb-8"></div>
          <p className="text-gray-500 text-xs font-bold uppercase tracking-wider">
            &copy; {new Date().getFullYear()} شركة نفع للمحاماة والاستشارات القانونية. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
}
