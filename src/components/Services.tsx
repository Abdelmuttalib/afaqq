import React from "react";
import { motion } from "framer-motion";
import {
  HiOutlineCode,
  HiOutlinePencil,
  HiOutlineCamera,
} from "react-icons/hi";

const services = [
  {
    icon: <HiOutlineCode className="h-8 w-8" />,
    title: "Web Development",
    description:
      "Custom websites built with modern technologies and best practices.",
  },
  {
    icon: <HiOutlinePencil className="h-8 w-8" />,
    title: "Brand Design",
    description:
      "Crafting unique brand identities that leave lasting impressions.",
  },
  {
    icon: <HiOutlineCamera className="h-8 w-8" />,
    title: "Digital Marketing",
    description: "Strategic marketing solutions to grow your digital presence.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600">
            Elevating brands through innovative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="p-8 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <div className="text-gold-500 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
