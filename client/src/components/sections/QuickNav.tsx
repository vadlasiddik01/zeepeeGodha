import React from "react";
import { FaUserDoctor, FaClipboardList, FaComments, FaAward, FaEnvelope } from "react-icons/fa6";

const navItems = [
  { id: "about", icon: <FaUserDoctor className="w-5 h-5" />, label: "About" },
  { id: "services", icon: <FaClipboardList className="w-5 h-5" />, label: "Services" },
  { id: "testimonials", icon: <FaComments className="w-5 h-5" />, label: "Testimonials" },
  { id: "awards", icon: <FaAward className="w-5 h-5" />, label: "Awards" },
  { id: "contact", icon: <FaEnvelope className="w-5 h-5" />, label: "Contact" },
];

export function QuickNav() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = document.querySelector("header")?.offsetHeight || 0;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="flex flex-col items-center justify-center group"
              onClick={(e) => scrollToSection(e, item.id)}
            >
              <div className="flex items-center justify-center w-16 h-16 mb-2 rounded-full bg-white shadow-md group-hover:bg-primary group-hover:text-white text-primary transition-all duration-300 transform group-hover:scale-110">
                {item.icon}
              </div>
              <span className="text-sm font-medium text-gray-700 group-hover:text-primary transition-colors duration-300">
                {item.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
