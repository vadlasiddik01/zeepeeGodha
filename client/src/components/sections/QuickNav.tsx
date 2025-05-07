import React from "react";

const navItems = [
  { id: "about", number: "01" },
  { id: "services", number: "02" },
  { id: "testimonials", number: "03" },
  { id: "awards", number: "04" },
  { id: "contact", number: "05" },
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
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="flex items-center justify-center w-14 h-14 rounded-full bg-white shadow-md hover:bg-primary hover:text-white transition duration-300"
              onClick={(e) => scrollToSection(e, item.id)}
            >
              <span className="text-lg font-bold">{item.number}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
