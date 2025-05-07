import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { 
    href: "#", 
    label: "Pages", 
    dropdownItems: [
      { href: "#testimonials", label: "Testimonials" },
      { href: "#awards", label: "Awards" },
      { href: "#contact", label: "Contact" },
      { href: "#doctor-banner", label: "Our Doctors" }
    ]
  },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id.substring(1));
    if (element) {
      const headerHeight = document.querySelector("header")?.offsetHeight || 0;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 bg-white z-50 transition-all duration-300 ${scrolled ? "shadow-lg py-2" : "py-4"}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#home" className="flex items-center" onClick={(e) => scrollToSection(e, "#home")}>
            <span className="text-secondary text-2xl font-bold">
              my<span className="text-primary">doctor</span>
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            link.dropdownItems ? (
              <DropdownMenu key={link.href}>
                <DropdownMenuTrigger className="flex items-center text-gray-800 hover:text-primary font-medium focus:outline-none">
                  {link.label} <FaChevronDown className="ml-1 h-3 w-3" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-white rounded-md shadow-lg p-2 min-w-[160px]">
                  {link.dropdownItems.map((item) => (
                    <DropdownMenuItem 
                      key={item.href} 
                      className="cursor-pointer hover:bg-gray-100 rounded-md p-2"
                      onClick={(e) => scrollToSection(e as any, item.href)}
                    >
                      {item.label}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-800 hover:text-primary font-medium transition-colors duration-200"
                onClick={(e) => scrollToSection(e, link.href)}
              >
                {link.label}
              </a>
            )
          ))}
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "#contact")}
          >
            <Button variant="default" className="bg-primary hover:bg-primary/90 px-6 shadow-md transition-all duration-300 hover:shadow-lg">
              Book Appointment
            </Button>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <FaTimes className="text-2xl" />
          ) : (
            <FaBars className="text-2xl" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              link.dropdownItems ? (
                <div key={link.href} className="space-y-2">
                  <div className="font-medium text-gray-800">{link.label}</div>
                  <div className="pl-4 space-y-2 border-l-2 border-primary">
                    {link.dropdownItems.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="block text-gray-600 hover:text-primary transition-colors duration-200"
                        onClick={(e) => scrollToSection(e, item.href)}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-medium text-gray-800 hover:text-primary transition-colors duration-200"
                  onClick={(e) => scrollToSection(e, link.href)}
                >
                  {link.label}
                </a>
              )
            ))}
            <a
              href="#contact"
              className="bg-primary text-white py-3 px-4 rounded-md text-center hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-lg"
              onClick={(e) => scrollToSection(e, "#contact")}
            >
              Book Appointment
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
