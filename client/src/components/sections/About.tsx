import React from "react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { SectionHeading } from "@/components/ui/section-heading";
import { FaArrowRight } from "react-icons/fa";
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
    hidden: { opacity: 0, scale: 0.9, rotate: -5 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotate: 0, 
      transition: { 
        duration: 0.8, 
        ease: "easeOut" 
      } 
    }
  };

  return (
    <section 
      id="about" 
      className="py-20 bg-white"
      ref={ref}
    >
      <motion.div 
        className="container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate={isIntersecting ? "visible" : "hidden"}
      >
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">
          <motion.div 
            className="md:w-1/2"
            variants={itemVariants}
          >
            <SectionHeading
              subHeading="ABOUT US"
              heading="A Wealth of Experience To Heal and Help You."
              description="We bring together a team of highly qualified medical professionals with decades of combined experience."
            />
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our mission is to provide personalized care that addresses your unique health needs with compassion and expertise.
              We strive to create a comfortable and welcoming environment where patients feel heard and valued.
            </p>
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
            
            <div className="mt-12 p-6 border-l-4 border-primary bg-gray-50 rounded-r-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-secondary">Membership Benefits</h3>
              <p className="text-gray-600 leading-relaxed">
                Our membership program offers exclusive benefits including priority appointments, extended consultations, 
                and personalized health plans. Join today to experience healthcare designed around your schedule and needs.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 relative"
            variants={itemVariants}
          >
            <div className="relative">
              <motion.div
                className="absolute -z-10 w-full h-full bg-primary/10 rounded-tl-[100px] rounded-br-[100px] right-5 bottom-5"
                variants={imageVariants}
                custom={1}
              />
              <motion.div 
                className="rounded-tl-[100px] rounded-br-[100px] relative overflow-hidden border-8 border-white shadow-xl"
                variants={imageVariants}
              >
                <img
                  src={aboutImage}
                  alt="Medical professionals collaborating"
                  className="w-full h-auto object-cover"
                />
                
                <motion.div 
                  className="absolute left-0 bottom-12 bg-white rounded-r-full py-4 px-6 shadow-lg flex items-center"
                  initial={{ x: -100, opacity: 0 }}
                  animate={isIntersecting ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <div className="text-secondary text-4xl font-bold mr-2">10+</div>
                  <div className="text-gray-800 font-medium">Years<br />Experience</div>
                </motion.div>
                
                <motion.div 
                  className="absolute top-12 right-0 w-16 h-16 bg-primary rounded-l-full flex items-center justify-center shadow-lg"
                  initial={{ x: 100, opacity: 0 }}
                  animate={isIntersecting ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
