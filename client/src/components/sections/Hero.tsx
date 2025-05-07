import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ClipboardIcon, CommentsIcon, CalendarIcon, DecorativeDots } from "@/lib/icons";
import heroImage from "@assets/hero.png";

export function Hero() {
  const doctorImageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // This ensures the doctor image is displayed when the homepage loads
    if (doctorImageRef.current) {
      doctorImageRef.current.src = heroImage;
    }
  }, []);

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

  const imageContainerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
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
    <section id="home" className="pt-28 pb-16 md:min-h-screen bg-white flex items-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -z-10 transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/5 rounded-full -z-10 transform -translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
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
              MEDICAL EXCELLENCE
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight"
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
                  className="bg-primary hover:bg-primary/90 text-white font-medium px-8 py-6 rounded-md shadow-md hover:shadow-lg transition-all duration-300"
                >
                  BOOK APPOINTMENT
                </Button>
              </a>
            </motion.div>
            
            <motion.div 
              className="flex items-center space-x-6 mt-10"
              variants={itemVariants}
            >
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <ClipboardIcon />
                </div>
                <span className="text-gray-700 font-medium">Expert Doctors</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <CalendarIcon />
                </div>
                <span className="text-gray-700 font-medium">Online Booking</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="md:w-1/2 relative"
            initial="hidden"
            animate="visible"
            variants={imageContainerVariants}
          >
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute top-0 left-0 w-full h-full bg-primary rounded-full transform -translate-x-5 -translate-y-5 -z-10"></div>
              <div className="bg-white rounded-full p-4 relative overflow-hidden shadow-xl">
                <img
                  ref={doctorImageRef}
                  src={heroImage}
                  alt="Doctor with stethoscope"
                  className="w-full h-auto object-cover rounded-full"
                />
              </div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div 
              className="absolute top-1/4 left-0 bg-white p-4 rounded-lg shadow-lg transform -translate-x-1/2"
              variants={floatingIconVariants}
              custom={0}
              whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <ClipboardIcon />
            </motion.div>
            
            <motion.div 
              className="absolute bottom-1/4 right-0 bg-white p-4 rounded-lg shadow-lg transform translate-x-1/3"
              variants={floatingIconVariants}
              custom={1}
              whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <CommentsIcon />
            </motion.div>
            
            <motion.div 
              className="absolute top-1/2 right-0 bg-white p-4 rounded-lg shadow-lg transform translate-x-1/2"
              variants={floatingIconVariants}
              custom={2}
              whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <CalendarIcon />
            </motion.div>

            {/* Statistics Element */}
            <motion.div 
              className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 bg-white py-3 px-6 rounded-full shadow-lg flex items-center space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <div className="text-center border-r pr-4 border-gray-200">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-xs text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">98%</div>
                <div className="text-xs text-gray-600">Success Rate</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
