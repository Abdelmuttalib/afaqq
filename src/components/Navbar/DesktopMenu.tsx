import React from 'react';
import { NavLink } from './NavLink';

export function DesktopMenu() {
  return (
    <div className="hidden md:block">
      <div className="ml-10 flex items-baseline space-x-8">
        <NavLink href="#home">Home</NavLink>
        <NavLink href="#services">Services</NavLink>
        <NavLink href="#portfolio">Portfolio</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </div>
    </div>
  );
}