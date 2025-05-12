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
    <section id="home" className="pt-20 sm:pt-24 md:pt-28 pb-12 md:pb-16 md:min-h-screen bg-gray-50 flex items-center overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          <motion.div 
            className="mb-8 md:mb-0 md:w-1/2 max-w-lg mx-auto md:mx-0"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div 
              className="text-primary text-sm md:text-base font-medium uppercase tracking-wider mb-2 md:mb-3"
              variants={itemVariants}
            >
              MEDICAL CHECKUP
            </motion.div>
            
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-4 md:mb-6 leading-tight"
              variants={itemVariants}
            >
              Best IVF Specialist in Jaipur for Personalized Fertility Care.
            </motion.h1>
            
            <motion.p 
              className="text-gray-600 text-base md:text-lg mb-6 md:mb-8 leading-relaxed"
              variants={itemVariants}
            >
              Get compassionate, expert fertility care
with Dr. Urmila Sharma, a leading IVF
specialist in Jaipur with 18+ years of
experience. We offer IVF, IUI, ICSI, and
egg freezing—backed by high success rates and personalized support every step of the way.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex justify-center md:justify-start">
              <a href="#contact" onClick={scrollToContact}>
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-white uppercase font-medium px-6 sm:px-8 py-2.5 sm:py-3 rounded-md transition-all duration-300"
                >
                  BOOK APPOINTMENT
                </Button>
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            className="w-full sm:w-5/6 md:w-1/2 relative mx-auto md:mx-0"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Modern UI element with doctor image */}
              <div className="rounded-[30px] sm:rounded-[40px] overflow-hidden relative h-[280px] sm:h-[340px] md:h-[420px] lg:h-[480px] bg-gradient-to-br from-primary/80 to-blue-600/90 shadow-2xl">
                {/* Abstract decorative shapes inside */}
                <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-white/10 rounded-bl-full"></div>
                <div className="absolute bottom-0 left-0 w-2/5 h-2/5 bg-white/5 rounded-tr-full"></div>
                
                {/* Doctor image centered in the card */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div 
                    className="w-full h-full"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                  >
                    <div 
                      className="w-full h-full bg-contain bg-no-repeat bg-center"
                      style={{ 
                        backgroundImage: `url(${heroImage})`,
                        backgroundPosition: 'center 10%'
                      }}
                    />
                  </motion.div>
                </div>
                
                {/* Subtle floating circles - reduced for mobile */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  {Array(3).fill(0).map((_, i) => (
                    <motion.div 
                      key={i}
                      className="absolute rounded-full bg-white/10"
                      style={{
                        width: `${Math.random() * 40 + 20}px`,
                        height: `${Math.random() * 40 + 20}px`,
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        y: [0, -10, 0],
                        opacity: [0.05, 0.1, 0.05],
                      }}
                      transition={{
                        duration: 3 + i,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </div>
                
                {/* Decorative dot pattern in top right - smaller on mobile */}
                <div className="absolute top-2 right-2 md:top-4 md:right-4 scale-75 md:scale-100">
                  <div className="grid grid-cols-4 grid-rows-4 md:grid-cols-6 md:grid-rows-6 gap-1">
                    {Array(16).fill(0).map((_, i) => (
                      <div key={i} className="w-1 h-1 md:w-1.5 md:h-1.5 bg-white/70 rounded-full"></div>
                    ))}
                  </div>
                </div>
                
                {/* Decorative diagonal lines in bottom left */}
                <div className="absolute bottom-6 md:bottom-10 left-0">
                  <div className="space-y-0.5">
                    {Array(3).fill(0).map((_, i) => (
                      <div 
                        key={i} 
                        className="h-0.5 bg-white/40" 
                        style={{ 
                          width: `${14 - i * 3}px`,
                          transform: `translateY(${i * 2}px) rotate(45deg)` 
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Icon Elements - adjusted for responsive */}
              <motion.div 
                className="absolute top-8 md:top-12 left-0 -translate-x-1/3 sm:-translate-x-1/2 bg-white p-2 md:p-3 rounded-lg md:rounded-xl shadow-md z-10"
                variants={floatingIconVariants}
                custom={0}
                whileHover={{ y: -5 }}
              >
                <ClipboardIcon />
              </motion.div>
              
              <motion.div 
                className="absolute top-1/4 right-0 translate-x-1/3 sm:translate-x-1/2 bg-white p-2 md:p-3 rounded-lg md:rounded-xl shadow-md z-10"
                variants={floatingIconVariants}
                custom={1}
                whileHover={{ y: -5 }}
              >
                <CommentsIcon />
              </motion.div>
              
              <motion.div 
                className="absolute bottom-1/4 left-4 md:left-10 bg-white p-2 md:p-3 rounded-lg md:rounded-xl shadow-md z-10"
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
