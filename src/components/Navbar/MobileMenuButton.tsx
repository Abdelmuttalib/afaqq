import React from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

interface MobileMenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export function MobileMenuButton({ isOpen, onClick }: MobileMenuButtonProps) {
  return (
    <button
      onClick={onClick}
      className="text-white hover:text-gold-400 md:hidden"
    >
      {isOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
    </button>
  );
}