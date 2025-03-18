"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const Publications = () => {
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
      id="publications"
      ref={sectionRef}
      className="py-20 md:py-28 bg-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-roboto-slab font-bold mb-6">Publications</h2>
          <p className="text-gray-600">
            Academic publications and research contributions
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div 
            className={`transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="bg-gray-50 rounded-lg p-6 mb-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-roboto-slab font-bold mb-2">
                Active Learning GNU/Linux Workshops in a Computer Engineering Course
              </h3>
              <p className="text-gray-600 mb-3">
                Workshop de Informática na Escola (WIE), 2019
              </p>
              <p className="text-gray-700 mb-4">
                A study on active learning methodologies for teaching GNU/Linux in Computer Engineering courses, 
                demonstrating effective approaches for student motivation and learning while reducing workshop preparation costs.
              </p>
              <div className="flex gap-4">
                <Link 
                  href="https://doi.org/10.5753/cbie.wie.2019.1284"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline text-sm"
                >
                  DOI: 10.5753/cbie.wie.2019.1284
                </Link>
                <Link 
                  href="https://sol.sbc.org.br/index.php/wie/article/view/13302"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline text-sm"
                >
                  View Publication
                </Link>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 mb-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-roboto-slab font-bold mb-2">
                Development of a low-cost distance sensor using camera, dot laser and FPGA
              </h3>
              <p className="text-gray-600 mb-3">
                XXIII Seminário de Iniciação Científica da UEFS, 2019
              </p>
              <p className="text-gray-700 mb-4">
                Development of a low-cost distance sensor using camera, dot laser and FPGA to be used in a robot colony. The system was modeled in MATLAB and built with Verilog.
              </p>
              <div className="flex gap-4">
                <Link 
                  href="https://doi.org/10.13102/semic.v0i22.4187"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline text-sm"
                >
                  DOI: 10.13102/semic.v0i22.4187
                </Link>
                <Link 
                  href="https://periodicos.uefs.br/index.php/semic/article/view/4187"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline text-sm"
                >
                  View Publication
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications; 