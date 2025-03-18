"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Twitter, Github, Linkedin } from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollDown = () => {
    const descriptionElement = document.getElementById("description");
    if (descriptionElement) {
      descriptionElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="page-top"
      className="relative h-screen flex items-center justify-center bg-gradient-to-b from-background to-background/80 overflow-hidden dark:from-gray-900 dark:to-gray-950"
    >
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Background dots/particles - different pattern for dark mode */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,_#e5e7eb_1px,_transparent_1px)] bg-[length:20px_20px] opacity-30 dark:bg-[radial-gradient(circle,_#374151_1px,_transparent_1px)]"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div
          className={`transform transition-all duration-1000 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="mb-6">
            <h1 className="text-5xl md:text-7xl font-roboto-slab font-bold tracking-tight mb-2">
              <span className="text-foreground">Guilherme</span>{" "}
              <span className="text-primary">Wanderley</span>
            </h1>
          </div>

          <div className="flex justify-center space-x-4 mb-6">
            <Link href="https://github.com/guilhermelowa" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 dark:bg-gray-800 dark:text-gray-200">
                <Github className="h-5 w-5" />
              </div>
            </Link>
            <Link href="https://www.linkedin.com/in/glw01/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 dark:bg-gray-800 dark:text-gray-200">
                <Linkedin className="h-5 w-5" />
              </div>
            </Link>
          </div>

          <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto mb-8 dark:text-gray-300">
            I'm a Data Scientist with a strong foundation in Machine Learning and currently pursuing a Masters in remote sensing.
            Passionate about applying AI and data science to climate technology and sustainable agriculture solutions.
            Experienced in large-scale data analysis and predictive modeling.
            Eager to contribute to the mission of leveraging technology to combat climate change.
          </p>
          <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto mb-8 dark:text-gray-300">
            Let's work together!
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="px-8 py-6 text-sm">
              <Link href="#contact">Contact</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
