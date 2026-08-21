/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Referral } from './pages/Referral';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen font-tajawal text-slate-800 selection:bg-accent/30 relative">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/referral" element={<Referral />} />
        </Routes>
        <Footer />
        <Analytics />
      </div>
    </BrowserRouter>
  );
}
