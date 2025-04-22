// pages/index.js
import Hero from '@/components/hero';
import Overview from '@/components/overview';
import Services from '@/components/services';
import Testimonials from '@/components/testimonial';

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Home",
    description: "Home Page",
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">

      <section id="home">
        <Hero />
      </section> 

      <section id="overview">
        <Overview />
      </section>


      <section id="services">
        <Services />
      </section>

      <Testimonials />

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4 mt-20">
        <p className="text-sm">&copy; {new Date().getFullYear()} Digisync Labs. All rights reserved.</p>
      </footer>


    </div>
  );
}
