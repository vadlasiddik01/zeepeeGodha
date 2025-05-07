import React from "react";
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, 
              luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet.
            </motion.p>
            
            <motion.div variants={itemVariants}>
              <a href="#contact" onClick={scrollToContact}>
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-white uppercase font-medium px-8 py-3 rounded-md transition-all duration-300"
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
              {/* Modern UI element replacing the image */}
              <div className="rounded-[40px] overflow-hidden relative h-[380px] md:h-[480px] bg-gradient-to-br from-primary/80 to-blue-600/90 shadow-2xl">
                {/* Abstract decorative shapes inside */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-bl-full"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-tr-full"></div>
                
                {/* Animated floating shapes for modern feel */}
                <div className="absolute inset-0 overflow-hidden">
                  {Array(6).fill(0).map((_, i) => (
                    <motion.div 
                      key={i}
                      className="absolute rounded-full bg-white/10"
                      style={{
                        width: `${Math.random() * 100 + 50}px`,
                        height: `${Math.random() * 100 + 50}px`,
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0.1, 0.2, 0.1],
                      }}
                      transition={{
                        duration: 5 + i,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </div>
                
                {/* Centered text content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
                  <motion.div 
                    className="text-2xl md:text-4xl font-bold mb-4 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                  >
                    Advanced Medical Care
                  </motion.div>
                  <motion.div 
                    className="text-lg md:text-xl font-light mb-6 text-center max-w-md"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                  >
                    Our expert team provides personalized health services with cutting-edge technology
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                  >
                    <Button 
                      size="lg" 
                      className="bg-white text-primary hover:bg-white/90 font-medium px-8 py-3 rounded-full"
                    >
                      Learn More
                    </Button>
                  </motion.div>
                </div>
                
                {/* Decorative dot pattern in top right */}
                <div className="absolute top-4 right-4">
                  <div className="grid grid-cols-6 grid-rows-6 gap-1">
                    {Array(36).fill(0).map((_, i) => (
                      <div key={i} className="w-1.5 h-1.5 bg-white/70 rounded-full"></div>
                    ))}
                  </div>
                </div>
                
                {/* Decorative diagonal lines in bottom left */}
                <div className="absolute bottom-10 left-0">
                  <div className="space-y-0.5">
                    {Array(3).fill(0).map((_, i) => (
                      <div 
                        key={i} 
                        className="h-0.5 bg-white/40" 
                        style={{ 
                          width: `${20 - i * 4}px`, 
                          transform: `translateY(${i * 3}px) rotate(45deg)` 
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Icon Elements - positioned exactly like in reference */}
              <motion.div 
                className="absolute top-12 left-0 -translate-x-1/2 bg-white p-3 rounded-xl shadow-md z-10"
                variants={floatingIconVariants}
                custom={0}
                whileHover={{ y: -5 }}
              >
                <ClipboardIcon />
              </motion.div>
              
              <motion.div 
                className="absolute top-1/4 right-0 translate-x-1/2 bg-white p-3 rounded-xl shadow-md z-10"
                variants={floatingIconVariants}
                custom={1}
                whileHover={{ y: -5 }}
              >
                <CommentsIcon />
              </motion.div>
              
              <motion.div 
                className="absolute bottom-1/4 left-10 bg-white p-3 rounded-xl shadow-md z-10"
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
