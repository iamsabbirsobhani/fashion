import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { useEffect } from 'react';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Fashion',
  description: 'A new way to shop for clothes',
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/images/icon-light.png',
        href: '/images/icon-light.png',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/images/icon.png',
        href: '/images/icon.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
