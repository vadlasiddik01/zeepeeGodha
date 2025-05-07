import React, { useState } from "react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { LocationIcon, PhoneIcon, EmailIcon, FacebookIcon, TwitterIcon, InstagramIcon, LinkedInIcon } from "@/lib/icons";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(6, "Phone number must be at least 6 characters"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const contactDetails = [
  {
    id: 1,
    icon: <LocationIcon />,
    title: "Our Location",
    content: "123 Medical Center Drive, Healthville, 10001"
  },
  {
    id: 2,
    icon: <PhoneIcon />,
    title: "Phone Number",
    content: "(123) 456-7890"
  },
  {
    id: 3,
    icon: <EmailIcon />,
    title: "Email Address",
    content: "contact@mydoctor.com"
  }
];

const socialMedia = [
  { id: 1, icon: <FacebookIcon />, href: "#", label: "Facebook" },
  { id: 2, icon: <TwitterIcon />, href: "#", label: "Twitter" },
  { id: 3, icon: <InstagramIcon />, href: "#", label: "Instagram" },
  { id: 4, icon: <LinkedInIcon />, href: "#", label: "LinkedIn" },
];

export function Contact() {
  const { ref, isIntersecting } = useIntersectionObserver();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  function onSubmit(data: FormValues) {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted:", data);
      toast({
        title: "Appointment Request Submitted",
        description: "We will contact you shortly to confirm your appointment.",
      });
      form.reset();
      setIsSubmitting(false);
    }, 1000);
  }
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-white to-gray-50"
      ref={ref}
    >
      <motion.div
        className="container mx-auto px-4 md:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate={isIntersecting ? "visible" : "hidden"}
      >
        <SectionHeading
          subHeading="CONTACT US"
          heading="Get in Touch With Our Team"
          description="Have questions about our services or want to schedule an appointment? Reach out to us using any of the methods below."
          centered
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-12">
          <motion.div 
            className="lg:col-span-1"
            variants={itemVariants}
          >
            <div className="bg-white rounded-xl shadow-lg p-8 h-full">
              <h3 className="text-2xl font-bold mb-6 text-secondary">Contact Information</h3>
              
              <div className="space-y-8">
                {contactDetails.map((detail) => (
                  <motion.div 
                    key={detail.id} 
                    className="flex items-start group"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mr-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <div className="text-primary group-hover:text-white transition-colors duration-300 text-xl">
                        {detail.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{detail.title}</h4>
                      <p className="text-gray-600">{detail.content}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-10">
                <h4 className="font-bold text-lg mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {socialMedia.map((item) => (
                    <a 
                      key={item.id}
                      href={item.href}
                      aria-label={item.label}
                      className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white text-gray-600 transition-colors duration-300"
                    >
                      {item.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:col-span-2"
            variants={itemVariants}
          >
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-secondary">Request an Appointment</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700">Full Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="John Doe" 
                              {...field} 
                              className="rounded-lg border-gray-300 focus:border-primary focus:ring-primary"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700">Email Address</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="johndoe@example.com" 
                              type="email" 
                              {...field} 
                              className="rounded-lg border-gray-300 focus:border-primary focus:ring-primary"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700">Phone Number</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="(123) 456-7890" 
                              type="tel" 
                              {...field} 
                              className="rounded-lg border-gray-300 focus:border-primary focus:ring-primary"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700">Service Required</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="rounded-lg border-gray-300 focus:border-primary focus:ring-primary">
                                <SelectValue placeholder="Select a service" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="general">General Checkup</SelectItem>
                              <SelectItem value="cardiology">Cardiology</SelectItem>
                              <SelectItem value="neurology">Neurology</SelectItem>
                              <SelectItem value="orthopedics">Orthopedics</SelectItem>
                              <SelectItem value="pediatrics">Pediatrics</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700">Additional Information</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Please provide any additional details about your appointment request"
                            rows={4}
                            {...field}
                            className="rounded-lg border-gray-300 focus:border-primary focus:ring-primary resize-none"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      type="submit" 
                      className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit Request"}
                    </Button>
                  </motion.div>
                </form>
              </Form>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
