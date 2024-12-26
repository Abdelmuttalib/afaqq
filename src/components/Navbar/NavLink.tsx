import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function NavLink({ href, children, className = '' }: NavLinkProps) {
  return (
    <a 
      href={href} 
      className={`text-white hover:text-gold-400 px-3 py-2 text-sm font-medium ${className}`}
    >
      {children}
    </a>
  );
}