import React from "react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { SectionHeading } from "@/components/ui/section-heading";
import { getServiceIcon } from "@/lib/icons";


const services = [
  {
    id: 1,
    type: "Ivf",
    title: "🧬 IVF (In Vitro Fertilization)",
    description: "Advanced IVF treatment in India with a high success rate, using personalized protocols and cutting-edge technology."
  },
  {
    id: 2,
    type: "Intra",
    title: "💉 IUI (Intrauterine Insemination)",
    description: "A less-invasive fertility solution, ideal for couples with mild fertility issues or unexplained infertility."
  },
  {
    id: 3,
    type: "Injection",
    title: "🧪 ICSI (Intracytoplasmic Sperm Injection)",
    description: "Precise sperm injection technique for male factor infertility, improving fertilization chances in IVF cycles."
  }
  ,
  {
    id: 4,
    type: "Preservation",
    title: "❄️ Egg Freezing (Oocyte Cryopreservation)",
    description: "Secure your fertility with expert egg freezing services for medical, personal, or career-related reasons."
  }
];

export function Services() {
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
      id="services"
      className="py-8 sm:py-10 md:py-12 bg-gray-50"
      ref={ref}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <SectionHeading
          subHeading="Our Services"
          heading="Comprehensive Healthcare Solutions"
          description="We offer a wide range of medical services to meet all your healthcare needs under one roof."
          centered
        />
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg"
              variants={itemVariants}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                {getServiceIcon(service.type)}
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
