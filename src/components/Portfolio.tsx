"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface Project {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  link: string;
  categories: string[];
}

const projects: Project[] = [
  {
    id: "activelearning",
    title: "Active Learning GNU/Linux Workshops",
    description: "A study on active learning methodologies for teaching GNU/Linux in Computer Engineering courses, demonstrating effective approaches for student motivation and learning.",
    imageSrc: "https://sol.sbc.org.br/public/journals/28/pageHeaderLogoImage_pt_BR.jpg",
    link: "https://doi.org/10.5753/cbie.wie.2019.1284",
    categories: ["publications"]
  },
  {
    id: "distancesensor",
    title: "Low-cost Distance Sensor Development",
    description: "Development of a low-cost distance sensor using camera, dot laser and FPGA to be used in a robot colony. The system was modeled in MATLAB and built with Verilog.",
    imageSrc: "https://periodicos.uefs.br/public/journals/12/cover_issue_131_pt_BR.jpg",
    link: "https://doi.org/10.13102/semic.v0i22.4187",
    categories: ["publications"]
  },
  {
    id: "zap-recap",
    title: "Zap Recap",
    description: "A web application for summarizing WhatsApp conversations and generating insights.",
    imageSrc: "https://zap-recap-ffe516b006a4.herokuapp.com/static/assets/recap_logo-DpbfCQQ0.png",
    link: "https://zap-recap-ffe516b006a4.herokuapp.com/",
    categories: ["websites"]
  },
  {
    id: "dia-de-feira",
    title: "Dia de Feira",
    description: "A cultural project documenting local markets through images, texts, and sounds, preserving the memory of community markets and street commerce.",
    imageSrc: "https://diadefeira.netlify.app/images/banner/foto_principal.webp",
    link: "https://diadefeira.netlify.app/",
    categories: ["websites"]
  }
];

const Portfolio = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter(project => project.categories.includes(activeFilter))
      );
    }
  }, [activeFilter]);

  const filters = [
    { id: "all", label: "Show all" },
    { id: "websites", label: "Websites" },
    { id: "publications", label: "Publications" },
  ];

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="py-20 md:py-28 bg-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-roboto-slab font-bold mb-4">Portfolio</h2>
          <p className="text-gray-600 mb-8">
            A glimpse of the projects I've been working on
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {filters.map(filter => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(filter.id)}
                className="rounded-full"
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: "opacity 1s ease-out"
          }}
        >
          {filteredProjects.map((project, index) => (
            <Link
              key={project.id}
              href={project.link}
              className="group block"
            >
              <div
                className="relative overflow-hidden rounded-lg shadow-md bg-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                style={{
                  transitionDelay: `${index * 50}ms`,
                }}
              >
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={project.imageSrc}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <p className="text-sm opacity-90">{project.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
