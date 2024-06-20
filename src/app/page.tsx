import About from '@/components/About';
import Animate from '@/components/Animate';
import Contacts from '@/components/Contacts';
import Header from '@/components/Header';
import HerpSection from '@/components/HeroSection';
import Projects from '@/components/Projects';

export default function Home() {
  return (
    <main>
      <Header />
      <HerpSection />
      <div className="flex w-full items-center justify-center">
        <Animate />
      </div>
      <About />
      <Projects />
      <Contacts />
    </main>
  );
}
