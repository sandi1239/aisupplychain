import { useRef, useEffect } from 'react';
import { Navbar } from '@/components/sections/Navbar';
import { Hero } from '@/components/sections/Hero';
import { LogoBanner } from '@/components/sections/LogoBanner';
import { PainPoints } from '@/components/sections/PainPoints';
import { Solution } from '@/components/sections/Solution';
import { Stats } from '@/components/sections/Stats';
import { PastWork } from '@/components/sections/PastWork';
import { Process } from '@/components/sections/Process';
import { SocialProof } from '@/components/sections/SocialProof';
import { LeadForm } from '@/components/sections/LeadForm';
import { FreeGift } from '@/components/sections/FreeGift';
import { Footer } from '@/components/sections/Footer';

const Index = () => {
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <main className="min-h-screen">
      <Navbar onGetStarted={scrollToForm} />
      
      <Hero onGetStarted={scrollToForm} />
      
      <LogoBanner />
      
      <PainPoints />
      
      <div id="solution">
        <Solution />
      </div>
      
      <div id="results">
        <Stats />
      </div>
      
      <PastWork />
      
      <div id="process">
        <Process />
      </div>
      
      <div id="about">
        <SocialProof />
      </div>
      
      <LeadForm formRef={formRef} />
      
      <FreeGift />
      
      <Footer onGetStarted={scrollToForm} />
    </main>
  );
};

export default Index;
