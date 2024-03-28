'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ServicesSubMenu = () => {
  return (
    <div className="services-submenu">
      <ul className="sub-menu elementor-nav-menu-dropdown">
        <li className="menu-item">
          <Link
            href="./assets/logo.jpg"
            className="text-decoration-none text-black"
          >
            Supported Independent Living
          </Link>
        </li>
        <li className="menu-item">
          <Link
            href="./assets/logo.jpg"
            className="text-decoration-none text-black"
          >
            Short Term Accommodation
          </Link>
        </li>
        <li className="menu-item">
          <Link
            href="./assets/logo.jpg"
            className="text-decoration-none text-black"
          >
            NDIS Support Coordination
          </Link>
        </li>
        <li className="menu-item">
          <Link
            href="./assets/logo.jpg"
            className="text-decoration-none text-black"
          >
            Camps & Getaways
          </Link>
        </li>
        <li className="menu-item">
          <Link
            href="https://shinesocialandcommunities.com.au/individual-support/"
            className="text-decoration-none text-black"
          >
            Individual Support
          </Link>
        </li>
        <li className="menu-item">
          <Link
            href="https://shinesocialandcommunities.com.au/group-programs/"
            className="text-decoration-none text-black"
          >
            Group Programs & Activities
          </Link>
        </li>
      </ul>
    </div>
  );
};

const Navigation = () => {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [showServicesSubMenu, setShowServicesSubMenu] = useState(false);

  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
    setShowServicesSubMenu(false); // Close ServicesSubMenu when Services link is clicked
  };

  const toggleServicesSubMenu = () => {
    setShowServicesSubMenu(!showServicesSubMenu);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <Link href="/" className="navbar-brand">
          <Image
            width="150"
            height="150"
            src="/assets/logo-removebg.png"
            alt="logo"
            sizes="(max-width: 430px) 50vw, 430px"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleSubMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${showSubMenu ? 'show' : ''}`}
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="/" className="nav-link px-4">
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle px-4"
                href="#"
                onClick={toggleServicesSubMenu}
              >
                Services
              </Link>
              <div
                className={`dropdown-menu ${showServicesSubMenu ? 'show' : ''}`}
                style={{ position: 'absolute' }}
              >
                <ServicesSubMenu />
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-4" href="/about-us">
                About Us
              </Link>
            </li>
          </ul>

          <button className="btn btn-primary fs-4">Get in Touch</button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
