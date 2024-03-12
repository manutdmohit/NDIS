import 'bootstrap/dist/css/bootstrap.min.css';

import type { Metadata } from 'next';
import { Questrial } from 'next/font/google';
import './globals.css';

import BootStrapClient from './BootstrapClient';

const barlow = Questrial({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NDIS',
  description: 'Helping Hands',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={barlow.className}>
        {children}
        <BootStrapClient />
      </body>
    </html>
  );
}
