"use client";

import { useEffect, useRef, useState } from "react";
import { LineChart, GraduationCap, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  delay: number;
  isVisible: boolean;
}

const ServiceCard = ({ icon, title, description, link, delay, isVisible }: ServiceCardProps) => {
  return (
    <div
      className={`bg-white rounded-lg p-8 text-center shadow-sm border border-gray-100 transition-all duration-1000 ease-out hover:shadow-md hover:-translate-y-1`}
      style={{
        transitionDelay: `${delay}ms`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
      }}
    >
      <div className="flex justify-center mb-6">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-roboto-slab font-bold mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <Button asChild variant="ghost" size="sm">
        <Link href={link} className="group">
          <span>+</span>
          <span className="sr-only">Learn more about {title}</span>
        </Link>
      </Button>
    </div>
  );
};

const Services = () => {
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

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-20 md:py-28 bg-gray-50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-roboto-slab font-bold mb-6">Services</h2>
          <p className="text-gray-600">
            Let me help you leverage data science and machine learning to drive insights and value. I offer consulting, training, and technical solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            icon={<LineChart className="h-8 w-8" />}
            title="Data Science Consulting"
            description="Expert consulting in ML, predictive modeling, and data analysis. Specializing in fraud detection, NLP, and geospatial analytics."
            link="#consulting"
            delay={100}
            isVisible={isVisible}
          />
          <ServiceCard
            icon={<GraduationCap className="h-8 w-8" />}
            title="Training & Workshops"
            description="Hands-on training in Python, Machine Learning, Data Visualization, and Linux. From beginner to advanced levels."
            link="#training"
            delay={200}
            isVisible={isVisible}
          />
          <ServiceCard
            icon={<Database className="h-8 w-8" />}
            title="Data Pipelines"
            description="End-to-end data solutions: web scraping, ETL pipelines, data lakes, ML model deployment, and REST API development using modern cloud infrastructure."
            link="#datapipelines"
            delay={300}
            isVisible={isVisible}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
