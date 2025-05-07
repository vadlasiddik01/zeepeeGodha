import React from "react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Button } from "@/components/ui/button";

export function DoctorBanner() {
  const { ref, isIntersecting } = useIntersectionObserver();
  
  return (
    <section
      className="py-8 bg-secondary text-white"
      ref={ref}
    >
      <motion.div
        className="container mx-auto px-4"
        initial={{ opacity: 0 }}
        animate={isIntersecting ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between">
          <h3 className="text-xl font-bold mb-4 md:mb-0">Are you a doctor? Interested in joining us?</h3>
          <Button variant="outline" className="bg-white text-secondary hover:bg-gray-100 border-white">
            Register here!
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
