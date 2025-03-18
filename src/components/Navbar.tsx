"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Twitter, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/ThemeToggle";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Intro", href: "#description" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Testimonials", href: "#testimonial" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-sm shadow-sm py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/#page-top" className="flex items-center">
          <div className="font-roboto-slab text-xl md:text-2xl font-bold">
            <span>Guilherme Wanderley</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Links and Theme Toggle */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="https://bsky.app/profile/guilhermelowa.bsky.social" target="_blank" rel="noopener noreferrer">
            <Twitter className="h-5 w-5 text-gray-600 hover:text-primary transition-colors dark:text-gray-300" />
          </Link>
          <Link href="https://github.com/guilhermelowa" target="_blank" rel="noopener noreferrer">
            <Github className="h-5 w-5 text-gray-600 hover:text-primary transition-colors dark:text-gray-300" />
          </Link>
          <Link href="https://www.linkedin.com/in/glw01/" target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-5 w-5 text-gray-600 hover:text-primary transition-colors dark:text-gray-300" />
          </Link>
          <div className="ml-2">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] sm:w-[300px]">
              <nav className="flex flex-col h-full py-6">
                <ul className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-base font-medium transition-colors hover:text-primary"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="flex space-x-4 mt-auto pt-6">
                  <Link href="https://bsky.app/profile/guilhermelowa.bsky.social" target="_blank" rel="noopener noreferrer">
                    <Twitter className="h-5 w-5 text-gray-600 hover:text-primary transition-colors dark:text-gray-300" />
                  </Link>
                  <Link href="https://github.com/guilhermelowa" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5 text-gray-600 hover:text-primary transition-colors dark:text-gray-300" />
                  </Link>
                  <Link href="https://www.linkedin.com/in/glw01" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5 text-gray-600 hover:text-primary transition-colors dark:text-gray-300" />
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
