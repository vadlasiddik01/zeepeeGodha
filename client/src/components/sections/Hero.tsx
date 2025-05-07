import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ClipboardIcon, CommentsIcon, CalendarIcon, DecorativeDots } from "@/lib/icons";

export function Hero() {
  const doctorImageRef = useRef<HTMLImageElement>(null);

  // Preload the doctor image
  useEffect(() => {
    const preloadImage = new Image();
    preloadImage.src = "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800";

    if (doctorImageRef.current) {
      doctorImageRef.current.src = preloadImage.src;
    }
  }, []);

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      const headerHeight = document.querySelector("header")?.offsetHeight || 0;
      const contactPosition = contactSection.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = contactPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className="pt-28 pb-16 md:min-h-screen bg-white flex items-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-10 md:mb-0 md:w-1/2">
            <div className="text-primary text-sm md:text-base font-medium uppercase tracking-wider mb-2">
              MEDICAL CHECKUP
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Best Medical Clinic For Your Healthcare
            </h1>
            <p className="text-gray-600 mb-8">
              We provide quality healthcare services with a team of experienced medical professionals. 
              Our goal is to ensure you receive the best medical attention and care for your health needs.
            </p>
            <a href="#contact" onClick={scrollToContact}>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                BOOK APPOINTMENT
              </Button>
            </a>
          </div>

          <div className="md:w-1/2 relative">
            <div className="bg-primary rounded-full p-16 md:p-24 relative">
              <img
                ref={doctorImageRef}
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800"
                alt="Doctor with stethoscope"
                className="absolute inset-0 w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Floating Icons */}
            <div className="absolute top-1/4 left-0 bg-white p-3 rounded-lg shadow-lg transform -translate-x-1/2">
              <ClipboardIcon />
            </div>
            <div className="absolute bottom-1/4 right-0 bg-white p-3 rounded-lg shadow-lg transform translate-x-1/2">
              <CommentsIcon />
            </div>
            <div className="absolute top-1/2 right-0 bg-white p-3 rounded-lg shadow-lg transform translate-x-1/2">
              <CalendarIcon />
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-1/2 right-0 w-20 h-20 bg-transparent">
              <DecorativeDots />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
