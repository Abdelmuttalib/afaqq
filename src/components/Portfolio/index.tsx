import React from 'react';
import { Container } from '../layout/Container';
import { SectionTitle } from '../ui/SectionTitle';
import { ProjectCard } from './ProjectCard';

const projects = [
  {
    title: "Modern E-commerce",
    category: "Web Development",
    bgColor: "bg-gray-800"
  },
  {
    title: "Brand Identity",
    category: "Design",
    bgColor: "bg-gray-900"
  },
  {
    title: "Digital Campaign",
    category: "Marketing",
    bgColor: "bg-black"
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <Container>
        <SectionTitle 
          title="Our Work"
          subtitle="Showcasing our finest projects"
        />
        
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}