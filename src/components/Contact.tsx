import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-xl text-gray-400">
            Let&apos;s create something amazing together
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 bg-gray-900 rounded-lg focus:ring-2 focus:ring-gold-500 outline-none"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-gray-900 rounded-lg focus:ring-2 focus:ring-gold-500 outline-none"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 bg-gray-900 rounded-lg focus:ring-2 focus:ring-gold-500 outline-none"
                placeholder="Your message"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-white text-black py-3 px-6 rounded-lg font-semibold hover:bg-gold-400 hover:text-white transition-colors"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
