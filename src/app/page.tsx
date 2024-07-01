'use client';
import About from '@/components/About';
import Animate from '@/components/Animate';
import Contacts from '@/components/Contacts';
import Experience from '@/components/Experience';
import Feedback from '@/components/Feedback';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import MobileMenu from '@/components/MobileMenu';
import MobileProjects from '@/components/MobileProjects';
import Projects from '@/components/Projects';
import useWindowSize from '@/hooks/useWindowSize';
import React from 'react';

const page: React.FC = () => {
  const size = useWindowSize();
  const isMobile = size.width !== undefined && size.width <= 768;

  return (
    <main>
      {isMobile ? <MobileMenu /> : <Header />}
      <HeroSection />
      <div className="flex w-full items-center justify-center">
        <Animate />
      </div>
      <About />
      {isMobile ? <MobileProjects /> : <Projects />}
      <Experience />
      <Feedback />
      <Contacts />
    </main>
  );
};

export default page;
