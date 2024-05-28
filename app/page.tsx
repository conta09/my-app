import HeroSection from "./components/HeroSection";
import ProjectSection from "./components/ProjectSection";
import Footer from "./components/Footer";
import ContactSection from "./components/ContactSection";
import Navbar from "./components/Navbar";
import ToolStack from "./components/ToolStack";
import AboutSection from "./components/AboutSection";
export default function Home() {
  return (
   <main className="bg-[#121212]">
     <Navbar />
     <HeroSection />
      <AboutSection />
     <ProjectSection />
     <ToolStack />
     <ContactSection />
     <Footer />
   </main>
  );
}
