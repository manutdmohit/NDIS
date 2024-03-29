import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mx-auto">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <Link href="/" className="navbar-brand">
              <Image
                width="150"
                height="150"
                src="/assets/logo-removebg.png"
                alt="logo"
                sizes="(max-width: 430px) 50vw, 430px"
              />
            </Link>
          </div>
          <div className="col-md-4 mb-4">
            <ul className="list-unstyled">
              <h5>Contact Details</h5>
              <li>Address: 23 Norman Dunlop Crescent Minto</li>
              <li>Phone: 0452 150 350, 0482 026 019</li>6
              <li>Email: zestlifedisability@gmail.com</li>
            </ul>
          </div>
          <div className="col-md-4 quick-links mb-4">
            <ul className="list-unstyled">
              <h5>Quick Links</h5>
              <li>
                <Link href="/" className="text-decoration-none text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="text-decoration-none text-white"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-decoration-none text-white"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="text-decoration-none text-white"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
