import React from "react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { SectionHeading } from "@/components/ui/section-heading";
import { FaArrowRight } from "react-icons/fa";

export function About() {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section 
      id="about" 
      className="py-16 bg-white"
      ref={ref}
    >
      <motion.div 
        className="container mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <SectionHeading
              subHeading="About Us"
              heading="A Wealth of Experience To Heal and Help You."
            />
            <p className="text-gray-600 mb-8">
              We bring together a team of highly qualified medical professionals with decades of combined experience. 
              Our mission is to provide personalized care that addresses your unique health needs with compassion and expertise.
            </p>
            <a 
              href="#services" 
              className="inline-flex items-center text-secondary font-semibold group"
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
            
            <div className="mt-12">
              <h3 className="text-xl font-bold mb-4">Easy way to join our membership.</h3>
              <p className="text-gray-600">
                Our membership program offers exclusive benefits including priority appointments, extended consultations, 
                and personalized health plans. Join today to experience healthcare designed around your schedule and needs.
              </p>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="rounded-full relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800"
                alt="Medical professionals collaborating"
                className="w-full h-auto rounded-full"
              />
              
              <div className="absolute left-0 bottom-1/4 bg-white rounded-full p-6 shadow-lg">
                <div className="text-secondary text-4xl font-bold">10+</div>
                <div className="text-gray-800 font-medium">Years Experience</div>
              </div>
              
              <div className="absolute top-0 right-0 w-16 h-16 bg-secondary rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
