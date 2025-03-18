"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

interface WebsiteCardProps {
  title: string;
  description: string;
  link: string;
  delay: number;
  isVisible: boolean;
}

const WebsiteCard = ({ title, description, link, delay, isVisible }: WebsiteCardProps) => {
  return (
    <Card
      className="overflow-hidden transition-all duration-500 ease-out hover:shadow-lg"
      style={{
        transitionDelay: `${delay}ms`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
      }}
    >
      <CardHeader className="bg-primary/5 pb-4">
        <CardTitle className="text-xl font-roboto-slab">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <CardDescription className="text-gray-600 mb-4">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" size="sm" className="w-full">
          <Link href={link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
            <span>Visit</span>
            <ExternalLink className="h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

const Websites = () => {
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

  const websites = [
    {
      title: "Zap Recap",
      description: "A powerful AI tool for summarizing and analyzing your conversations, helping you extract key insights from your chats.",
      link: "https://zap-recap-ffe516b006a4.herokuapp.com/"
    },
    {
      title: "Dia de Feira",
      description: "An audiovisual project on street markets in Feira de Santana - Bahia",
      link: "https://diadefeira.netlify.app/"
    }
  ];

  return (
    <section
      id="website"
      ref={sectionRef}
      className="py-20 md:py-28 bg-gray-50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-roboto-slab font-bold mb-6">Websites</h2>
          <p className="text-gray-600">
            Even though that's not my focus, I've developed some websites.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {websites.map((website, index) => (
            <WebsiteCard
              key={index}
              title={website.title}
              description={website.description}
              link={website.link}
              delay={100 * index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Websites;
