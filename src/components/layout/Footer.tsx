import Link from 'next/link';
import { 
  BuildingOfficeIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon 
} from '@heroicons/react/24/outline';

const navigation = {
  platform: [
    { name: 'Find Brokers', href: '/brokers' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Features', href: '/features' },
    { name: 'Pricing', href: '/pricing' },
  ],
  brokers: [
    { name: 'Join as Broker', href: '/register' },
    { name: 'Broker Guidelines', href: '/broker-guidelines' },
    { name: 'Verification Process', href: '/verification' },
    { name: 'Success Stories', href: '/success-stories' },
  ],
  support: [
    { name: 'Help Center', href: '/help' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Community', href: '/community' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Compliance', href: '/compliance' },
  ],
};

const social = [
  {
    name: 'Facebook',
    href: '#',
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: '#',
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'Twitter',
    href: '#',
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: '#',
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12.017 0C8.396 0 7.985.013 6.744.06 5.505.108 4.703.27 3.995.472 3.263.683 2.644.982 2.028 1.598c-.616.616-.915 1.235-1.126 1.967C.7 4.273.538 5.075.49 6.314.443 7.555.43 7.966.43 11.587s.013 4.032.06 5.273c.048 1.239.21 2.041.412 2.749.211.732.51 1.351 1.126 1.967.616.616 1.235.915 1.967 1.126.708.202 1.51.364 2.749.412 1.241.047 1.652.06 5.273.06s4.032-.013 5.273-.06c1.239-.048 2.041-.21 2.749-.412.732-.211 1.351-.51 1.967-1.126.616-.616.915-1.235 1.126-1.967.202-.708.364-1.51.412-2.749.047-1.241.06-1.652.06-5.273s-.013-4.032-.06-5.273c-.048-1.239-.21-2.041-.412-2.749C22.398 2.644 22.099 2.025 21.483 1.409 20.867.793 20.248.494 19.516.283 18.808.081 18.006-.081 16.767-.129 15.526-.176 15.115-.189 11.494-.189s-4.032.013-5.273.06C5.982.921 5.18 1.083 4.472 1.285 3.74 1.496 3.121 1.795 2.505 2.411 1.889 3.027 1.59 3.646 1.379 4.378.177 5.086.015 5.888-.033 7.127-.08 8.368-.093 8.779-.093 12.4s.013 4.032.06 5.273c.048 1.239.21 2.041.412 2.749.211.732.51 1.351 1.126 1.967.616.616 1.235.915 1.967 1.126.708.202 1.51.364 2.749.412 1.241.047 1.652.06 5.273.06s4.032-.013 5.273-.06c1.239-.048 2.041-.21 2.749-.412.732-.211 1.351-.51 1.967-1.126.616-.616.915-1.235 1.126-1.967.202-.708.364-1.51.412-2.749.047-1.241.06-1.652.06-5.273s-.013-4.032-.06-5.273c-.048-1.239-.21-2.041-.412-2.749C22.398 2.644 22.099 2.025 21.483 1.409 20.867.793 20.248.494 19.516.283 18.808.081 18.006-.081 16.767-.129 15.526-.176 15.115-.189 11.494-.189zm-.47 17.442c-3.298 0-5.97-2.672-5.97-5.97s2.672-5.97 5.97-5.97 5.97 2.672 5.97 5.97-2.672 5.97-5.97 5.97zm6.228-10.798c-.769 0-1.392-.623-1.392-1.392s.623-1.392 1.392-1.392 1.392.623 1.392 1.392-.623 1.392-1.392 1.392z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="container-fluid py-12 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            {/* Logo and description */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">BC</span>
              </div>
              <span className="font-display font-bold text-xl text-white">
                BrokerConnect
              </span>
            </div>
            <p className="text-gray-300 text-sm">
              The most trusted digital platform for real estate professionals. 
              Build your verified profile, capture quality leads, and grow your 
              business with transparency and credibility.
            </p>
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300 text-sm">
                <EnvelopeIcon className="w-4 h-4" />
                <span>hello@brokerconnect.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 text-sm">
                <PhoneIcon className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 text-sm">
                <MapPinIcon className="w-4 h-4" />
                <span>New York, NY</span>
              </div>
            </div>
            {/* Social Links */}
            <div className="flex space-x-6">
              {social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-gray-300 transition-colors"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="w-6 h-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Navigation Links */}
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
                  Platform
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.platform.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm text-gray-300 hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
                  For Brokers
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.brokers.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm text-gray-300 hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
                  Support
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm text-gray-300 hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
                  Legal
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm text-gray-300 hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="mt-12 border-t border-gray-700 pt-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex space-x-6 md:order-2">
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <span>Available on:</span>
                <div className="flex space-x-2">
                  <span className="bg-gray-800 px-2 py-1 rounded text-xs">iOS</span>
                  <span className="bg-gray-800 px-2 py-1 rounded text-xs">Android</span>
                  <span className="bg-gray-800 px-2 py-1 rounded text-xs">Web</span>
                </div>
              </div>
            </div>
            <p className="mt-8 text-sm text-gray-400 md:order-1 md:mt-0">
              &copy; {new Date().getFullYear()} BrokerConnect, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}