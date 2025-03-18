"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import headshotImage from "../../assets/linkedInSS.png"

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="description"
      ref={sectionRef}
      className="py-20 md:py-28 bg-white"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image Column */}
          <div
            className={`transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative rounded-full overflow-hidden shadow-lg w-[250px] h-[250px] mx-auto">
              <Image
                src={headshotImage}
                alt="Guilherme Wanderley"
                width={250}
                height={250}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text Column */}
          <div
            className={`transition-all duration-1000 delay-300 ease-out ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <h2 className="text-3xl font-roboto-slab font-bold mb-6">Guilherme Wanderley</h2>

            <p className="text-gray-700 mb-4">
              I specialize in Machine Learning and Data Science, with a focus on climate technology and sustainable agriculture solutions. Currently pursuing a Masters in Computer Science with emphasis on remote sensing, I combine technical expertise with a passion for environmental impact.
            </p>

            <p className="text-gray-700 mb-4">
              With experience at <Link href="https://shift-technology.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Shift Technology</Link> and <Link href="https://dadoscope.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Dadoscope</Link>, I've developed ML pipelines for fraud detection and conducted large-scale data analysis, saving millions in costs and uncovering critical insights in election data.
            </p>

            <p className="text-gray-700 mb-6">
              My technical expertise spans Machine Learning frameworks (PyTorch, TensorFlow) and cloud platforms (Azure). I'm particularly skilled in data visualization using tools like Plotly, D3.js, and Seaborn, having published data-driven stories in major Brazilian publications.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Button asChild variant="outline" size="sm">
                <Link href="#portfolio" scroll={true}>
                  Portfolio
                </Link>
              </Button>
              <Button asChild variant="outline" size="sm">
                <Link href="https://bsky.app/profile/guilhermelowa.bsky.social" target="_blank" rel="noopener noreferrer">
                  BlueSky
                </Link>
              </Button>
              <Button asChild variant="outline" size="sm">
                <Link href="https://github.com/guilhermelowa" target="_blank" rel="noopener noreferrer">
                  Github
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
