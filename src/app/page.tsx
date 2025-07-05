import Image from "next/image";
import SplashCursor from "@/components/ui/Animations/SplashCursor/SplashCursor";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <>
      {/* Background Animation */}
      <SplashCursor 
        BACK_COLOR={{ r: 0.1, g: 0.1, b: 0.3 }}
        COLOR_UPDATE_SPEED={15}
        SPLAT_FORCE={4000}
      />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </>
  );
}
