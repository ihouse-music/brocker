import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import { Toaster } from 'react-hot-toast';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: {
    default: 'BrokerConnect - Verified Real Estate Professionals',
    template: '%s | BrokerConnect',
  },
  description: 'A verified, trust-first platform empowering real estate brokers with digital profiles, lead management, and professional networking tools.',
  keywords: ['real estate', 'brokers', 'property', 'listings', 'verified professionals', 'lead generation'],
  authors: [{ name: 'BrokerConnect Team' }],
  creator: 'BrokerConnect',
  publisher: 'BrokerConnect',
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_APP_URL,
    title: 'BrokerConnect - Verified Real Estate Professionals',
    description: 'A verified, trust-first platform empowering real estate brokers with digital profiles, lead management, and professional networking tools.',
    siteName: 'BrokerConnect',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BrokerConnect Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BrokerConnect - Verified Real Estate Professionals',
    description: 'A verified, trust-first platform empowering real estate brokers with digital profiles, lead management, and professional networking tools.',
    images: ['/twitter-image.jpg'],
    creator: '@brokerconnect',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className={`${inter.className} antialiased`}>
        <div id="root">
          {children}
        </div>
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#363636',
              color: '#fff',
            },
            success: {
              duration: 3000,
              iconTheme: {
                primary: '#22c55e',
                secondary: '#fff',
              },
            },
            error: {
              duration: 5000,
              iconTheme: {
                primary: '#ef4444',
                secondary: '#fff',
              },
            },
          }}
        />
      </body>
    </html>
  );
}