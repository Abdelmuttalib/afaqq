import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { Logo } from "./logo";
import { siteConfig } from "@/config/site-config";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-background/60 backdrop-blur-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Logo />
            {/* <span className="text-2xl font-bold text-white">LUXE</span> */}
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {siteConfig.navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground px-3 py-2 text-sm font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gold-400"
            >
              {isOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#home"
              className="text-white hover:text-gold-400 block px-3 py-2 text-base font-medium"
            >
              Home
            </a>
            <a
              href="#services"
              className="text-white hover:text-gold-400 block px-3 py-2 text-base font-medium"
            >
              Services
            </a>
            <a
              href="#portfolio"
              className="text-white hover:text-gold-400 block px-3 py-2 text-base font-medium"
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className="text-white hover:text-gold-400 block px-3 py-2 text-base font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
