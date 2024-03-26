import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaChevronDown } from 'react-icons/fa';

const navigation = [
  { name: 'Home', href: '/' },
  // { name: 'Careers', href: '#' },
  // { name: 'Community Services', href: '#' },
  { name: 'Services', href: '#' },
  { name: 'Contact Us', href: '#' },
  // { name: 'Donate', href: '#' },
  // { name: 'Search', href: '#' },
  { name: 'About Us', href: '#' },
  // { name: 'Get Involved', href: '#' },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    console.log('clicked');

    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="navbar navbar-expand-lg navbar-light bg-light header-section">
      <div className="container-fluid">
        <Link
          href="tel: xxxxxxxxxx"
          className="text-decoration-none text-white p-3 fs-4 call-us"
        >
          Call us at xxxxxx
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMobileMenu}
        >
          <FaBars className="outline-none" />
        </button>
        <div
          className={`collapse navbar-collapse ${mobileMenuOpen ? 'show' : ''}`}
        >
          <ul className="navbar-nav mb-2 ms-auto mb-lg-0 justify-content-end lg:me-auto">
            {navigation.map((item, index) => (
              <li key={index} className="nav-item">
                {item.name === 'Services' ? (
                  <div className="nav-link px-4 fs-4 services-link">
                    {item.name} <FaChevronDown className="chevron-icon" />
                    <div className="sub-menus">
                      {/* Content of your sub-menus here */}
                      <h5 className="text-green-600 p-2">
                        Support Independent Living
                      </h5>
                      <h5 className="text-green-600 p-2">
                        NDIS Support Coordination
                      </h5>
                      <h5 className="text-green-600 p-2">Individual Support</h5>
                      <h5 className="text-green-600 p-2">
                        Group Programs & Activities
                      </h5>
                    </div>
                  </div>
                ) : (
                  <Link href={item.href} className="nav-link px-4 fs-4">
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
