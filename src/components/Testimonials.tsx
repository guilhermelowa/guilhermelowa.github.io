"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { QuoteIcon } from "lucide-react";

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  position: string;
  imageSrc: string;
}

const testimonials: Testimonial[] = [
  {
    id: "charlessantana",
    quote: "I worked with Guilherme in Dadoscope, a data-driven journalism blog in which we use Statistics, Machine Learning, Data Visualization, free software and open data in order to tell stories of public interest for Brazilian Society. Guilherme is a vibrant and competent data analyst, with focus on details to get insights from different types of datasets. He is highly skilled in #Python #R #SQL #DataVisualization and #MachineLearning. I recommend Guilherme for Data Scientist or Data Analyst positions.",
    author: "Charles Novaes de Santana, PhD",
    position: "Founder @ Kultrip",
    imageSrc: "https://media.licdn.com/dms/image/v2/C4E03AQGCcRucCYbRhA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1651830950634?e=1747872000&v=beta&t=4AtyeEbYfRM3G1YR2txZT1CNPF9uwonMQUkbd4S3ync"
  },
  {
    id: "acloula",
    quote: "As a professor, I supervised Guilherme's final undergraduate project on methods for tag recommendation system for legal articles. Guilherme demonstrated important skills on fast and independent learning, proactive problem solving, critical thinking, and analytical mindset, evidencing a great data scientist and analyst profile.",
    author: "Angelo Loula",
    position: "Professor at Universidade Estadual de Feira de Santana",
    imageSrc: "https://media.licdn.com/dms/image/v2/C4D03AQE20NUM6jIeYQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1615235561734?e=1747872000&v=beta&t=ip3LupubNXj8JDknwjBGgAMwJRxStGH2JtdiHOvWKpE"
  },
  {
    id: "ajerdaty",
    quote: "Guilherme is a wonderful coworker. Not only is he proficient in his work, his positive attitude is infectious. During a stressful day, a conversation with Guilherme is a breath of fresh air. He is someone you can go to with a question about your work, and you will walk away with a good answer and a smile on your face. I hope I have more teammates just like Guilherme in the future.",
    author: "AJ Erdaty",
    position: "Data Scientist",
    imageSrc: "https://media.licdn.com/dms/image/v2/C4E03AQEesyvS_L25Rw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1645849394293?e=1747872000&v=beta&t=DBC-RVybyC_N7ANd04CcHohV9x-hJYRQQ4NjA2VEIOQ"
  }
];

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

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
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section
      id="testimonial"
      className="py-20 md:py-28 bg-gray-50"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4">
        <div
          className={`transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="mx-auto max-w-4xl">
            <Carousel setApi={setApi} className="relative">
              <QuoteIcon className="absolute -top-12 left-1/2 transform -translate-x-1/2 h-14 w-14 text-primary/20" />

              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={testimonial.id}>
                    <div className="p-6 md:p-8 text-center flex flex-col items-center">
                      <blockquote className="text-lg md:text-xl text-gray-700 italic mb-6 max-w-3xl">
                        "{testimonial.quote}"
                      </blockquote>

                      <div className="flex items-center flex-col">
                        <div className="w-16 h-16 rounded-full overflow-hidden mb-4">
                          <Image
                            src={testimonial.imageSrc}
                            alt={testimonial.author}
                            width={64}
                            height={64}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="text-center">
                          <div className="font-medium">{testimonial.author}</div>
                          <div className="text-sm text-gray-500">{testimonial.position}</div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <div className="flex justify-center mt-6 gap-1">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all ${
                      current === index ? "bg-primary" : "bg-gray-300"
                    }`}
                    onClick={() => api?.scrollTo(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <CarouselPrevious className="hidden md:flex -left-12" />
              <CarouselNext className="hidden md:flex -right-12" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
