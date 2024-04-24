import 'bootstrap/dist/css/bootstrap.min.css';

import type { Metadata } from 'next';
import { Questrial } from 'next/font/google';
import './globals.css';

import BootStrapClient from './BootstrapClient';

import Footer from '@/components/Footer/Footer';

const barlow = Questrial({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ZESTLIFE ABILITY',
  description:
    'Thrive Behind Barriers | Helping Hands. At Zestlife Ability, we are a spirited bunch of NDIS superheroes on a mission to sprinkle some magic into everyday life. Our team of expert wizards is here to offer a helping hand with personal care and more because we believe in transforming challenges into triumphs!',
  keywords:
    'Disability, Support, Togetherness, Assistance, Positive Mindset, Determination, Right Support',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={barlow.className}>
        {children}
        <BootStrapClient />
        <Footer />
      </body>
    </html>
  );
}
