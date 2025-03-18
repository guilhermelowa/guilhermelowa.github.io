import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Websites from "@/components/Websites";
import Portfolio from "@/components/Portfolio";
import Publications from "@/components/Publications";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Services />
      {/* <Websites /> */}
      <Portfolio />
      {/* <Publications /> */}
      <Testimonials />
      <Contact />
    </main>
  );
}
