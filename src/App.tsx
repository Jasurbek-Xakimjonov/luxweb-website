import { useState } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { WhyUs } from './components/WhyUs';
import { Process } from './components/Process';
import { About } from './components/About';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { CTA } from './components/CTA';
import { Contact } from './components/Contact';
import { InstagramSection } from './components/InstagramSection';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedProjectType, setSelectedProjectType] = useState<string>('Business Website');
  const [selectedBudget, setSelectedBudget] = useState<string>('$200–$350');

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenProjectForm = (prefillPackage?: string) => {
    if (prefillPackage) {
      if (prefillPackage.toLowerCase().includes('starter')) {
        setSelectedBudget('$100–$200');
        setSelectedProjectType('Business Website');
      } else if (prefillPackage.toLowerCase().includes('business')) {
        setSelectedBudget('$200–$350');
        setSelectedProjectType('Business Website');
      } else if (prefillPackage.toLowerCase().includes('premium')) {
        setSelectedBudget('$350+');
        setSelectedProjectType('Business Website');
      }
    }
    scrollToSection('contact');
  };

  const handleSelectService = (serviceTitle: string) => {
    if (serviceTitle.includes('BEAUTY')) {
      setSelectedProjectType('Beauty / Barber');
      setSelectedBudget('$200–$350');
    } else if (serviceTitle.includes('RESTAURANT')) {
      setSelectedProjectType('Restaurant');
      setSelectedBudget('$200–$350');
    } else if (serviceTitle.includes('AUTOMOTIVE')) {
      setSelectedProjectType('Automotive');
      setSelectedBudget('$350+');
    } else if (serviceTitle.includes('EDUCATION')) {
      setSelectedProjectType('Education');
      setSelectedBudget('$200–$350');
    } else {
      setSelectedProjectType('Business Website');
    }
    scrollToSection('contact');
  };

  const handleSelectPlan = (planName: string) => {
    if (planName === 'STARTER') {
      setSelectedBudget('$100–$200');
    } else if (planName === 'BUSINESS') {
      setSelectedBudget('$200–$350');
    } else {
      setSelectedBudget('$350+');
    }
    scrollToSection('contact');
  };

  const handleSelectProjectForCommission = (projectName: string) => {
    if (projectName.includes('BEAUTY')) {
      setSelectedProjectType('Beauty / Barber');
      setSelectedBudget('$200–$350');
    } else if (projectName.includes('AUTO')) {
      setSelectedProjectType('Automotive');
      setSelectedBudget('$350+');
    } else if (projectName.includes('RESTAURANT')) {
      setSelectedProjectType('Restaurant');
      setSelectedBudget('$200–$350');
    } else if (projectName.includes('EDUCATION')) {
      setSelectedProjectType('Education');
      setSelectedBudget('$200–$350');
    } else {
      setSelectedProjectType('Business Website');
    }
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-[#080809] text-white selection:bg-[#D4AF37]/20 selection:text-[#E5C388] relative">
      {/* Desktop Luxury Dot Cursor */}
      <CustomCursor />

      {/* Sticky Navigation */}
      <Navbar onOpenProjectForm={() => handleOpenProjectForm()} />

      {/* Main Sections */}
      <main>
        <Hero
          onViewWork={() => scrollToSection('work')}
          onStartProject={() => handleOpenProjectForm()}
        />

        <Services onSelectService={handleSelectService} />

        <Portfolio onSelectProjectForCommission={handleSelectProjectForCommission} />

        <WhyUs />

        <Process onStartProject={() => handleOpenProjectForm()} />

        <About />

        <Pricing onSelectPlan={handleSelectPlan} />

        <FAQ />

        <CTA onStartProject={() => handleOpenProjectForm()} />

        <Contact
          initialProjectType={selectedProjectType}
          initialBudget={selectedBudget}
        />

        <InstagramSection />
      </main>

      {/* Studio Minimal Footer */}
      <Footer />
    </div>
  );
}
