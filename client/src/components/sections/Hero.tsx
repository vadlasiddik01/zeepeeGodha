import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ClipboardIcon, CommentsIcon, CalendarIcon } from "@/lib/icons";
import heroImage from "@assets/hero.png";

export function Hero() {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      const headerHeight = document.querySelector("header")?.offsetHeight || 0;
      const contactPosition = contactSection.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = contactPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: "spring", 
        stiffness: 100 
      } 
    }
  };

  const floatingIconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (custom: number) => ({
      opacity: 1,
      scale: 1,
      transition: { 
        delay: custom * 0.2 + 0.5,
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    })
  };

  return (
    <section id="home" className="pt-28 pb-16 md:min-h-screen bg-gray-50 flex items-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div 
            className="mb-10 md:mb-0 md:w-1/2"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div 
              className="text-primary text-sm md:text-base font-medium uppercase tracking-wider mb-3"
              variants={itemVariants}
            >
              MEDICAL CHECKUP
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-6 leading-tight"
              variants={itemVariants}
            >
              Best Medical Clinic For Your Healthcare
            </motion.h1>
            
            <motion.p 
              className="text-gray-600 text-lg mb-8 leading-relaxed max-w-lg"
              variants={itemVariants}
            >
              We provide quality healthcare services with a team of experienced medical professionals. 
              Our goal is to ensure you receive the best medical attention and care for your health needs.
            </motion.p>
            
            <motion.div variants={itemVariants}>
              <a href="#contact" onClick={scrollToContact}>
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-white uppercase font-medium px-8 py-4 rounded-md transition-all duration-300"
                >
                  BOOK APPOINTMENT
                </Button>
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            className="md:w-1/2 relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Main image with blue background */}
              <div className="rounded-[40px] bg-primary/30 overflow-hidden relative">
                <img
                  src={heroImage}
                  alt="Doctor with stethoscope"
                  className="w-full h-auto object-contain"
                />
                
                {/* Decorative pattern */}
                <div className="absolute top-3 right-3">
                  <div className="grid grid-cols-6 grid-rows-6 gap-1">
                    {Array(36).fill(0).map((_, i) => (
                      <div key={i} className="w-1.5 h-1.5 bg-secondary rounded-full opacity-70"></div>
                    ))}
                  </div>
                </div>
                
                {/* Decorative line */}
                <div className="absolute bottom-6 left-0 w-12 h-0.5 bg-gray-300 transform rotate-45"></div>
              </div>

              {/* Floating Elements */}
              <motion.div 
                className="absolute top-12 left-1/2 -translate-x-1/2 bg-white p-3 rounded-xl shadow-md"
                variants={floatingIconVariants}
                custom={0}
                whileHover={{ y: -5 }}
              >
                <ClipboardIcon />
              </motion.div>
              
              <motion.div 
                className="absolute bottom-1/3 right-0 translate-x-1/4 bg-white p-3 rounded-xl shadow-md"
                variants={floatingIconVariants}
                custom={1}
                whileHover={{ y: -5 }}
              >
                <CommentsIcon />
              </motion.div>
              
              <motion.div 
                className="absolute bottom-16 left-0 -translate-x-1/4 bg-white p-3 rounded-xl shadow-md"
                variants={floatingIconVariants}
                custom={2}
                whileHover={{ y: -5 }}
              >
                <CalendarIcon />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
