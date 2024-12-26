import React from 'react';
import { Container } from '../layout/Container';
import { SectionTitle } from '../ui/SectionTitle';
import { ContactForm } from './ContactForm';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-black text-white">
      <Container>
        <SectionTitle 
          title="Get in Touch"
          subtitle="Let's create something amazing together"
          className="text-white"
        />
        
        <div className="max-w-2xl mx-auto">
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}