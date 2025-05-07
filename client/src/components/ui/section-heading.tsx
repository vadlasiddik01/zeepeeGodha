import React from "react";

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
    <div className={`${centered ? "text-center" : ""} mb-8 md:mb-12 ${className}`}>
      {subHeading && <div className="section-subheading">{subHeading}</div>}
      <h2 className="section-heading">{heading}</h2>
      {description && (
        <p className={`text-gray-600 ${centered ? "max-w-2xl mx-auto" : ""}`}>
          {description}
        </p>
      )}
    </div>
  );
}
