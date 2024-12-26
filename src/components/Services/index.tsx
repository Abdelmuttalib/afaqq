import React from 'react';
import { HiOutlineCode, HiOutlinePencil, HiOutlineCamera } from 'react-icons/hi';
import { Container } from '../layout/Container';
import { SectionTitle } from '../ui/SectionTitle';
import { ServiceCard } from './ServiceCard';

const services = [
  {
    icon: <HiOutlineCode className="h-8 w-8" />,
    title: "Web Development",
    description: "Custom websites built with modern technologies and best practices."
  },
  {
    icon: <HiOutlinePencil className="h-8 w-8" />,
    title: "Brand Design",
    description: "Crafting unique brand identities that leave lasting impressions."
  },
  {
    icon: <HiOutlineCamera className="h-8 w-8" />,
    title: "Digital Marketing",
    description: "Strategic marketing solutions to grow your digital presence."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <Container>
        <SectionTitle 
          title="Our Services"
          subtitle="Elevating brands through innovative solutions"
        />
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}