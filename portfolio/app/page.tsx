import Hero from "@/components/Hero";
import About from "@/components/About";
import AcademicWork from "@/components/AcademicWork";
import EducationExperience from "@/components/EducationExperience";
import ResearchInterests from "@/components/ResearchInterests";
import Skills from "@/components/Skills";
import CV from "@/components/CV";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <AcademicWork />
      <EducationExperience />
      <ResearchInterests />
      <Skills />
      <CV />
      <Contact />
      <Footer />
    </main>
  );
}