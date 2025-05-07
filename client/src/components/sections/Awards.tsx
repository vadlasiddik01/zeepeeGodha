import React from "react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { SectionHeading } from "@/components/ui/section-heading";
import { FaTrophy, FaUsers, FaClock, FaAward } from "react-icons/fa";
import awardsImage from "@assets/awards.png";

const awards = [
  {
    id: 1,
    value: "99%",
    label: "Happy Patients",
    icon: <FaUsers className="text-white text-2xl" />
  },
  {
    id: 2,
    value: "70+",
    label: "Team Members",
    icon: <FaUsers className="text-white text-2xl" />
  },
  {
    id: 3,
    value: "20+",
    label: "Year Experience",
    icon: <FaClock className="text-white text-2xl" />
  },
  {
    id: 4,
    value: "18+",
    label: "Global Awards",
    icon: <FaTrophy className="text-white text-2xl" />
  }
];

export function Awards() {
  const { ref, isIntersecting } = useIntersectionObserver();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 12 
      } 
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

  const countAnimation = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { 
        type: "spring", 
        stiffness: 80 
      } 
    }
  };

  return (
    <section
      id="awards"
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
      ref={ref}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="lg:w-1/2 order-2 lg:order-1"
            variants={containerVariants}
            initial="hidden"
            animate={isIntersecting ? "visible" : "hidden"}
          >
            <motion.div className="grid grid-cols-2 gap-6" variants={containerVariants}>
              {awards.map((award, index) => (
                <motion.div
                  key={award.id}
                  className={`bg-white rounded-xl shadow-lg p-6 border border-gray-100 transform ${index % 2 === 0 ? 'lg:-translate-y-4' : ''}`}
                  variants={itemVariants}
                  whileHover={{ 
                    y: -10, 
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mr-4">
                      {award.icon}
                    </div>
                    <motion.h3 
                      className="text-4xl font-bold text-primary"
                      variants={countAnimation}
                    >
                      {award.value}
                    </motion.h3>
                  </div>
                  <p className="text-gray-700 font-medium">{award.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2 order-1 lg:order-2"
            initial={{ opacity: 0, x: 20 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.7 }}
          >
            <SectionHeading
              subHeading="AWARDS & ACHIEVEMENTS"
              heading="Recognized Excellence in Healthcare Services"
              description="Our commitment to quality healthcare has been recognized with numerous awards and accreditations. We take pride in our team's dedication to excellence and innovation in medical services."
            />
            
            <motion.div 
              className="mt-8 relative"
              variants={imageVariants}
              initial="hidden"
              animate={isIntersecting ? "visible" : "hidden"}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -z-10 translate-x-1/4 -translate-y-1/4"></div>
              
              <div className="rounded-tl-[50px] rounded-br-[50px] overflow-hidden shadow-xl">
                <img
                  src={awardsImage}
                  alt="Our medical team receiving awards"
                  className="w-full h-auto"
                />
              </div>
              
              <motion.div 
                className="absolute -bottom-6 -left-6 bg-white py-3 px-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isIntersecting ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <div className="flex items-center">
                  <FaAward className="text-primary text-3xl mr-3" />
                  <div>
                    <div className="text-lg font-bold">Excellence in Care</div>
                    <div className="text-sm text-gray-600">2023 Healthcare Award</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
