
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Works from "@/components/Works";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Neon brush stroke designs */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-32 h-2 bg-gradient-to-r from-orange-500/30 to-transparent rounded-full blur-sm animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-1 bg-gradient-to-l from-orange-400/40 to-transparent rounded-full blur-sm animate-float"></div>
        <div className="absolute bottom-60 left-32 w-40 h-1.5 bg-gradient-to-r from-orange-500/25 to-transparent rounded-full blur-sm animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 right-16 w-28 h-1 bg-gradient-to-l from-orange-400/35 to-transparent rounded-full blur-sm animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-8 w-20 h-1 bg-gradient-to-r from-orange-500/30 to-transparent rounded-full blur-sm animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/3 right-8 w-36 h-1.5 bg-gradient-to-l from-orange-400/25 to-transparent rounded-full blur-sm animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <Navigation />
      <main className="relative z-10">
        <section id="home">
          <Hero />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="works">
          <Works />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default Index;
