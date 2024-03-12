// components/Header.js

import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Careers', href: '#' },
  { name: 'Community Services', href: '#' },
  { name: 'Contact Us', href: '#' },
  { name: 'Donate', href: '#' },
  { name: 'Search', href: '#' },
  { name: 'About Us', href: '#' },
  { name: 'Get Involved', href: '#' },
  { name: 'Services', href: '#' },
];

const allNavigations = [
  { name: 'Home', href: '/' },
  { name: 'Careers', href: '#' },
  { name: 'Community Services', href: '#' },
  { name: 'Contact Us', href: '#' },
  { name: 'Donate', href: '#' },
  { name: 'About us', href: '#' },
  { name: 'Get Involved', href: '#' },
  { name: 'Services', href: '#' },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="navbar navbar-expand-lg navbar-light bg-light header-section">
      <div className="container-fluid">
        <Link
          href="tel: xxxxxxxxxx"
          className="text-decoration-none text-white p-3 fs-4"
        >
          Call us at xxxxxx
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <FaBars className="outline-none" />
        </button>
        <div
          className={`collapse navbar-collapse ${mobileMenuOpen ? 'show' : ''}`}
        >
          <ul className="navbar-nav mb-2 ms-auto mb-lg-0 justify-content-end lg:me-auto">
            {navigation.map((item, index) => (
              <li key={index} className="nav-item">
                <Link href={item.href} className="nav-link">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="overlay" onClick={() => setMobileMenuOpen(false)}></div>
      )}
    </header>
  );
};

export default Header;
