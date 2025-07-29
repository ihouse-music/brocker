import { Metadata } from 'next';
import Hero from '@/components/landing/Hero';
import Features from '@/components/landing/Features';
import HowItWorks from '@/components/landing/HowItWorks';
import Stats from '@/components/landing/Stats';
import Testimonials from '@/components/landing/Testimonials';
import CTA from '@/components/landing/CTA';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'BrokerConnect - Verified Real Estate Professionals',
  description: 'Join the most trusted digital platform for real estate brokers. Build your professional profile, capture leads, and grow your business with verified credentials.',
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Features />
        <HowItWorks />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}