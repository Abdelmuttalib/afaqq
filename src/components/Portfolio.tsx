import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Modern E-commerce",
    category: "Web Development",
    // Using placeholder colors instead of images
    bgColor: "bg-gray-800",
  },
  {
    title: "Brand Identity",
    category: "Design",
    bgColor: "bg-gray-900",
  },
  {
    title: "Digital Campaign",
    category: "Marketing",
    bgColor: "bg-black",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-40 bg-gray-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Work</h2>
          <p className="text-xl text-gray-600">
            Showcasing our finest projects
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-lg aspect-video"
            >
              <div className={`w-full h-full ${project.bgColor}`} />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300">{project.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
