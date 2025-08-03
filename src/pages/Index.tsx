import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import ThreeDPortfolio from "@/components/ThreeDPortfolio";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Smooth scroll behavior for the whole page
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all scroll-fade-in elements
    const elements = document.querySelectorAll('.scroll-fade-in');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="about" className="scroll-fade-in">
          <About />
        </section>
        
        <section id="skills" className="scroll-fade-in">
          <Skills />
        </section>
        
        <section id="3d-portfolio" className="scroll-fade-in">
          <ThreeDPortfolio />
        </section>
        
        <section id="experience" className="scroll-fade-in">
          <Experience />
        </section>
        
        <section id="projects" className="scroll-fade-in">
          <Projects />
        </section>
        
        <section id="contact" className="scroll-fade-in">
          <Contact />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
