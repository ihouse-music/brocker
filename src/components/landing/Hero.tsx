'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronRightIcon, PlayIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

export default function Hero() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <div className="relative overflow-hidden bg-white">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50" />
      
      <div className="relative container-fluid">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left column - Content */}
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <motion.div 
              className="inline-flex items-center space-x-2 bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-medium mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span>🎉</span>
              <span>Now with verified broker profiles</span>
              <ChevronRightIcon className="w-4 h-4" />
            </motion.div>

            {/* Main headline */}
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="block">The Most</span>
              <span className="block text-gradient-primary">Trusted Platform</span>
              <span className="block">for Real Estate Brokers</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Build your verified digital profile, capture quality leads, and grow your 
              real estate business with tools designed for transparency and trust.
            </motion.p>

            {/* Trust indicators */}
            <motion.div 
              className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mb-8 text-sm text-gray-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span>Verified Professionals Only</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                <span>GDPR Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full" />
                <span>Mobile-First Design</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Link 
                href="/register" 
                className="btn btn-primary btn-lg group"
              >
                Join as Broker
                <ChevronRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button 
                onClick={() => setIsVideoPlaying(true)}
                className="btn btn-outline btn-lg group"
              >
                <PlayIcon className="w-5 h-5 mr-2" />
                Watch Demo
              </button>
            </motion.div>

            {/* Social proof */}
            <motion.div 
              className="mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <p className="text-sm text-gray-500 mb-4">Trusted by leading brokers</p>
              <div className="flex items-center justify-center lg:justify-start space-x-8 opacity-60">
                {/* Logo placeholders */}
                <div className="h-8 w-20 bg-gray-300 rounded" />
                <div className="h-8 w-20 bg-gray-300 rounded" />
                <div className="h-8 w-20 bg-gray-300 rounded" />
                <div className="h-8 w-20 bg-gray-300 rounded" />
              </div>
            </motion.div>
          </motion.div>

          {/* Right column - Visual */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Main dashboard mockup */}
            <div className="relative z-10 bg-white rounded-2xl shadow-strong p-6">
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-full" />
                    <div>
                      <div className="h-4 w-24 bg-gray-300 rounded" />
                      <div className="h-3 w-16 bg-gray-200 rounded mt-1" />
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-8 h-8 bg-green-100 rounded-lg" />
                    <div className="w-8 h-8 bg-blue-100 rounded-lg" />
                  </div>
                </div>

                {/* Stats cards */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-primary-50 p-3 rounded-lg">
                    <div className="h-3 w-8 bg-primary-200 rounded mb-2" />
                    <div className="h-6 w-12 bg-primary-400 rounded" />
                  </div>
                  <div className="bg-success-50 p-3 rounded-lg">
                    <div className="h-3 w-8 bg-success-200 rounded mb-2" />
                    <div className="h-6 w-12 bg-success-400 rounded" />
                  </div>
                  <div className="bg-warning-50 p-3 rounded-lg">
                    <div className="h-3 w-8 bg-warning-200 rounded mb-2" />
                    <div className="h-6 w-12 bg-warning-400 rounded" />
                  </div>
                </div>

                {/* Chart area */}
                <div className="h-32 bg-gray-50 rounded-lg flex items-end justify-center p-4">
                  <div className="flex items-end space-x-2">
                    {Array.from({ length: 7 }).map((_, i) => (
                      <div 
                        key={i}
                        className="bg-primary-400 rounded-t"
                        style={{ 
                          height: `${Math.random() * 60 + 20}px`,
                          width: '16px'
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* List items */}
                <div className="space-y-3">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded">
                      <div className="w-8 h-8 bg-gray-200 rounded-full" />
                      <div className="flex-1">
                        <div className="h-3 w-full bg-gray-200 rounded mb-1" />
                        <div className="h-2 w-2/3 bg-gray-100 rounded" />
                      </div>
                      <div className="w-16 h-6 bg-primary-100 rounded" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <motion.div 
              className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl shadow-lg"
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-success-500 to-success-600 rounded-xl shadow-lg"
              animate={{ 
                y: [0, 10, 0],
                rotate: [0, -5, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* Video modal */}
      {isVideoPlaying && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative w-full max-w-4xl mx-4">
            <button
              onClick={() => setIsVideoPlaying(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 text-xl"
            >
              ✕
            </button>
            <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center">
              <p className="text-white">Demo video would play here</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}