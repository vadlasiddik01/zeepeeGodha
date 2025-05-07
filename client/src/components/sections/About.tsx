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
            <div className="relative flex justify-center">
              {/* Main circular image container with border */}
              <motion.div 
                className="w-[350px] h-[350px] md:w-[400px] md:h-[400px] relative"
                variants={imageVariants}
              >
                {/* Circle border animation */}
                <div className="absolute inset-0 rounded-full border-[15px] border-white bg-white shadow-lg"></div>
                
                {/* Image container */}
                <div className="absolute inset-[15px] rounded-full overflow-hidden">
                  {/* Background image styling */}
                  <div 
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${aboutImage})` }}
                  ></div>
                </div>
                
                {/* Experience badge */}
                <div className="absolute -left-8 bottom-16 bg-white rounded-full p-4 shadow-lg flex items-center justify-center w-32 h-32">
                  <div>
                    <div className="text-4xl font-bold text-primary text-center">10+</div>
                    <div className="text-sm text-gray-700 text-center">Years Experience</div>
                  </div>
                </div>
                
                {/* Stethoscope icon circle */}
                <div className="absolute -right-4 top-8 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-md">
                  <FaStethoscope className="text-white text-2xl" />
                </div>
              </motion.div>
              
              {/* Background decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-3/4 h-3/4 bg-primary/5 rounded-full -z-10"></div>
              <div className="absolute -top-4 -left-4 w-1/2 h-1/2 bg-gray-100 rounded-full -z-10"></div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
