'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  UserCircleIcon,
  DocumentCheckIcon,
  ChartBarIcon,
  ChatBubbleLeftRightIcon,
  QrCodeIcon,
  TrophyIcon,
  ShieldCheckIcon,
  DevicePhoneMobileIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Verified Broker Profiles',
    description: 'Complete KYC verification with license validation and admin approval before profile activation.',
    icon: UserCircleIcon,
    color: 'primary',
  },
  {
    name: 'Smart Lead Capture',
    description: 'Advanced inquiry forms with real-time alerts, lead management dashboard, and export capabilities.',
    icon: DocumentCheckIcon,
    color: 'success',
  },
  {
    name: 'Analytics & Insights',
    description: 'Real-time metrics on profile views, lead sources, engagement, and conversion funnels.',
    icon: ChartBarIcon,
    color: 'warning',
  },
  {
    name: 'Broker Wall (Social Feed)',
    description: 'Timeline-style updates for listings, testimonials, milestones, and thought leadership content.',
    icon: ChatBubbleLeftRightIcon,
    color: 'primary',
  },
  {
    name: 'QR Code & Business Cards',
    description: 'Generate custom QR codes and digital business cards for offline marketing and networking.',
    icon: QrCodeIcon,
    color: 'secondary',
  },
  {
    name: 'Gamification & Recognition',
    description: 'Level-based progress with badges, top broker charts, and activity-based rewards system.',
    icon: TrophyIcon,
    color: 'warning',
  },
  {
    name: 'Trust & Security',
    description: 'GDPR-compliant platform with end-to-end encryption and transparent verification process.',
    icon: ShieldCheckIcon,
    color: 'success',
  },
  {
    name: 'Mobile-First Design',
    description: 'Responsive PWA with offline capabilities, push notifications, and optimized mobile experience.',
    icon: DevicePhoneMobileIcon,
    color: 'primary',
  },
];

const colorClasses = {
  primary: {
    icon: 'text-primary-600 bg-primary-100',
    gradient: 'from-primary-500 to-primary-600',
  },
  success: {
    icon: 'text-success-600 bg-success-100',
    gradient: 'from-success-500 to-success-600',
  },
  warning: {
    icon: 'text-warning-600 bg-warning-100',
    gradient: 'from-warning-500 to-warning-600',
  },
  secondary: {
    icon: 'text-secondary-600 bg-secondary-100',
    gradient: 'from-secondary-500 to-secondary-600',
  },
};

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-gray-50">
      <div className="container-fluid">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            Everything You Need to{' '}
            <span className="text-gradient-primary">Succeed</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive tools designed specifically for real estate professionals 
            to build trust, capture leads, and grow their business.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          ref={ref}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Card */}
              <div className="relative h-full bg-white rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 group-hover:-translate-y-1">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-6 ${colorClasses[feature.color as keyof typeof colorClasses].icon}`}>
                  <feature.icon className="w-6 h-6" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Gradient accent */}
                <div className={`absolute top-0 left-8 w-16 h-1 bg-gradient-to-r ${colorClasses[feature.color as keyof typeof colorClasses].gradient} rounded-full`} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-gray-600 mb-6">
            Ready to transform your real estate business?
          </p>
          <button className="btn btn-primary btn-lg">
            Explore All Features
          </button>
        </motion.div>
      </div>
    </section>
  );
}