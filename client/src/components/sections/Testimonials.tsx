import React from "react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { SectionHeading } from "@/components/ui/section-heading";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Jack Brown",
    role: "Designer",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
    quote: "The doctors and staff at MyDoctor are exceptional. They took the time to understand my concerns and provided personalized care that made me feel valued as a patient.",
    rating: 5
  },
  {
    id: 2,
    name: "Jack Brown",
    role: "Designer",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
    quote: "I've been coming to MyDoctor for years, and the quality of care is consistently outstanding. The online booking system and telehealth options make managing my health so convenient.",
    rating: 5
  },
  {
    id: 3,
    name: "Jack Brown",
    role: "Designer",
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
      className="py-20 bg-white"
      ref={ref}
    >
      <div className="container mx-auto px-4">
        <SectionHeading
          subHeading="TESTIMONY"
          heading="What Our Patient Say About Us"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
          centered
        />
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
          variants={containerVariants}
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="bg-white rounded-xl border-2 border-transparent shadow-sm p-6 relative overflow-hidden transition-all duration-300 hover:border-primary hover:shadow-[0_10px_30px_-5px_rgba(59,130,246,0.3)]"
              variants={itemVariants}
              whileHover={{ 
                y: -10
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-md">
                  <img 
                    src={testimonial.avatarUrl}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="flex justify-center text-yellow-400 mb-4">
                {Array(testimonial.rating).fill(0).map((_, i) => (
                  <FaStar key={i} className="mx-0.5" />
                ))}
              </div>
              
              <p className="text-gray-700 text-center italic mb-4 line-clamp-4">"{testimonial.quote}"</p>
              
              <div className="text-center">
                <h4 className="font-bold text-lg text-secondary">{testimonial.name}</h4>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
