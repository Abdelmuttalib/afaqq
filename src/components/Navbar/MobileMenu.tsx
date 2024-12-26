import React from 'react';
import { NavLink } from './NavLink';

interface MobileMenuProps {
  isOpen: boolean;
}

export function MobileMenu({ isOpen }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <NavLink href="#home" className="block">Home</NavLink>
        <NavLink href="#services" className="block">Services</NavLink>
        <NavLink href="#portfolio" className="block">Portfolio</NavLink>
        <NavLink href="#contact" className="block">Contact</NavLink>
      </div>
    </div>
  );
}