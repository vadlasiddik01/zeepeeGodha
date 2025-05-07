import React from "react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { SectionHeading } from "@/components/ui/section-heading";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import testimonialImage from "@assets/testimonial.png";

const testimonials = [
  {
    id: 1,
    name: "Michael Johnson",
    role: "Patient",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
    quote: "The doctors and staff at MyDoctor are exceptional. They took the time to understand my concerns and provided personalized care that made me feel valued as a patient.",
    rating: 5
  },
  {
    id: 2,
    name: "Sarah Thomas",
    role: "Patient",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
    quote: "I've been coming to MyDoctor for years, and the quality of care is consistently outstanding. The online booking system and telehealth options make managing my health so convenient.",
    rating: 5
  },
  {
    id: 3,
    name: "Robert Chen",
    role: "Patient",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
    quote: "After searching for a doctor who would truly listen, I found MyDoctor. The specialists here provided a comprehensive treatment plan that has significantly improved my health and quality of life.",
    rating: 5
  }
];

export function Testimonials() {
  const { ref, isIntersecting } = useIntersectionObserver();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const imageVariants = {
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

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-b from-white to-gray-50"
      ref={ref}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <SectionHeading
              subHeading="TESTIMONY"
              heading="What Our Patients Say About Us"
              description="Hear from our satisfied patients about their experiences with our healthcare services. We pride ourselves on providing exceptional care and value feedback from those we serve."
            />
            
            <motion.div
              className="relative mt-10 p-8 bg-white rounded-xl shadow-lg border border-gray-100"
              variants={itemVariants}
              initial="hidden"
              animate={isIntersecting ? "visible" : "hidden"}
              whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
              transition={{ duration: 0.3 }}
            >
              <FaQuoteLeft className="text-primary/20 text-4xl absolute top-6 left-6" />
              
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 mr-4 overflow-hidden rounded-full border-2 border-primary p-1">
                  <motion.img 
                    src={testimonials[0].avatarUrl}
                    alt={testimonials[0].name}
                    className="w-full h-full rounded-full object-cover"
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg">{testimonials[0].name}</h4>
                  <p className="text-gray-500">{testimonials[0].role}</p>
                </div>
              </div>
              
              <div className="flex text-yellow-400 mb-4">
                {Array(testimonials[0].rating).fill(0).map((_, i) => (
                  <FaStar key={i} className="mr-1" />
                ))}
              </div>
              
              <p className="text-gray-700 italic leading-relaxed mb-4">"{testimonials[0].quote}"</p>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2 relative"
            variants={containerVariants}
            initial="hidden"
            animate={isIntersecting ? "visible" : "hidden"}
          >
            <motion.div 
              className="relative z-10"
              variants={imageVariants}
            >
              <div className="rounded-tr-[80px] rounded-bl-[80px] overflow-hidden shadow-xl">
                <img 
                  src={testimonialImage} 
                  alt="Happy patients with doctor"
                  className="w-full h-auto"
                />
              </div>
              
              <motion.div 
                className="absolute bottom-6 left-6 right-6 bg-white p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-primary">98%</div>
                    <div className="text-sm text-gray-600">Satisfaction Rate</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">10k+</div>
                    <div className="text-sm text-gray-600">Happy Patients</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">15+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            
            <div className="absolute top-1/4 -right-4 w-32 h-32 bg-primary/10 rounded-full -z-10"></div>
            <div className="absolute bottom-1/3 -left-4 w-24 h-24 bg-secondary/10 rounded-full -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
