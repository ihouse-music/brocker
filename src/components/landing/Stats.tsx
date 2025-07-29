'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  {
    label: 'Verified Brokers',
    value: '2,500+',
    change: '+15%',
    changeType: 'increase' as const,
  },
  {
    label: 'Leads Generated',
    value: '150K+',
    change: '+22%',
    changeType: 'increase' as const,
  },
  {
    label: 'Properties Showcased',
    value: '45K+',
    change: '+18%',
    changeType: 'increase' as const,
  },
  {
    label: 'Success Rate',
    value: '94%',
    change: '+3%',
    changeType: 'increase' as const,
  },
];

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 bg-white">
      <div className="container-fluid">
        <motion.div
          ref={ref}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-gray-600 mb-1">
                {stat.label}
              </div>
              <div className="flex items-center justify-center space-x-1">
                <span
                  className={`text-xs font-medium ${
                    stat.changeType === 'increase'
                      ? 'text-green-600'
                      : 'text-red-600'
                  }`}
                >
                  {stat.change}
                </span>
                <span className="text-xs text-gray-500">this month</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}