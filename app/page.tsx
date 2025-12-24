import HeroSection from "./components/HeroSection";
import ProjectSection from "./components/ProjectSection";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ToolStack from "./components/ToolStack";
import AboutSection from "./components/AboutSection";
import DesignSection from "./components/DesignSection";
import Agent from "./components/Agent";
export default function Home() {
  return (
   <main className="bg-[#121212]">
     <Navbar />
     <HeroSection />
      <AboutSection />
     <ProjectSection />
     <DesignSection />
      <Agent />
     <ToolStack />
     <Footer />
   </main>
  );
}
