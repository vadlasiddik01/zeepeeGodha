import React from "react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { SectionHeading } from "@/components/ui/section-heading";
import { FaStar } from "react-icons/fa";

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

  return (
    <section
      id="testimonials"
      className="py-16 bg-white"
      ref={ref}
    >
      <div className="container mx-auto px-4">
        <SectionHeading
          subHeading="TESTIMONY"
          heading="What Our Patients Say About Us"
          description="Hear from our satisfied patients about their experiences with our healthcare services."
          centered
        />
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="bg-white rounded-lg border border-gray-100 shadow-sm p-6"
              variants={itemVariants}
            >
              <div className="flex justify-center mb-4">
                <img 
                  src={testimonial.avatarUrl}
                  alt={`${testimonial.name}`}
                  className="w-16 h-16 rounded-full object-cover"
                />
              </div>
              
              <div className="flex justify-center text-accent mb-4">
                {Array(testimonial.rating).fill(0).map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              
              <p className="text-gray-600 text-center italic mb-4">"{testimonial.quote}"</p>
              
              <div className="text-center">
                <h4 className="font-bold">{testimonial.name}</h4>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
