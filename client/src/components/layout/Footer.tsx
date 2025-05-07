import React from "react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedInIcon } from "@/lib/icons";
import { FaHeartbeat } from "react-icons/fa";

const companyLinks = [
  { href: "#about", label: "About Us" },
  { href: "#", label: "Leadership" },
  { href: "#", label: "Careers" },
  { href: "#", label: "News & Articles" },
  { href: "#", label: "Legal Notice" }
];

const supportLinks = [
  { href: "#", label: "Help Center" },
  { href: "#", label: "Ticket Support" },
  { href: "#contact", label: "Contact Us" }
];

const policyLinks = [
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Cookie Policy" },
  { href: "#", label: "Terms of Use" },
  { href: "#", label: "Sitemap" }
];

export function Footer() {
  const { ref, isIntersecting } = useIntersectionObserver();
  
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (id === "#") return;
    
    const element = document.getElementById(id.substring(1));
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
    <footer
      className="bg-gray-100 pt-16 pb-8"
      ref={ref}
    >
      <motion.div
        className="container mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <FaHeartbeat className="text-secondary text-2xl mr-2" />
              <span className="text-secondary text-2xl font-bold">
                my<span className="text-primary">doctor</span>
              </span>
            </div>
            <p className="text-gray-600 mb-6">
              Providing exceptional healthcare services with compassion and expertise 
              to improve quality of life for our patients.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-primary transition duration-300">
                <FacebookIcon />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition duration-300">
                <TwitterIcon />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition duration-300">
                <InstagramIcon />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition duration-300">
                <LinkedInIcon />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-primary transition duration-300"
                    onClick={(e) => scrollToSection(e, link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Support</h4>
            <ul className="space-y-3">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-primary transition duration-300"
                    onClick={(e) => scrollToSection(e, link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Download App</h4>
            <p className="text-gray-600 mb-4">
              Access your health information, book appointments, and consult with doctors from our mobile app.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="inline-block">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Google Play Store"
                  className="h-10 w-auto"
                />
              </a>
              <a href="#" className="inline-block">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                  alt="Apple App Store"
                  className="h-10 w-auto"
                />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm mb-4 md:mb-0">
              © 2023 myDoctor. All rights reserved. Powered by MedCreative.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {policyLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-600 hover:text-primary text-sm transition duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
