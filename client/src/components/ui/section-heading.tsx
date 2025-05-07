import React from "react";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  subHeading?: string;
  heading: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({
  subHeading,
  heading,
  description,
  centered = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={`${centered ? "text-center" : ""} mb-8 md:mb-12 ${className || ""}`}>
      {subHeading && (
        <motion.div 
          className="section-subheading mb-3"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {subHeading}
        </motion.div>
      )}
      
      <motion.h2 
        className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {heading}
      </motion.h2>
      
      {description && (
        <motion.p 
          className={`text-gray-600 max-w-3xl leading-relaxed ${centered ? "mx-auto" : ""}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
