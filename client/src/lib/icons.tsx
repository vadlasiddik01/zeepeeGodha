import React from "react";
import { FaHeartbeat, FaStethoscope, FaBrain, FaBone, FaChild, FaCapsules, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaClipboardList, FaComments, FaCalendarCheck } from "react-icons/fa";
import Injection from "@assets/injection.svg";
import Intra from "@assets/intrauterine.svg";
import Ivf from "@assets/ivf.svg";
import Preservation from "@assets/preservation.svg";

// Function to get the appropriate icon based on service type
export const getServiceIcon = (type: string): React.ReactNode => {
  switch (type) {
    case "Ivf":
      return <img src={Ivf} alt="Ivf" className="text-primary text-2xl" />;
    case "Intra":
      return <img src={Intra} alt="Intra" className="text-primary text-2xl" />;
    case "Injection":
      return <img src={Injection} alt="Injection" className="text-primary text-2xl" />;
    case "Preservation":
      return <img src={Preservation} alt="Preservation"  className="text-primary text-2xl" />;
    default:
      return <FaHeartbeat className="text-primary text-2xl" />;
  }
};

// Floating Icons
export const ClipboardIcon = () => <FaClipboardList className="text-primary text-xl" />;
export const CommentsIcon = () => <FaComments className="text-primary text-xl" />;
export const CalendarIcon = () => <FaCalendarCheck className="text-primary text-xl" />;

// Contact Icons
export const LocationIcon = () => <FaMapMarkerAlt className="text-primary" />;
export const PhoneIcon = () => <FaPhoneAlt className="text-primary" />;
export const EmailIcon = () => <FaEnvelope className="text-primary" />;

// Social Media Icons
export const FacebookIcon = () => <FaFacebookF />;
export const TwitterIcon = () => <FaTwitter />;
export const InstagramIcon = () => <FaInstagram />;
export const LinkedInIcon = () => <FaLinkedinIn />;

// Hero section decorative dots
export const DecorativeDots = () => (
  <div className="grid grid-cols-4 gap-1">
    {Array(16).fill(0).map((_, i) => (
      <div key={i} className="w-1 h-1 rounded-full bg-primary opacity-70"></div>
    ))}
  </div>
);
