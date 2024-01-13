import type { Metadata } from 'next';
import { Barlow } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import Head from 'next/head';

import './globals.css';

const barlow = Barlow({ subsets: ['latin'], weight: ['500', '900'] });

export const metadata: Metadata = {
  title: 'My Interviews',
  description: 'Land your dream job',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <Head>
          <link rel="icon" href="/icon.ico" />
        </Head>
        <body className={barlow.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
