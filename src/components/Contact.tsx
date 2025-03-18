"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // In a real application, this would send the form data to a server
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setEmail("");
      setMessage("");
      setName("");

      // Reset submission state after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1000);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 md:py-28 bg-white relative overflow-hidden"
    >

      <div
        className={`container mx-auto px-4 relative z-10 transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-roboto-slab font-bold mb-6">Contact</h2>

          <p className="text-gray-600 mb-8">
          If you want to follow my work, reach me on <Link href="https://www.linkedin.com/in/glw01/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">LinkedIn</Link> or <Link href="https://bsky.app/profile/guilhermelowa.bsky.social" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Bluesky</Link>. Or contact me on <Link href="https://github.com/guilhermelowa/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Github</Link> or via email: <Link href="mailto:guilhermelw.uefs@gmail.com" className="text-primary hover:underline">guilhermelw.uefs@gmail.com</Link>.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <Button asChild variant="outline" size="lg" className="gap-2">
            <Link href="https://github.com/guilhermelowa" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
              <span>Github</span>
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="gap-2">
            <Link href="https://www.linkedin.com/in/glw01/" target="_blank" rel="noopener noreferrer">
              {/* <Image src="/linkedin.svg" alt="LinkedIn" width={20} height={20} /> */}
              <Linkedin className="h-5 w-5" />
              <span>LinkedIn</span>
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="gap-2">
            <Link href="mailto:guilhermelw.uefs@gmail.com">
              <Mail className="h-5 w-5" />
              <span>Mail</span>
            </Link>
          </Button>
        </div>
      </div>

      <footer className="mt-20 pt-10 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <p className="text-gray-500 text-sm">
                Copyright © Guilherme Wanderley {new Date().getFullYear()}
              </p>
            </div>
            <div className="flex gap-4">
              <Link href="https://github.com/guilhermelowa" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 text-gray-400 hover:text-gray-700 transition-colors" />
              </Link>
              <div className="flex gap-6 text-sm text-gray-500">
                <Link href="#" className="hover:text-gray-700 transition-colors">Privacy Policy</Link>
                <Link href="#" className="hover:text-gray-700 transition-colors">Terms of Use</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
