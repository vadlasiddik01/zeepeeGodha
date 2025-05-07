import React from "react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { SectionHeading } from "@/components/ui/section-heading";

const awards = [
  {
    id: 1,
    value: "99%",
    label: "Happy Patients"
  },
  {
    id: 2,
    value: "70+",
    label: "Team Members"
  },
  {
    id: 3,
    value: "20+",
    label: "Year Experience"
  },
  {
    id: 4,
    value: "18+",
    label: "Global Awards"
  }
];

export function Awards() {
  const { ref, isIntersecting } = useIntersectionObserver();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section
      id="awards"
      className="py-16 bg-gray-50"
      ref={ref}
    >
      <div className="container mx-auto px-4">
        <SectionHeading
          subHeading="AWARDS"
          heading="Our Doctor Specialist & Experience"
          centered
        />
        
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
        >
          {awards.map((award) => (
            <motion.div
              key={award.id}
              className="bg-white rounded-lg shadow-sm p-6 text-center"
              variants={itemVariants}
            >
              <h3 className="text-5xl font-bold text-primary mb-2">{award.value}</h3>
              <p className="text-gray-600">{award.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
