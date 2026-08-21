import React, { useEffect } from 'react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Highlight } from '../components/Highlight';
import { Services } from '../components/Services';
import { VisionMission } from '../components/VisionMission';
import { FAQ } from '../components/FAQ';
import { Contact } from '../components/Contact';
import { useLocation } from 'react-router-dom';

export function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <main>
      <Hero />
      <About />
      <Highlight />
      <Services />
      <VisionMission />
      <FAQ />
      <Contact />
    </main>
  );
}
