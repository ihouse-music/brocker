'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Bars3Icon, 
  XMarkIcon, 
  UserIcon, 
  MagnifyingGlassIcon,
  BellIcon,
  ChevronDownIcon 
} from '@heroicons/react/24/outline';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import clsx from 'clsx';

const navigation = [
  { name: 'Find Brokers', href: '/brokers' },
  { name: 'How It Works', href: '/how-it-works' },
  { name: 'Features', href: '/features' },
  { name: 'Pricing', href: '/pricing' },
];

const userNavigation = [
  { name: 'Profile', href: '/dashboard/profile' },
  { name: 'Settings', href: '/dashboard/settings' },
  { name: 'Help', href: '/help' },
  { name: 'Sign out', href: '/logout' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  
  // Mock user state - in real app this would come from auth context
  const isAuthenticated = false;
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    avatar: '/avatars/john-doe.jpg',
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <nav className="container-fluid" aria-label="Top">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">BC</span>
              </div>
              <span className="font-display font-bold text-xl text-gray-900">
                BrokerConnect
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={clsx(
                  'px-3 py-2 text-sm font-medium rounded-md transition-colors',
                  pathname === item.href
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <button className="p-2 text-gray-500 hover:text-gray-700 rounded-md hover:bg-gray-100 lg:hidden">
              <MagnifyingGlassIcon className="w-5 h-5" />
            </button>

            {isAuthenticated ? (
              <>
                {/* Notifications */}
                <button className="p-2 text-gray-500 hover:text-gray-700 rounded-md hover:bg-gray-100 relative">
                  <BellIcon className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                    3
                  </span>
                </button>

                {/* User Menu */}
                <Menu as="div" className="relative">
                  <Menu.Button className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100">
                    <img
                      className="w-8 h-8 rounded-full"
                      src={user.avatar}
                      alt={user.name}
                    />
                    <ChevronDownIcon className="w-4 h-4 text-gray-500" />
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="px-4 py-3 border-b border-gray-100">
                        <p className="text-sm font-medium text-gray-900">{user.name}</p>
                        <p className="text-sm text-gray-500">{user.email}</p>
                      </div>
                      <div className="py-1">
                        {userNavigation.map((item) => (
                          <Menu.Item key={item.name}>
                            {({ active }) => (
                              <Link
                                href={item.href}
                                className={clsx(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700'
                                )}
                              >
                                {item.name}
                              </Link>
                            )}
                          </Menu.Item>
                        ))}
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </>
            ) : (
              <>
                {/* Auth Buttons */}
                <Link
                  href="/login"
                  className="text-sm font-medium text-gray-700 hover:text-gray-900"
                >
                  Sign in
                </Link>
                <Link
                  href="/register"
                  className="btn btn-primary btn-sm"
                >
                  Join as Broker
                </Link>
              </>
            )}

            {/* Mobile menu button */}
            <button
              type="button"
              className="lg:hidden p-2 text-gray-500 hover:text-gray-700 rounded-md hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <Transition
          show={mobileMenuOpen}
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-in"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-gray-200">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={clsx(
                    'block px-3 py-2 text-base font-medium rounded-md',
                    pathname === item.href
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              {!isAuthenticated && (
                <div className="pt-4 space-y-2">
                  <Link
                    href="/login"
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Sign in
                  </Link>
                  <Link
                    href="/register"
                    className="block px-3 py-2 text-base font-medium text-white bg-primary-600 rounded-md hover:bg-primary-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Join as Broker
                  </Link>
                </div>
              )}
            </div>
          </div>
        </Transition>
      </nav>
    </header>
  );
}