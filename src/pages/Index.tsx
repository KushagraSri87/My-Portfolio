import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import IdeasSection from "@/components/IdeasSection";
import ContactSection from "@/components/ContactSection";

const Index = () => (
  <>
    <Navbar />
    <main className="pt-16">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <IdeasSection />
      <ContactSection />
    </main>
    <footer className="border-t border-border py-8 text-center text-xs text-muted-foreground font-heading">
      © 2026 Kushagra. All rights reserved.
    </footer>
  </>
);

export default Index;
