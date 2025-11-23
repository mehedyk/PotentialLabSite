import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { CurrentMembers } from "@/components/CurrentMembers";
import { FoundingMembers } from "@/components/FoundingMembers";
import { ResearchTypes } from "@/components/ResearchTypes";
import { ResearchWorks } from "@/components/ResearchWorks";
import { Projects } from "@/components/Projects";
import { Awards } from "@/components/Awards";
import { Gallery } from "@/components/Gallery";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <section id="members" className="py-24 px-6 bg-background">
        <FoundingMembers />
        <CurrentMembers />
      </section>
      <ResearchTypes />
      <ResearchWorks />
      <Projects />
      <Gallery />
      <Awards />
      <Footer />
    </div>
  );
};

export default Index;
