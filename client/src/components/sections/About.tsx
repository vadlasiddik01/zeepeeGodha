import React from "react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { SectionHeading } from "@/components/ui/section-heading";
import { FaArrowRight, FaStethoscope } from "react-icons/fa";
import aboutImage from "@assets/about.png";

export function About() {
  const { ref, isIntersecting } = useIntersectionObserver();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.6,
        staggerChildren: 0.2 
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,  
      transition: { 
        duration: 0.8, 
        ease: "easeOut" 
      } 
    }
  };

  return (
    <section 
      id="about" 
      className="py-8 sm:py-10 md:py-12 bg-white"
      ref={ref}
    >
      <motion.div 
        className="container mx-auto px-4 md:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate={isIntersecting ? "visible" : "hidden"}
      >
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 lg:gap-16">
          <motion.div 
            className="w-full md:w-1/2 order-2 md:order-1"
            variants={itemVariants}
          >
            <SectionHeading
              subHeading="About Dr. Zeepee Godha"
              heading="Best IVF Treatment in India by Dr. Zeepee Godha - 17+ Years of Trusted Fertility Expertise in
Jaipur."
              description="At Ishwa IVF, Dr. Zeepee Godha brings over 17 years of excellence in gynecology and
reproductive medicine. As a Senior Consultant at Indira IVF, Jaipur, she leads a compassionate
team committed to guiding couples through their fertility journey with precision, care, and
transparency."
            />
            <p className="text-gray-600 mb-6 md:mb-8 leading-relaxed text-center md:text-left">
            With a strong foundation in advanced fertility techniques—including IVF, IUI, ICSI, and donor
programs—Dr.Zeepee Godha's approach blends science with empathy. Every treatment plan is
personalized, ensuring patients feel informed, empowered, and fully supported.</p>
            <p className="text-gray-600 mb-6 md:mb-8 leading-relaxed text-center md:text-left">We're proud to be recognized for offering some of the best IVF treatment in India, with
            consistently high success rates and ethical, patient-first care.</p>
            <div className="flex justify-center md:justify-start">
              <a 
                href="#services" 
                className="inline-flex items-center text-secondary font-semibold group hover:text-primary"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById("services");
                  if (element) {
                    const headerHeight = document.querySelector("header")?.offsetHeight || 0;
                    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                    const offsetPosition = elementPosition - headerHeight;
                    
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth",
                    });
                  }
                }}
              >
                <span>Discover More</span>
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            
            <div className="mt-6 md:mt-8 p-4 md:p-6 border-l-4 border-primary bg-gray-50 rounded-r-lg shadow-sm">
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-secondary">Membership Benefits</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Our membership program offers exclusive benefits including priority appointments, extended consultations, 
                and personalized health plans designed around your needs.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-[250px] sm:w-[280px] md:w-1/2 relative mx-auto md:mx-0 -left-0 md:-left-6 mb-6 md:mb-0 order-1 md:order-2"
            variants={itemVariants}
          >
            <div className="relative flex justify-center">
              {/* Main circular image container with border */}
              <motion.div 
                className="w-[250px] h-[250px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px] relative"
                variants={imageVariants}
              >
                {/* Circle border animation */}
                <div className="absolute inset-0 rounded-full border-[10px] sm:border-[12px] md:border-[15px] border-white bg-white shadow-lg"></div>
                
                {/* Image container */}
                <div className="absolute inset-[10px] sm:inset-[12px] md:inset-[15px] rounded-full overflow-hidden">
                  {/* Background image styling */}
                  <div 
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${aboutImage})` }}
                  ></div>
                </div>
                
                {/* Experience badge - adjusted position */}
                <div className="absolute -left-6 sm:-left-8 md:-left-10 bottom-8 md:bottom-12 bg-white rounded-full p-3 md:p-4 shadow-lg flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28">
                  <div>
                    <div className="text-2xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent text-center">10+</div>
                    <div className="text-[10px] sm:text-xs text-gray-700 text-center font-medium">Years Experience</div>
                  </div>
                </div>
                
                {/* Stethoscope icon circle */}
                <div className="absolute -right-2 sm:-right-3 md:-right-4 top-6 md:top-10 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-primary rounded-full flex items-center justify-center shadow-md">
                  <FaStethoscope className="text-white text-sm sm:text-lg md:text-xl" />
                </div>
              </motion.div>
              
              {/* Background decorative elements */}
              <div className="absolute -bottom-4 md:-bottom-6 -right-4 md:-right-6 w-3/4 h-3/4 bg-primary/5 rounded-full -z-10"></div>
              <div className="absolute -top-4 md:-top-8 -left-4 md:-left-6 w-1/2 h-1/2 bg-gray-100 rounded-full -z-10"></div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
