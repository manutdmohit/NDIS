import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>Contact Details</h5>
            <ul className="list-unstyled">
              <li>Address: 123 Main St, City, Country</li>
              <li>Phone: +1234567890</li>
              <li>Email: example@example.com</li>
            </ul>
          </div>
          <div className="col-md-6 quick-links">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-decoration-none text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-white">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
