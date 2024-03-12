'use client';

import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Header from '@/components/Header/Header';
import NewsLetter from '@/components/News Letter/NewsLetter';
import Test from '@/components/Test/Test';
import HeaderNavigation from '@/components/Header Navigation/HeaderNavigation';
import Footer from '@/components/Footer/Footer';
import NDISProviderInfo from '@/components/NDISProviderInfo/NDISProviderInfo';

export default function Website() {
  return (
    <div className="bg-white">
      <Header />
      <Test />
      <NDISProviderInfo />
      <Footer />
    </div>
  );
}
